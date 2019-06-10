import React, { Component } from 'react';
import { fetchCommentsbyArticleId, deleteCommentByCommentId } from '../axios';
import CommentList from './CommentList';
import SubmitCommentBox from './SubmitCommentBox';
import Error from './Error';

class ArticleComments extends Component {
  state = { comments: [], err: null };

  componentDidMount() {
    fetchCommentsbyArticleId(this.props.article_id)
      .then(comments => {
        this.setState({ comments });
      })
      .catch(({ response }) => {
        const { msg } = response.data;
        const { status } = response;
        const err = { msg, status };
        this.setState({
          err
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments.length !== this.state.comments.length) {
      fetchCommentsbyArticleId(this.props.article_id)
        .then(comments => {
          this.setState({ comments });
        })
        .catch(({ response }) => {
          const { msg } = response.data;
          const { status } = response;
          const err = { msg, status };
          this.setState({
            err
          });
        });
    }
  }

  render() {
    if (this.state.err) return <Error err={this.state.err} />;
    const { comments } = this.state;
    const { article_id } = this.props;
    return (
      <>
        <SubmitCommentBox
          updateComments={this.updateComments}
          loggedInUser={this.props.loggedInUser}
          article_id={article_id}
        />
        <CommentList
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
