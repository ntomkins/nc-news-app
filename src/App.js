import './App.css';
import React, { Component } from 'react';
import { Router } from '@reach/router';
import Header from './components/Header';
import LogInBox from './components/LogInBox';

class App extends Component {
  state = { loggedInUser: null, loginPopup: false };

  render() {
    return (
      <div className='App'>
        <Header
          loggedInUser={this.state.loggedInUser}
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
        {/* <Router>
          <div />
        </Router> */}
      </div>
    );
  }
  toggleLoginPopup = bool => {
    this.setState({ loginPopup: bool });
  };

  updateLoggedInUser = username => {
    this.setState({ loggedInUser: username });
  };
}

export default App;
