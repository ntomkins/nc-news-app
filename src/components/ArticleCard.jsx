import React, { Component } from 'react';

const ArticleList = props => {
  const { article } = props;
  return (
    <li className='articleCard'>
      <div className='votes'>
        <h4>↑</h4>
        <h3>{article.votes}</h3>
        <h4>↓</h4>
      </div>
      <div>
        <h2>{article.title}</h2>
        <h4>{article.author}</h4>
        <p>
          {article.topic} date: {article.created_at} comments:{' '}
          {article.comment_count}
        </p>
      </div>
    </li>
  );
};

export default ArticleList;
