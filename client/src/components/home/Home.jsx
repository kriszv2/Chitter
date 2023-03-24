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

    const { _id, message,createdAt } = post;
    let formatTime = new Date(createdAt);

    return (

      <article key={_id} className='headlines-article'>
        <p>{message}</p>
        <time>{ formatTime.toLocaleString() }</time>
      </article>
      
    )
  })

  const logout = () => {
    cookies.remove("TOKEN", { path: "/" });
    window.location.href = "/";
  }
  
  if (token) {
    return (
      <>

        <main>
          <button className='logout-btn' onClick={logout}>Logout</button>
        <div className='peeps-container'>
            {posts}
          <PostOnWall posts={ posts} />
              </div> 
        </main>
        
    </>
  )
  }
  
}
