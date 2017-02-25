import React from 'react';
import GhSearch from 'containers/GhSearch';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1 className="title is-1">GitHub App</h1>
        <GhSearch />
      </div>
    );
  }
}
