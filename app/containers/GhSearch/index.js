import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import UserSummary from 'components/UserSummary';
import { searchUser } from './actions';
import makeSelectGhSearch from './selectors';

export class GhSearch extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { searchResult: { items: users = [] } } = this.props.GhSearch;
    return (
      <div>
        <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <p className="subtitle is-5">GitHub User</p>
            </div>
            <div className="level-item">
              <p className="control has-addons">
                <input ref={(c) => { this.searchTerm = c; }} className="input" type="text" placeholder="Find a user" />
                <button className="button" onClick={() => this.props.handleSearch(this.searchTerm.value)}>
                  Search
                </button>
              </p>
            </div>
          </div>
        </nav>
        <div>
          <ul>
            {
              users.length > 0 ? users.map(
                (u) => (
                  <li key={u.id}>
                    <UserSummary user={u} />
                  </li>
                )
              ) : (
                <li>No user found!</li>
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
  GhSearch: PropTypes.object,
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
