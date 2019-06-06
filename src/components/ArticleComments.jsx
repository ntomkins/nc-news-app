import React, { Component } from 'react';
import { fetchCommentsbyArticleId } from './axios';
import CommentCard from './CommentCard';
import SubmitCommentBox from './SubmitCommentBox';

class ArticleComments extends Component {
  state = { comments: [] };

  componentDidMount() {
    fetchCommentsbyArticleId(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  }

  render() {
    const { comments } = this.state;
    const { article_id } = this.props;
    return (
      <>
        <SubmitCommentBox
          loggedInUser={this.props.loggedInUser}
          article_id={article_id}
        />
        <CommentCard comments={comments} />
      </>
    );
  }
}

export default ArticleComments;
