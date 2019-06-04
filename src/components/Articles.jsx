import React, { Component } from 'react';
import axios from 'axios';
import ArticleList from './ArticleList';

class Articles extends Component {
  state = { articles: [] };

  componentDidMount() {
    const baseUrl = 'https://ntomkins-nc-news-app.herokuapp.com';
    const url = baseUrl + '/api/articles/';
    return axios.get(url).then(({ data: { articles } }) => {
      this.setState({ articles });
    });
  }

  render() {
    console.log(this.state.articles);
    return <ArticleList articles={this.state.articles} />;
  }
}

export default Articles;
