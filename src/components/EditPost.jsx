import React from "react";
import TopBar from "./TopBar";
import "./EditPost.css";
import { Link } from "react-router-dom";

function EditPost(props) {
  const { currentPost, handleEditPost } = props;
  return (
    <>
      <TopBar />
      <div className="edit_div_main show">
        <p className="edit_top_text">Edit post</p>
        <div className="edit_image_box">
          <img src={currentPost.img} alt="img" />
          <p className="edit_update_image_text">Update image</p>
        </div>
        <p className="edit_text_main">Title</p>
        <textarea
          type="text"
          defaultValue={currentPost.title}
          className="edit_textarea_title"
          id="editedtitle"
        />
        <p className="edit_text_main">Description</p>
        <textarea
          type="text"
          defaultValue={currentPost.description}
          className="edit_textarea_desc"
          id="editeddescription"
        />
        <div className="post_button">
          <Link to="/posts">
            <button className="cancel_button_text">
              <p className="edit_button_text">cancel</p>
            </button>
          </Link>
          <Link to="/">
            <button className="save_button_text" onClick={handleEditPost}>
              <p className="edit_button_text">save changes</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default EditPost;
