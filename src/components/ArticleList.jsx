import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleList = props => {
  const { articles } = props;
  return (
    <ul>
      {articles.map(article => {
        return (
          <ArticleCard key={`article${article.article_id}`} article={article} />
        );
      })}
    </ul>
  );
};

export default ArticleList;
