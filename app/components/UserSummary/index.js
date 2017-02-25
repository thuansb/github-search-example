import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function UserSummary({ user }) {
  return (

    <div className="box">
      <article className="media">
        <div className="media-left">
          <Link to={`/u/${user.login}`}>
            <figure className="image is-64x64">
              <img src={user.avatar_url || user.gravatar_id} alt="user-avatar" />
            </figure>
          </Link>
        </div>
        <div className="media-content">
          <div className="content">
            <Link to={`/u/${user.login}`}><b>@{user.login}</b></Link>
            <br />
            <p>
              <strong>ID:</strong> {user.id}
              <br />
              <strong>Score:</strong> {user.score}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

UserSummary.propTypes = {
  user: PropTypes.object,
};

export default UserSummary;
