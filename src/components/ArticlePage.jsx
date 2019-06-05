import React, { Component } from 'react';
import { fetchArticleById } from './axios';
import ArticleContent from './ArticleContent';
// import Comments from './Comments';

class ArticlePage extends Component {
  state = { article: null };

  componentDidMount() {
    fetchArticleById(this.props.article_id).then(article => {
      console.log(article);
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
            {/* <Comments /> */}
          </>
        )}
      </>
    );
  }
}

export default ArticlePage;
