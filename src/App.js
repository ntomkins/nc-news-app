import './App.css';
import React, { Component } from 'react';
import { Router } from '@reach/router';
import Header from './components/Header';
import LogInBox from './components/LogInBox';
import Articles from './components/Articles';
import ArticlePage from './components/ArticlePage';
import Error from './components/Error';

class App extends Component {
  state = { loggedInUser: null, loginPopup: false };

  render() {
    return (
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
          <Articles path='/articles/' />
          <Articles path='/articles/topics/:topic' />
          <Articles path='/articles/users/:username' />
          <ArticlePage
            loggedInUser={this.state.loggedInUser}
            path='/article/:article_id'
          />
          <Error default />
        </Router>
      </div>
    );
  }
  toggleLoginPopup = bool => {
    this.setState({ loginPopup: bool });
  };

  updateLoggedInUser = user => {
    this.setState({ loggedInUser: user, loginPopup: false });
  };
}

export default App;
