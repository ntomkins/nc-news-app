import React, { Component } from 'react';

const ArticleContent = props => {
  const { title, author, topic, body, votes, created_at } = props.article;
  return (
    <>
      <div className='articleContents'>
        <h4>
          {author} / {created_at}
        </h4>
        <h1>{title}</h1>
        <h3>↑ {votes} ↓</h3>
        <p>{body}</p>
      </div>
    </>
  );
};

export default ArticleContent;
