import React from 'react';
import TopicBar from './TopicBar';
import { Router, Link } from '@reach/router';

const Header = props => {
  return (
    <>
      <div className='header'>
        <div className='headerMain'>
          <img
            src='https://cdn-images-1.medium.com/max/1200/1*LdnSztHVYhhd8K8EqlgCJQ.png'
            alt='northcoders logo'
            height='100'
            width='100'
          />
        </div>
        <h1>
          <span style={{ color: 'red' }}>N</span>C NEWS
        </h1>
        <div>
          {props.loggedInUser ? (
            <div className='userHeaderBox'>
              <Link to={`/articles/users/${props.loggedInUser.username}`}>
                <img src={props.loggedInUser.avatar_url} alt='user avatar' />
              </Link>
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
      <Router primary={false}>
        <TopicBar path='/articles/topics/:topic' />
        <TopicBar path='/articles/users/:author' />
        <TopicBar default />
      </Router>
    </>
  );
};

export default Header;
