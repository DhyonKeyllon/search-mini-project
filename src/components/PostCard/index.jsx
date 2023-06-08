import prop from 'prop-types';

import './styles.css';

export const PostCardComponent = ({ title, cover, body }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
};

PostCardComponent.propTypes = {
  title: prop.string.isRequired,
  body: prop.string.isRequired,
  cover: prop.string.isRequired,
};
