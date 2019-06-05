import React from 'react';
import TopicBar from './TopicBar';

const Header = props => {
  return (
    <>
      <div className='header'>
        <div className='headerMain'>
          <h2>logo here</h2>
          <h2>current topic</h2>
        </div>
        <h1>
          <span style={{ color: 'red' }}>N</span>C NEWS
        </h1>
        <div>
          {props.loggedInUser ? (
            <div className='userHeaderBox'>
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
      <TopicBar />
    </>
  );
};

export default Header;
