import React, { Component } from 'react';
import { patchVote } from '../axios';
import { Link } from '@reach/router';
import moment from 'moment';
moment().format();

class ArticleCard extends Component {
  state = { voteChange: 0 };

  render() {
    const { article } = this.props;
    const { voteChange } = this.state;
    const timeAgo = moment(article.created_at).fromNow();

    return (
      <li className='articleCard'>
        <div className='articleCardVotes'>
          <h4
            className='voteArrow'
            id={`thumbUpColor${voteChange}`}
            onClick={() => this.handleVote(1)}
          >
            <span role='img' aria-label='thumb up'>
              👍
            </span>
          </h4>
          <h3>{article.votes + voteChange}</h3>
          <h4 className='voteArrow' id={`thumbDownColor${voteChange}`}>
            <span
              role='img'
              aria-label='thumb down'
              onClick={() => this.handleVote(-1)}
            >
              👎
            </span>
          </h4>
        </div>
        <Link to={`/article/${article.article_id}`}>
          <div className='ArticleCardContent'>
            <h2>{article.title}</h2>
            <h4>{article.author}</h4>
            <p>
              {article.topic} / {timeAgo} / 💬{article.comment_count}
            </p>
          </div>
        </Link>
      </li>
    );
  }

  handleVote = voteChangeInput => {
    const { article_id } = this.props.article;
    const { voteChange } = this.state;
    if (voteChange === 0) {
      patchVote(voteChangeInput, 'articles', article_id);
      this.setState({ voteChange: voteChangeInput });
    } else if (voteChange === voteChangeInput) {
      patchVote(-voteChangeInput, 'articles', article_id);
      this.setState({ voteChange: 0 });
    } else if (voteChange !== voteChangeInput) {
      patchVote(-2 * voteChangeInput, 'articles', article_id);
      this.setState({ voteChange: voteChangeInput });
    }
  };
}

export default ArticleCard;
