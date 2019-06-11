import React, { Component } from 'react';
import { patchVote } from '../axios';

class commentCard extends Component {
  state = { voteChange: 0 };

  render() {
    const { comment, loggedInUser } = this.props;
    const { voteChange } = this.state;
    return (
      <li key={comment.comment_id} className='commentCard'>
        <div className='commentVotes'>
          <h4
            className='voteArrow'
            id={`thumbUpColor${voteChange}`}
            onClick={() => this.handleVote(1)}
          >
            <span role='img' aria-label='thumb up'>
              👍
            </span>
          </h4>
          <h3>{comment.votes + voteChange}</h3>
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
        <div className='commentCardContent'>
          <div className='commentHeader'>
            <h3>{comment.author}</h3>
            {loggedInUser && loggedInUser.username === comment.author && (
              <h4
                onClick={() => this.props.deleteComment(comment.comment_id)}
                id='deleteUser'
              >
                [delete]
              </h4>
            )}
          </div>
          <h5>{comment.created_at}</h5>
          <p>{comment.body}</p>
        </div>
      </li>
    );
  }

  handleVote = voteChangeInput => {
    const { comment_id } = this.props.comment;
    const { voteChange } = this.state;
    if (voteChange === 0) {
      patchVote(voteChangeInput, 'comments', comment_id);
      this.setState({ voteChange: voteChangeInput });
    } else if (voteChange === voteChangeInput) {
      patchVote(-voteChangeInput, 'comments', comment_id);
      this.setState({ voteChange: 0 });
    } else if (voteChange !== voteChangeInput) {
      patchVote(-2 * voteChangeInput, 'comments', comment_id);
      this.setState({ voteChange: voteChangeInput });
    }
  };
}

export default commentCard;
