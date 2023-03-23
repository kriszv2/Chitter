import Header from "./components/header/Header";
import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { getPosts } from "./util/messagesAPI";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getPosts();
      const postMap = postData.data.map((n) => ({
        ...n,
      }));
      setPosts(postMap);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home posts={posts} />} />
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
