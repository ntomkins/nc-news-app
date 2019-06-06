import React, { Component } from 'react';
import { fetchCommentsbyArticleId, deleteCommentByCommentId } from './axios';
import CommentCard from './CommentCard';
import SubmitCommentBox from './SubmitCommentBox';

class ArticleComments extends Component {
  state = { comments: [] };

  componentDidMount() {
    fetchCommentsbyArticleId(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments.length !== this.state.comments.length) {
      fetchCommentsbyArticleId(this.props.article_id).then(comments => {
        this.setState({ comments });
      });
    }
  }

  render() {
    const { comments } = this.state;
    const { article_id } = this.props;
    return (
      <>
        <SubmitCommentBox
          updateComments={this.updateComments}
          loggedInUser={this.props.loggedInUser}
          article_id={article_id}
        />
        <CommentCard
          deleteComment={this.deleteComment}
          comments={comments}
          loggedInUser={this.props.loggedInUser}
        />
      </>
    );
  }

  updateComments = comment => {
    this.setState(prevState => {
      return {
        comments: [comment, ...prevState.comments]
      };
    });
  };

  deleteComment = comment_id => {
    deleteCommentByCommentId(comment_id).then(status => {
      fetchCommentsbyArticleId(this.props.article_id).then(comments => {
        this.setState({ comments });
      });
    });
  };
}

export default ArticleComments;
