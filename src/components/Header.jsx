import React, { Component } from 'react';

const Header = props => {
  return (
    <div className='header'>
      <div id='headerMain'>
        <h2>logo here</h2>
        <h2>current topic</h2>
      </div>
      <h1>
        <span style={{ color: 'red' }}>N</span>C NEWS
      </h1>
      <div>
        {props.loggedInUser ? (
          <div class='userHeaderBox'>
            <img src={props.loggedInUser.avatar_url} alt='user avatar' />
            <h2
              onClick={e => props.updateLoggedInUser(null)}
              className='logInOutButton'
            >
              log out
            </h2>
          </div>
        ) : (
          <h2
            className='logInOutButton'
            id='loginButton'
            onClick={() => props.toggleLoginPopup(true)}
          >
            log In
          </h2>
        )}
      </div>
    </div>
  );
};

export default Header;
