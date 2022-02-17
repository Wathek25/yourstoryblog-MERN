import "./Post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  console.log(post);
  return (
    <div className="post">
      {post.photo && (
        <Link to={`/post/${post._id}`} className="link">
          <img className="postImg" src={PF + post.photo} alt="postIMG" />
        </Link>
      )}
      <div className="postInfo">
        {/* <div className="postCats">
          <span className="postCat">{post.categories}</span>
        </div> */}
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <br />
        <Link to={`/?cat=${post.categories}`} className="link">
          <span className="postCategory">{post.categories}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p
        className="postDesc"
        dangerouslySetInnerHTML={{ __html: post.desc }}
      ></p>
    </div>
  );
}
