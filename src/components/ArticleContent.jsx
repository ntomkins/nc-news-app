import React, { Component } from 'react';
import { voteOnArticle } from './axios';

class ArticleContent extends Component {
  state = { voteChange: 0 };

  render() {
    const {
      title,
      author,
      topic,
      body,
      votes,
      created_at
    } = this.props.article;
    return (
      <>
        <div className='articleContents'>
          <h4>
            {author} / {created_at}
          </h4>
          <h1>{title}</h1>
          <div className='ArticlePageVotes'>
            <h4
              className='voteArrow'
              id={`thumbUpColor${this.state.voteChange}`}
              onClick={() => this.handleVote(1)}
            >
              <span role='img' aria-label='thumb up'>
                👍
              </span>
            </h4>
            <h3>{votes + this.state.voteChange}</h3>
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
          <p>{body}</p>
        </div>
      </>
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

export default ArticleContent;
