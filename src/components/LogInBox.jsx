import React, { Component } from 'react';
import { fetchUsername } from '../axios';

class LogInBox extends Component {
  state = { usernameInput: '', err: null };

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
              <p>(you can log in as "guest")</p>
              <input
                onChange={this.handleInput}
                required={true}
                type='text'
                name='username'
                placeholder='Username'
                id='logInUsernameEntry'
              />
              <div className='logInButton'>
                <input type='submit' value='Log In' id='logInSubmitButton' />
                {this.state.err && this.state.err.status === 404 && (
                  <h4 id='userNotFound'>username not found</h4>
                )}
              </div>
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
    fetchUsername(this.state.usernameInput)
      .then(user => {
        this.props.updateLoggedInUser(user);
      })
      .catch(({ response }) => {
        const { msg } = response.data;
        const { status } = response;
        const err = { msg, status };
        this.setState({
          err
        });
      });
  };
}

export default LogInBox;
