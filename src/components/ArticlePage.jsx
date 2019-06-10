import React, { Component } from 'react';
import { fetchArticleById } from '../axios';
import ArticleContent from './ArticleContent';
import ArticleComments from './ArticleComments';
import Error from './Error';

class ArticlePage extends Component {
  state = { article: null, err: null };

  componentDidMount() {
    fetchArticleById(this.props.article_id)
      .then(article => {
        return this.setState({ article });
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

  render() {
    if (this.state.err) return <Error err={this.state.err} />;
    const { article } = this.state;
    return (
      <>
        {article && (
          <>
            <ArticleContent article={article} />
            <h2 id='ArticleCommentsHeader'>Comments</h2>
            <ArticleComments
              loggedInUser={this.props.loggedInUser}
              article_id={article.article_id}
            />
          </>
        )}
      </>
    );
  }
}

export default ArticlePage;
