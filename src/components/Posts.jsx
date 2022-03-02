import React from "react";
import { Link } from "react-router-dom";
import "./Posts.css";

function Posts(props) {
  const { posts, handleClick, handleAddPost } = props;
  return (
    <React.Fragment>
      <div className="reverse">
        {posts.map((post) => (
          <div className="post_container_main" key={post.id}>
            <img src={post.img} alt="img" />
            <div className="data_box">
              <div className="heading_box">
                <p className="title_text">{post.title.slice(0,15)}</p>
                <p className="edit_text">edit</p>
              </div>
              <p className="description_text">
                {post.description.slice(0, 85)}
              </p>
              <Link to="/posts">
                <p className="cont_text" onClick={() => handleClick(post)}>
                  continue reading
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="add_post_button">
        <button onClick={handleAddPost}>Add a new post</button>
      </div>
    </React.Fragment>
  );
}

export default Posts;
