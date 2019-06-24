import React, { Component } from 'react';
import { postCommentByArticleId } from '../axios';

class SubmitCommentBox extends Component {
  state = { commentInput: null, noCommentInputErr: false };

  render() {
    if (!this.props.loggedInUser) return <h3>log in to comment</h3>;
    return (
      <div className='commentBox'>
        <form
          onSubmit={
            this.state.commentInput ? this.handleSubmit : this.handleSubmitError
          }
          className='submitComment'
        >
          <label>
            <b>Share your thoughts...</b>
          </label>
          <input
            className='commentInput'
            onChange={this.handleInput}
            required={true}
            type='text'
            name='comment'
            placeholder='comment here'
          />
          <input type='submit' value='submit' className='commentButton' />
        </form>
        {this.state.noCommentInputErr && <h3>comment required</h3>}
      </div>
    );
  }
  handleInput = e => {
    this.setState({ commentInput: e.target.value });
  };

  handleSubmitError = e => {
    e.preventDefault();
    this.setState({ noCommentInputErr: true });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ noCommentInputErr: false });
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
    e.target.comment.value = '';
  };
}

export default SubmitCommentBox;
