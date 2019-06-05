import React, { Component } from 'react';
import { fetchArticles } from './axios';
import ArticleList from './ArticleList';

class Articles extends Component {
  state = { articles: [] };

  componentDidMount() {
    const { topic, author } = this.props;
    fetchArticles({ topic, author }).then(articles =>
      this.setState({ articles })
    );
    console.log(this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      const { topic, author } = this.props;

      console.log(this.props);
      fetchArticles({ topic, author }).then(articles =>
        this.setState({ articles })
      );
    }
  }

  render() {
    return <ArticleList articles={this.state.articles} />;
  }
}

export default Articles;
