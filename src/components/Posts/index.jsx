import React from 'react';
import prop from 'prop-types';

import { PostCardComponent } from '../PostCard';

import './styles.css';

export const PostsComponent = ({ posts = [] }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCardComponent
          key={post.id}
          title={post.title}
          body={post.body}
          cover={post.cover}
        />
      ))}
    </div>
  );
};

PostsComponent.defaultProps = {
  posts: [],
};

PostsComponent.propTypes = {
  posts: prop.arrayOf(
    prop.shape({
      title: prop.string.isRequired,
      body: prop.string.isRequired,
      cover: prop.string.isRequired,
    }),
  ),
};
