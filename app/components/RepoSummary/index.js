import React, { PropTypes } from 'react';

function RepoSumary({ repo }) {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          {repo.fork ? <i className="fa fa-code-fork"></i> : <i className="fa fa-book"></i>}
        </div>
        <div className="media-content">
          <div className="content">
            <a href={repo.html_url}><strong>{repo.name}</strong></a>
            <br />
            {repo.description}
            <br />
            <strong>Language:</strong> {repo.language}
            <br />
            <strong>Size:</strong> {repo.size}
            <br />
          </div>
        </div>
      </article>
    </div>
  );
}

RepoSumary.propTypes = {
  repo: PropTypes.object,
};

export default RepoSumary;
