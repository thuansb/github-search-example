import React, { PropTypes } from 'react';

class SearchForm extends React.PureComponent {
  render() {
    return (
      <form onSubmit={(e) => { this.props.handleSearch(this.searchTerm.value); e.preventDefault(); }}>
        <p className="control has-addons">
          <input ref={(c) => { this.searchTerm = c; }} className="input" type="text" placeholder="Find a user" />
          <button className="button" type="submit">
            Search
          </button>
        </p>
      </form>
    );
  }
}

SearchForm.propTypes = {
  handleSearch: PropTypes.func,
};

export default SearchForm;
