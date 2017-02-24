import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { searchUser } from './actions';
import makeSelectGhSearch from './selectors';

export class GhSearch extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { searchResult: { items: users = [] } } = this.props.GhSearch;
    return (
      <div>
        <div>
          <input ref={(c) => { this.searchTerm = c; }} type="text" />
          <button onClick={() => this.props.handleSearch(this.searchTerm.value)}>Search</button>
        </div>
        <div>
          <ul>
            {
              users.map(
                (u) => (
                  <li key={u.id}>
                    <a href={u.url}>{u.login}</a>
                  </li>
                )
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

GhSearch.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  GhSearch: makeSelectGhSearch(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleSearch: (searchTerm) => dispatch(searchUser(searchTerm)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GhSearch);
