import React from 'react';

const commentCard = props => {
  const { comments } = props;
  console.log(comments);
  return (
    <ul>
      {comments.map(comment => {
        return (
          <li key={comment.comment_id} className='commentCard'>
            <div className='commentVotes'>
              <h4>↑ </h4>
              <h3>{comment.votes}</h3>
              <h4> ↓</h4>
            </div>
            <div className='commentCardContent'>
              <h3>{comment.author}</h3>
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
