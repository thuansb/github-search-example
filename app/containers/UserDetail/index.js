import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectUserDetail from './selectors';
import { fetchUserDetail } from './actions';

export class UserDetail extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    const { dispatch, params: { uid } } = this.props;
    if (uid) dispatch(fetchUserDetail(uid));
  }

  render() {
    const { info } = this.props.UserDetail;

    console.log(info);

    return (
      <div>
        <p>{info.login}</p>
        <p>{info.id}</p>
        <p>{info.avatar_url}</p>
        <p>{info.html_url}</p>
        <p>{info.repos_url}</p>
        <p>{info.name}</p>
        <p>{info.blog}</p>
        <p>{info.email}</p>
        <p>{info.hireable}</p>
        <p>{info.bio}</p>
        <p>{info.public_repos}</p>
        <p>{info.public_gists}</p>
        <p>{info.followers}</p>
        <p>{info.following}</p>
      </div>
    );
  }
}

UserDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.object,
  UserDetail: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  UserDetail: makeSelectUserDetail(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);