import './App.css';
import React, { Component } from 'react';
import { Router } from '@reach/router';
import Header from './components/Header';
import LogInBox from './components/LogInBox';
import Articles from './components/Articles';
import ArticlePage from './components/ArticlePage';
import Error from './components/Error';
import { fetchUser, checkServer } from './axios';

class App extends Component {
  state = { loggedInUser: null, loginPopup: false, isLoading: true };

  componentDidMount() {
    const username = localStorage.getItem('username');
    if (username) {
      fetchUser(username).then(user => {
        this.setState({ loggedInUser: user });
      });
    }
    if (this.state.isLoading) {
      checkServer().then(status => {
        if (status === 200) this.setState({ isLoading: false });
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.isLoading ? (
          <div className='App'>
            <Header
              loggedInUser={this.state.loggedInUser}
              updateLoggedInUser={this.updateLoggedInUser}
              toggleLoginPopup={this.toggleLoginPopup}
            />
            <div>
              {this.state.loginPopup && (
                <LogInBox
                  toggleLoginPopup={this.toggleLoginPopup}
                  updateLoggedInUser={this.updateLoggedInUser}
                />
              )}
            </div>
            <Router primary={false}>
              <Articles path='/' />
              <Articles path='/topics/:topic' />
              <Articles path='/users/:author' />
              <ArticlePage
                loggedInUser={this.state.loggedInUser}
                path='/article/:article_id'
              />
              <Error default />
            </Router>
          </div>
        ) : (
          <div className='loadingAnimation' />
        )}
      </div>
    );
  }
  toggleLoginPopup = bool => {
    this.setState({ loginPopup: bool });
  };

  updateLoggedInUser = user => {
    localStorage.setItem('username', user && user.username);
    this.setState({ loggedInUser: user, loginPopup: false });
  };
}

export default App;
