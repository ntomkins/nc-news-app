import React, { Component } from 'react';
import { fetchCommentsbyArticleId } from './axios';
import CommentCard from './CommentCard';

class ArticleComments extends Component {
  state = { comments: [] };

  componentDidMount() {
    fetchCommentsbyArticleId(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  }

  render() {
    const { comments } = this.state;
    return (
      <>
        <CommentCard comments={comments} />
      </>
    );
  }
}

export default ArticleComments;
