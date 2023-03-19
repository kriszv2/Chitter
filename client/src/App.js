import Header from "./components/header/Header";
import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsPage from "./components/NewsPage/NewsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { getPosts } from "./util/messagesAPI";

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
  console.log(posts);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<NewsPage posts={posts} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
