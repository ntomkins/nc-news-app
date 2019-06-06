import axios from 'axios';
const baseUrl = 'https://ntomkins-nc-news-app.herokuapp.com';

export const fetchArticles = params => {
  const url = `${baseUrl}/api/articles/`;
  return axios.get(url, { params }).then(({ data: { articles } }) => {
    return articles;
  });
};

export const fetchArticleById = article_id => {
  const url = `${baseUrl}/api/articles/${article_id}`;
  return axios.get(url).then(({ data: { article } }) => {
    return article;
  });
};

export const fetchCommentsbyArticleId = article_id => {
  const url = `${baseUrl}/api/articles/${article_id}/comments`;
  return axios.get(url).then(({ data: { comments } }) => {
    return comments;
  });
};

export const postCommentByArticleId = article_id => {
  const url = `${baseUrl}/api/articles/${article_id}/comments`;
  return axios
    .post(url, { username: 'jessjelly', body: 'this is a test' })
    .then(({ data: { comments } }) => {
      return comments;
    });
};
