import React, { Component } from 'react';
import { fetchArticles } from '../axios';
import ArticleList from './ArticleList';
import Error from './Error';

class Articles extends Component {
  state = { articles: [], sortby: null, p: 1, err: null, total_count: 0 };

  componentDidMount() {
    const { topic, author } = this.props;
    const { sort_by, p } = this.state;
    fetchArticles({ topic, author, p, sort_by })
      .then(({ articles, total_count }) =>
        this.setState({ articles, total_count })
      )
      .catch(({ response }) => {
        const msg = response && response.data.msg;
        const status = response && response.data.status;
        const err = { msg, status };
        this.setState({
          err
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.author !== this.props.author ||
      prevProps.topic !== this.props.topic
    ) {
      this.setState({ p: 1, sortby: null });
    }
    if (prevState.sort_by !== this.state.sort_by) {
      this.setState({ p: 1 });
    }
    if (
      prevProps.author !== this.props.author ||
      prevProps.topic !== this.props.topic ||
      prevState.p !== this.state.p ||
      prevState.sort_by !== this.state.sort_by
    ) {
      const { topic, author } = this.props;
      const { sort_by, p } = this.state;
      fetchArticles({ topic, author, sort_by, p })
        .then(({ articles, total_count }) =>
          this.setState({ articles, total_count, err: null })
        )
        .catch(({ response }) => {
          const msg = response && response.data.msg;
          const status = response && response.data.status;
          const err = { msg, status };
          this.setState({
            err
          });
        });
    }
  }

  render() {
    const { total_count, err, articles, p } = this.state;
    if (err) return <Error err={err} />;
    const maxPage = Math.ceil(total_count / 10);
    return (
      <>
        <div className='sortBar'>
          <h3 onClick={() => this.changeSort('created_at')}>newest</h3>
          <h3 onClick={() => this.changeSort('votes')}>highest rated</h3>
          <h3 onClick={() => this.changeSort('comment_count')}>
            most comments
          </h3>
        </div>
        <ArticleList articles={articles} />
        <div className='nextPrevArticlePage'>
          {p > 1 && (
            <h3
              onClick={() => this.changePage(-1)}
              className='changePageButton'
            >
              prev
            </h3>
          )}
          <h3 className='changePageDivider'>|</h3>
          {p < maxPage && (
            <h3 onClick={() => this.changePage(1)} className='changePageButton'>
              next
            </h3>
          )}
        </div>
      </>
    );
  }

  changeSort = sort_by => {
    this.setState({ sort_by });
  };

  changePage = pChange => {
    this.setState(prevState => {
      return { p: prevState.p + pChange };
    });
  };
}

export default Articles;
