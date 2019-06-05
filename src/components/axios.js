import axios from 'axios';
const baseUrl = 'https://ntomkins-nc-news-app.herokuapp.com';

export const fetchArticles = params => {
  const url = `${baseUrl}/api/articles/`;
  return axios.get(url, { params }).then(({ data: { articles } }) => {
    return articles;
  });
};
