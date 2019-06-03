import React, { Component } from 'react';

class LogInBox extends Component {
  state = {};
  render() {
    return (
      <div className='greyBackground'>
        <div className='logInBox'>
          <form>
            <label>
              Log In:
              <input type='text' name='username' placeholder='Username' />
            </label>
            <input type='submit' value='Log In' />
          </form>
        </div>
      </div>
    );
  }
}

export default LogInBox;
