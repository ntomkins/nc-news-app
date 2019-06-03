import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import LogInBox from './components/LogInBox';

class App extends Component {
  state = { loggedInUser: null, LoginPopup: false };

  render() {
    return (
      <div className='App'>
        <Header loggedInUser={this.state.loggedInUser} />
        <LogInBox />
      </div>
    );
  }
  toggleLoginPopup = bool => {
    this.state.LoginPopup = bool;
  };
}

export default App;
