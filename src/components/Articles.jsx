import React, { Component } from 'react';
import { fetchArticles } from './axios';
import ArticleList from './ArticleList';
import Error from './Error';

class Articles extends Component {
  state = { articles: [], sortby: null, err: null };

  componentDidMount() {
    const { topic, author } = this.props;
    const { sort_by } = this.state;
    fetchArticles({ topic, author })
      .then(articles => this.setState({ articles, sort_by }))
      .catch(({ response }) => {
        const { msg } = response.data;
        const { status } = response;
        const err = { msg, status };
        this.setState({
          err
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.author !== this.props.author ||
      prevProps.topic !== this.props.topic ||
      prevState.sort_by !== this.state.sort_by
    ) {
      const { topic, author } = this.props;
      const { sort_by } = this.state;
      fetchArticles({ topic, author, sort_by })
        .then(articles => {
          this.setState({ articles, sort_by });
        })
        .catch(({ response }) => {
          const { msg } = response.data;
          const { status } = response;
          const err = { msg, status };
          this.setState({
            err
          });
        });
    }
  }

  render() {
    if (this.state.err) return <Error err={this.state.err} />;
    return (
      <>
        <div className='sortBar'>
          <h3 onClick={() => this.changeSort('created_at')}>newest</h3>
          <h3 onClick={() => this.changeSort('votes')}>highest rated</h3>
          <h3 onClick={() => this.changeSort('comment_count')}>
            most comments
          </h3>
        </div>
        <ArticleList articles={this.state.articles} />
      </>
    );
  }

  changeSort = sort_by => {
    this.setState({ sort_by });
  };
}

export default Articles;
