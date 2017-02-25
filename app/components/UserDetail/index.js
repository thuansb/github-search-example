import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function UserDetail({ user, handleBackButton }) {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <Link to={`/u/${user.login}`}>
            <figure className="image is-128x128">
              <img src={user.avatar_url || user.gravatar_id} alt="user-avatar" />
            </figure>
          </Link>
        </div>
        <div className="media-content">
          <div className="content">
            <strong>{user.name}</strong>
            <br />
            <p>
              @{user.login}
              <br />
              <strong>ID:</strong> {user.id}
              <br />
              <strong>Blog:</strong> {user.blog}
              <br />
              <strong>Email:</strong> {user.email}
              <br />
              <strong>Location:</strong> {user.location}
              <br />
              <strong>Hireable:</strong> {user.hireable ? 'yes' : 'no'}
              <br />
              <strong>Bio:</strong> {user.bio}
              <br />
              <strong>Public repos:</strong> {user.public_repos}
              <br />
              <strong>Public gists:</strong> {user.public_gists}
              <br />
              <strong>Followers:</strong> {user.followers} people
              <br />
              <strong>Following:</strong> {user.following} people
            </p>
          </div>
        </div>
        <button onClick={handleBackButton} className="button is-primary"><i className="fa fa-arrow-left"> Back</i></button>
      </article>
    </div>
  );
}

UserDetail.propTypes = {
  user: PropTypes.object,
  handleBackButton: PropTypes.func.isRequired,
};

export default UserDetail;
