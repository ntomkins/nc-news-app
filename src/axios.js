import axios from 'axios';
const baseUrl = 'https://ntomkins-nc-news-app.herokuapp.com';

export const checkServer = params => {
  const url = `${baseUrl}/api`;
  return axios.get(url).then(response => {
    return response.status;
  });
};

export const fetchArticles = params => {
  const url = `${baseUrl}/api/articles/`;
  return axios
    .get(url, { params })
    .then(({ data: { articles }, data: { total_count } }) => {
      return { articles, total_count };
    });
};

export const fetchTopics = params => {
  const url = baseUrl + '/api/topics/';
  return axios.get(url).then(({ data: { topics } }) => {
    return topics;
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

export const postCommentByArticleId = ({ article_id, username, body }) => {
  const url = `${baseUrl}/api/articles/${article_id}/comments`;
  return axios.post(url, { username, body }).then(({ data: { comment } }) => {
    return comment;
  });
};

export const deleteCommentByCommentId = comment_id => {
  const url = `${baseUrl}/api/comments/${comment_id}`;
  return axios.delete(url).then(({ status }) => {
    return status;
  });
};

export const patchVote = (voteChangeInput, from, id) => {
  const url = `${baseUrl}/api/${from}/${id}`;
  return axios.patch(url, { inc_votes: voteChangeInput }).then(({ data }) => {
    return data;
  });
};

export const fetchUser = username => {
  const url = `${baseUrl}/api/users/${username}`;
  return axios.get(url).then(({ data: { user } }) => {
    return user;
  });
};
