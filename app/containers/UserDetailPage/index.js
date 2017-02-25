import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import UserDetail from 'components/UserDetail';
import LoadingIndicator from 'components/LoadingIndicator';
import RepoSummary from 'components/RepoSummary';
import { goBack } from 'react-router-redux';
import makeSelectUserDetail from './selectors';
import { fetchUserDetail, fetchUserRepos } from './actions';

export class UserDetailPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    const { dispatch, params: { uid } } = this.props;

    if (uid) {
      dispatch(fetchUserDetail(uid));
      dispatch(fetchUserRepos(uid));
    }
  }

  render() {
    const { info, repos, detailLoading, repoLoading } = this.props.UserDetail;
    return (
      <div>
        <h3 className="title is-3">User detail</h3>
        {repoLoading ? <LoadingIndicator /> : <UserDetail user={info} handleBackButton={this.props.backToPreviousPage} />}
        <h3 className="title is-3">Repo list</h3>
        {
          detailLoading ? <LoadingIndicator /> : (
            <ul>
              {
                repos.map(
                  (repo) => (
                    <li key={repo.id}>
                      <RepoSummary repo={repo} />
                    </li>
                  )
                )
              }
            </ul>
          )
        }
      </div>
    );
  }
}

UserDetailPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.object,
  UserDetail: PropTypes.object,
  backToPreviousPage: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  UserDetail: makeSelectUserDetail(),
});

function mapDispatchToProps(dispatch) {
  return {
    backToPreviousPage: () => dispatch(goBack()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailPage);
