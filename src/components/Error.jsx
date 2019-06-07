import React from 'react';

const Error = props => {
  const { err } = props;
  if (!err) return <h2>404 - Page not found</h2>;
  return <h2>{`${err.status} - ${err.msg}`}</h2>;
};

export default Error;
