import React, { Component } from 'react';
import { fetchArticleById } from './axios';
import ArticleContent from './ArticleContent';
import ArticleComments from './ArticleComments';

class ArticlePage extends Component {
  state = { article: null };

  componentDidMount() {
    fetchArticleById(this.props.article_id).then(article => {
      return this.setState({ article });
    });
  }

  render() {
    const { article } = this.state;
    return (
      <>
        {article && (
          <>
            <ArticleContent article={article} />
            <h2 id='ArticleCommentsHeader'>Comments</h2>
            <ArticleComments article_id={article.article_id} />
          </>
        )}
      </>
    );
  }
}

export default ArticlePage;
