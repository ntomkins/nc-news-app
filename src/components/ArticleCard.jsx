import React, { Component } from 'react';
import { voteOnArticle } from './axios';
import { Link } from '@reach/router';

class ArticleCard extends Component {
  state = { voteChange: 0 };

  render() {
    const { article } = this.props;

    return (
      <li className='articleCard'>
        <div className='articleCardVotes'>
          <h4
            className='voteArrow'
            id={`thumbUpColor${this.state.voteChange}`}
            onClick={() => this.handleVote(1)}
          >
            <span role='img' aria-label='thumb up'>
              👍
            </span>
          </h4>
          <h3>{article.votes + this.state.voteChange}</h3>
          <h4
            className='voteArrow'
            id={`thumbDownColor${this.state.voteChange}`}
          >
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
              {article.topic} date: {article.created_at} comments:{' '}
              {article.comment_count}
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
      voteOnArticle(voteChangeInput, article_id);
      this.setState({ voteChange: voteChangeInput });
    } else if (voteChange === 1) {
      if (voteChangeInput === 1) {
        voteOnArticle(-1, article_id);
        this.setState({ voteChange: 0 });
      } else if (voteChangeInput === -1) {
        voteOnArticle(-2, article_id);
        this.setState({ voteChange: -1 });
      }
    } else if (voteChange === -1) {
      if (voteChangeInput === 1) {
        voteOnArticle(2, article_id);
        this.setState({ voteChange: 1 });
      } else if (voteChangeInput === -1) {
        voteOnArticle(1, article_id);
        this.setState({ voteChange: 0 });
      }
    }
  };
}

export default ArticleCard;
