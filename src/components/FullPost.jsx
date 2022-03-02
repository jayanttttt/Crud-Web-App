import React from "react";
import TopBar from "./TopBar";
import "./FullPost.css";
import { Link } from "react-router-dom";

function FullPost(props) {
  const {
    currentPost,
    handleDeleteBoxOpen,
    deletebox,
    handleDeleteBoxClose,
    handleDeletePost,
  } = props;
  const height = document.getElementById("root").scrollHeight;
  return (
    <>
      {deletebox ? (
        <div style={{ height: height }} className="delete_post_modal_main">
          <div className="delete_post_modal_box">
            <p className="delete_text_main">
              Are you sure you want to delete this post?
            </p>
            <div className="delete_page_button">
              <button className="no_button">
                <p className="post_button_text" onClick={handleDeleteBoxClose}>
                  no
                </p>
              </button>
              <Link to="/">
                <button className="yes_button">
                  <p
                    className="post_button_text"
                    onClick={() => handleDeletePost(currentPost)}
                  >
                    yes
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <TopBar />
      <div className="show">
        <div className="post_main_container">
          <p className="post_title_text">{currentPost.title}</p>
          <pre className="post_desc_text">{currentPost.description}</pre>
          <div className="post_author_box">
            <p className="author_text">by</p>
            <p className="author_name">&nbsp;man from earth&nbsp;</p>
            <p className="author_text">| 23rd december, 2020</p>
          </div>
          <div className="post_button">
            <Link to="/postedit">
              <button className="edit_button">
                <p className="post_button_text">edit</p>
              </button>
            </Link>
            <button className="delete_button">
              <p className="post_button_text" onClick={handleDeleteBoxOpen}>
                delete
              </p>
            </button>
          </div>
          <div className="post_all_post_main_box">
            <p className="post_all_post">All post</p>
            <div className="post_all_post_box">
              <div className="posts_box">
                <p className="posts_title_text">Lunch</p>
                <p className="posts_desc_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
                  sit amet, Lorem ipsum.
                </p>
                <p className="posts_bottom_text">Read on</p>
              </div>
              <div className="posts_box">
                <p className="posts_title_text">Dinner</p>
                <p className="posts_desc_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
                  sit amet, Lorem ipsum.
                </p>
                <p className="posts_bottom_text">Read on</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FullPost;
