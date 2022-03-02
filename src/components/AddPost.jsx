import React from "react";
import "./AddPost.css";

function AddPost(props) {
  const { handleCloseModal, handleNewPost } = props;
  const height = document.getElementById("root").scrollHeight;
  return (
    <>
      <div style={{ height: height }} className="add_post_main">
        <div className="add_post_box">
          <div className="add_post_image_box">
            <div className="add_post_image"></div>
            <p className="edit_update_image_text">Add an image</p>
          </div>
          <p className="edit_text_main">Title</p>
          <textarea
            placeholder="Type here"
            className="addpost_textarea_title"
            id="addtitle"
          />
          <p className="edit_text_main">Description</p>
          <textarea
            placeholder="Type here"
            className="addpost_textarea_desc"
            id="adddescription"
          />
          <div className="add_new_post_button">
            <button onClick={handleNewPost}>Add a new post</button>
          </div>
          <div className="close_modal_box">
            <div className="close_modal" onClick={handleCloseModal}>
              X
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPost;
