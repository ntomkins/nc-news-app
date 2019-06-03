import React, { Component } from 'react';

const Header = props => {
  return (
    <div class='header'>
      <div id='headerMain'>
        <h2>logo here</h2>
        <h2>current topic here</h2>
      </div>
      <h1>NC NEWS</h1>
      <div id='userHeaderBox'>
        <h2 onClick={() => props.toggleLoginPopup(true)}>login button</h2>
      </div>
    </div>
  );
};

export default Header;
