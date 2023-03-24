import React from 'react'
import "./Home.css"
import PostOnWall from './PostOnWall/PostOnWall'
import Cookies from "universal-cookie";
import { Link } from 'react-router-dom';


export default function Home(props) {

  const cookies = new Cookies();
  const token = cookies.get("TOKEN")

  //reversing the order of the array then mapping it
  const posts = props.posts.slice(0).reverse().map((post) => {

    const { _id, message,createdAt,username } = post;
    let formatTime = new Date(createdAt);

    return (
      <div key={_id}>

      
      <article  className='headlines-article'>
        <h6>{username}</h6>
        <div className='message-div'>
          <p className='message-p'>{message}</p>
        </div>
        
        <div className='time-div'>
          <time>{formatTime.toLocaleString()}</time>
        </div>
        
        </article>
        <div className='hr-div'>
          <hr />
        </div>
        
        </div>
    )
  })

  const logout = () => {
    cookies.remove("TOKEN", { path: "/" });
    window.location.href = "/";
  }

  if (token) {
    return (
      <>

        <main className='home-main'>
          
          <button className='logout-btn' onClick={logout}>Logout</button>
          <div className='content'>
            <h1>Chitter</h1>
            <h1>Chitter</h1>
          </div>
          
        <div className='peeps-container'>
            
            <PostOnWall posts={posts} />
            {posts}
              </div> 
        </main>
        
    </>
  )
  }
  
}
