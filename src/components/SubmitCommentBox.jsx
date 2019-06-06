import React, { Component } from 'react';
import { postCommentByArticleId } from './axios';

class SubmitCommentBox extends Component {
  state = { commentInput: null };

  componentDidMount() {}

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='submitComment'>
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
    );
  }
  handleInput = e => {
    console.log(this.state.commentInput);
    this.setState({ commentInput: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
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
