import React, { Component } from 'react';
import { Link } from '@reach/router';

const ArticleCard = props => {
  const { article } = props;
  return (
    <li className='articleCard'>
      <div className='votes'>
        <h4>↑</h4>
        <h3>{article.votes}</h3>
        <h4>↓</h4>
      </div>
      <Link to={`/article/${article.article_id}`}>
        <div className='ArticleCardContent'>
          <h2>{article.title}</h2>
          <h4>{article.author}</h4>
          <p>
            {article.topic} date: {article.created_at} comments:{' '}
            {article.comment_count}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default ArticleCard;
