import { PostCardComponent } from "../PostCard";

import "./styles.css";

export const PostsComponent = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCardComponent
          key={post.id}
          title={post.title}
          body={post.body}
          id={post.id}
          cover={post.cover}
        />
      ))}
    </div>
  );
};
