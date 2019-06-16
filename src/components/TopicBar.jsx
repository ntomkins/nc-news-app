import React, { Component } from 'react';
import { Link } from '@reach/router';
import Error from './Error';
import { fetchTopics } from '../axios';

class TopicBar extends Component {
  state = { topics: [], err: null };

  componentDidMount() {
    fetchTopics()
      .then(topics => {
        this.setState({ topics });
      })
      .catch(({ response }) => {
        const { msg } = response.data;
        const { status } = response;
        const err = { msg, status };
        this.setState({
          err
        });
      });
  }

  render() {
    const { author, topic } = this.props;
    const { topics } = this.state;
    if (this.state.err) return <Error err={this.state.err} />;
    let title = 'NEWS';
    if (topic) {
      title = topic.toUpperCase();
    }
    if (author) {
      title = author.toUpperCase() + "'S ARTICLES";
    }
    return (
      <>
        <h2 className='topicBarTitle'>{title}</h2>
        <ul className='topicBar'>
          <Link to={`/`} key={'news'}>
            <li key='news'>news</li>
          </Link>
          {topics.map(topic => {
            return (
              <Link to={`/topics/${topic.slug}`} key={topic.slug}>
                <li key={topic.slug}>{topic.slug}</li>
              </Link>
            );
          })}
        </ul>
      </>
    );
  }
}

export default TopicBar;
