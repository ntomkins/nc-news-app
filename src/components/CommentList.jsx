import React from 'react';
import CommentCard from './CommentCard';

const commentList = props => {
  const { comments } = props;
  return (
    <ul>
      {comments.map(comment => {
        return (
          <CommentCard
            comment={comment}
            deleteComment={props.deleteComment}
            loggedInUser={props.loggedInUser}
            key={comment.comment_id}
          />
        );
      })}
    </ul>
  );
};

export default commentList;
