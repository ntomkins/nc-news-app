import React, { Component } from 'react';
import axios from 'axios';

class LogInBox extends Component {
  state = { usernameInput: '' };
  render() {
    return (
      <div className='greyBackground'>
        <div className='logInBox'>
          <h1
            onClick={() => this.props.toggleLoginPopup(false)}
            id='closeLoginButton'
          >
            x
          </h1>
          <div className='logInBoxContents'>
            <form onSubmit={this.handleSubmit}>
              <h2>Sign In</h2>
              <input
                onChange={this.handleInput}
                type='text'
                name='username'
                placeholder='Username'
                id='logInUsernameEntry'
              />

              <input type='submit' value='Log In' id='logInSubmitButton' />
            </form>
          </div>
        </div>
      </div>
    );
  }
  handleInput = e => {
    this.setState({ usernameInput: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.getUsernames(e).then(username =>
      this.props.updateLoggedInUser(username)
    );
  };

  getUsernames = e => {
    const baseUrl = 'https://ntomkins-nc-news-app.herokuapp.com';
    const url = baseUrl + '/api/users/' + this.state.usernameInput;
    return axios.get(url).then(({ data: { user } }) => {
      return user;
    });
  };
}

export default LogInBox;
