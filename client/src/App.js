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
  const [user, setUser] = useState({});
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
  console.log(posts);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              user && user.id ? (
                <Home user={user} setUser={setUser} />
              ) : (
                <Login setUser={setUser} />
              )
            }
          />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
