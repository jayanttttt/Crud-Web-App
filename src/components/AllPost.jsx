import React, { Component } from "react";
import "./AllPost.css";
import Posts from "./Posts";
import pic1 from "../img/pic1.png";
import pic2 from "../img/pic2.png";
import pic3 from "../img/pic3.png";

export class AllPost extends Component {
  render() {
    const { handleClick, posts, steps, handleAddPost } = this.props;
    console.log();
    return (
      <React.Fragment>
        <div className="post_box">
          <div className="post_box_nav">
            <p className="post_text_left">All post</p>
            <p className="post_text_right">view all</p>
          </div>
          <Posts posts={posts} handleClick={handleClick} handleAddPost={handleAddPost} />
        </div>
        <div className="info">
          <div className="scrollable">
            <div className="scroll_box">
              {steps.map((step) => (
                <div className="head_box" key={step.id}>
                  <p className="info_text">{step.title}</p>
                  <p className="step_text">{step.description}</p>
                  <div className="foot_box">
                    <p className="scroll_text">{step.txt}</p>
                    <p className="page_num">{step.page}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="foot_img">
            <img src={pic3} alt="img" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AllPost;
