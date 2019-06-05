import React, { Component } from 'react';
import { fetchArticle } from './axios';

class SingleArticle extends Component {
  state = { article: null };

  render() {
    return <h1>single article here!!!!</h1>;
  }
}

export default SingleArticle;
