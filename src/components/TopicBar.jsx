import React, { Component } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

class TopicBar extends Component {
  state = { topics: [] };

  componentDidMount() {
    const baseUrl = 'https://ntomkins-nc-news-app.herokuapp.com';
    const url = baseUrl + '/api/topics/';
    return axios.get(url).then(({ data: { topics } }) => {
      this.setState({ topics });
    });
  }

  render() {
    const { topics } = this.state;
    return (
      <ul className='topicBar'>
        <Link to={`/articles`} key={'news'}>
          <li key='news'>news</li>
        </Link>
        {topics.map(topic => {
          return (
            <Link to={`/articles/topics/${topic.slug}`} key={topic.slug}>
              <li key={topic.slug}>{topic.slug}</li>
            </Link>
          );
        })}
      </ul>
    );
  }
}

export default TopicBar;
