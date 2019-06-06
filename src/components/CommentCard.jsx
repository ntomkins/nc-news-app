import React from 'react';

const commentCard = props => {
  const { comments } = props;
  return (
    <ul>
      {comments.map(comment => {
        return (
          <li key={comment.comment_id} className='commentCard'>
            <div className='commentVotes'>
              <h4 className='voteArrow'>
                <span role='img' aria-label='thumb up'>
                  👍
                </span>
              </h4>
              <h3>{comment.votes}</h3>

              <h4 className='voteArrow'>
                <span role='img' aria-label='thumb down'>
                  👎
                </span>
              </h4>
            </div>
            <div className='commentCardContent'>
              <div className='commentHeader'>
                <h3>{comment.author}</h3>
                {props.loggedInUser &&
                  props.loggedInUser.username === comment.author && (
                    <h4
                      onClick={() => props.deleteComment(comment.comment_id)}
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
      })}
    </ul>
  );
};

export default commentCard;
