import { useState, useEffect } from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Splash from "./components/Splash";
import FullPost from "./components/FullPost";
import EditPost from "./components/EditPost";
import pic1 from "./img/pic1.png";
import pic2 from "./img/pic2.png";

function App() {
  const [posts, setPosts] = useState([
    {
      title: "Lunch",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem a sagittis platea et. Nam lectus cras magnis ut vivamus. Urna eu eget eget interdum id. Massa, blandit dictum amet dui magna purus gravida vel id. Feugiat arcu nec justo sagittis tristique turpis aenean rhoncus, facilisis. Id ultrices facilisis facilisi scelerisque neque, cras id tortor. Egestas ipsum eget eget aliquam amet pellentesque proin elementum egestas. Semper mattis et etiam velit. Curabitur cursus lectus amet, quisque aenean vel posuere nunc. Viverra magna vel condimentum diam quis nunc vel. Pharetra scelerisque aliquam elementum pellentesque amet, fringilla sapien tristique nullam. Vitae quam felis nibh mauris ultrices nulla aenean posuere vitae. Felis elit eleifend pharetra, malesuada turpis amet imperdiet amet. Consectetur turpis aliquet amet, lectus leo volutpat tempus cursus ullamcorper.",
      id: 1,
      img: pic2,
    },
    {
      title: "Mornings",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem a sagittis platea et. Nam lectus cras magnis ut vivamus. Urna eu eget eget interdum id. Massa, blandit dictum amet dui magna purus gravida vel id. Feugiat arcu nec justo sagittis tristique turpis aenean rhoncus, facilisis. Id ultrices facilisis facilisi scelerisque neque, cras id tortor. Egestas ipsum eget eget aliquam amet pellentesque proin elementum egestas. Semper mattis et etiam velit. Curabitur cursus lectus amet, quisque aenean vel posuere nunc. Viverra magna vel condimentum diam quis nunc vel. Pharetra scelerisque aliquam elementum pellentesque amet, fringilla sapien tristique nullam. Vitae quam felis nibh mauris ultrices nulla aenean posuere vitae. Felis elit eleifend pharetra, malesuada turpis amet imperdiet amet. Consectetur turpis aliquet amet, lectus leo volutpat tempus cursus ullamcorper.",
      id: 0,
      img: pic1,
    },
  ]);
  const [steps, setSteps] = useState([
    {
      title: "FOR YOUR INFO",
      description: "Step by step on How to do things",
      txt: "Scroll and know",
      page: "1/3",
      id: 0,
    },
    {
      title: "FOR YOUR INFO",
      description: "Step by step on How to do things",
      txt: "Scroll and know",
      page: "2/3",
      id: 1,
    },
    {
      title: "FOR YOUR INFO",
      description: "Step by step on How to do things",
      txt: "Scroll and know",
      page: "3/3",
      id: 2,
    },
  ]);

  var ids = posts.length;

  const [visible, setVisible] = useState(true);
  const [currentPost, setCurrentPost] = useState();
  let time = 3000;
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, [time]);

  function handleClick(post) {
    const currentPost = post;
    setCurrentPost(currentPost);
  }

  const [modal, setModal] = useState(false);
  function handleAddPost() {
    setModal(true);
  }

  function handleCloseModal() {
    setModal(false);
  }

  const [deletebox, setDeletebox] = useState(false);
  function handleDeleteBoxOpen() {
    setDeletebox(true);
  }

  function handleDeleteBoxClose() {
    setDeletebox(false);
  }

  function handleDeletePost(currentPost) {
    const deletePosts = posts.filter((c) => c.id !== currentPost.id);
    setDeletebox(false);
    setPosts(deletePosts);
  }

  function handleNewPost() {
    ids += 1;
    let newPost = {
      title: document.getElementById("addtitle").value,
      description: document.getElementById("adddescription").value,
      id: ids,
      img: pic1,
    };
    let newPosts = posts.concat(newPost);
    setModal(false);
    setPosts(newPosts);
  }

  function handleEditPost() {
    let newEditedPosts = posts;
    let index = posts.indexOf(currentPost);
    newEditedPosts[index] = {
      title: document.getElementById("editedtitle").value,
      description: document.getElementById("editeddescription").value,
      id: currentPost.id,
      img: currentPost.img,
    };
    setPosts(newEditedPosts);
  }

  return (
    <>
      {visible ? (
        <Splash />
      ) : (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  handleClick={handleClick}
                  posts={posts}
                  steps={steps}
                  modal={modal}
                  handleAddPost={handleAddPost}
                  handleCloseModal={handleCloseModal}
                  handleNewPost={handleNewPost}
                />
              }
            ></Route>
            <Route
              path="/posts"
              element={
                <FullPost
                  currentPost={currentPost}
                  handleDeleteBoxOpen={handleDeleteBoxOpen}
                  handleDeleteBoxClose={handleDeleteBoxClose}
                  deletebox={deletebox}
                  handleDeletePost={handleDeletePost}
                />
              }
            ></Route>
            <Route
              path="/postedit"
              element={
                <EditPost
                  currentPost={currentPost}
                  handleEditPost={handleEditPost}
                />
              }
            ></Route>
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
