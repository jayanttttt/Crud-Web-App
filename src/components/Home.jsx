import React from "react";
import AllPost from "./AllPost";
import TopBar from "./TopBar";
import "./Home.css";
import AddPost from "./AddPost";

function Home(props) {
  const {
    handleClick,
    posts,
    steps,
    handleAddPost,
    modal,
    handleCloseModal,
    handleNewPost,
  } = props;
  return (
    <React.Fragment>
      {modal ? (
        <AddPost
          handleCloseModal={handleCloseModal}
          handleNewPost={handleNewPost}
        />
      ) : (
        ""
      )}
      <TopBar />
      <div className="show">
        <AllPost
          handleClick={handleClick}
          posts={posts}
          steps={steps}
          handleAddPost={handleAddPost}
        />
      </div>
    </React.Fragment>
  );
}

export default Home;
