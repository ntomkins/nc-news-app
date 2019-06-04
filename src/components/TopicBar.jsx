import React, { Component } from 'react';
import axios from 'axios';

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
        <li key='news'>news</li>
        {topics.map(topic => {
          return <li key={topic.slug}>{topic.slug}</li>;
        })}
      </ul>
    );
  }
}

export default TopicBar;
