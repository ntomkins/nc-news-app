import React, { Component } from 'react';
import { postCommentByArticleId } from './axios';

class SubmitCommentBox extends Component {
  state = { commentInput: null, showCommentErr: false };

  componentDidMount() {}

  render() {
    if (!this.props.loggedInUser) return <h3>log in to comment</h3>;
    return (
      <>
        <form
          onSubmit={
            this.state.commentInput ? this.handleSubmit : this.handleSubmitError
          }
          className='submitComment'
        >
          <label>
            Add Comment:
            <input
              onChange={this.handleInput}
              type='text'
              name='comment'
              placeholder='comment here'
            />
          </label>
          <input type='submit' value='submit comment' />
        </form>
        {this.state.showCommentErr && <h3>comment required</h3>}
      </>
    );
  }
  handleInput = e => {
    this.setState({ commentInput: e.target.value });
  };

  handleSubmitError = e => {
    e.preventDefault();
    this.setState({ showCommentErr: true });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ showCommentErr: false });
    const { article_id } = this.props;
    const username = this.props.loggedInUser.username;
    const body = this.state.commentInput;
    postCommentByArticleId({
      article_id,
      username,
      body
    }).then(comment => {
      this.props.updateComments(comment);
    });
  };
}

export default SubmitCommentBox;
