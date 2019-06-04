import React, { Component } from 'react';

class LogInBox extends Component {
  state = {};
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
          <form className='logInForm'>
            <label>
              Log In:
              <input type='text' name='username' placeholder='Username' />
            </label>
            <input onClick={this.handleSubmit} type='submit' value='Log In' />
          </form>
        </div>
      </div>
    );
  }
  handleSubmit = e => {
    e.preventDefault();
  };
}

export default LogInBox;
