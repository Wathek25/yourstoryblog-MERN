import Post from "../post/Post";
import "./Posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.length === 0 ? (
        <h1>"Sorry, there is no stories yet for this category"</h1>
      ) : (
        posts.map((p) => <Post post={p} />)
      )}
    </div>
  );
}
