import React from 'react'
import "./NewsPage.css"
import PostOnWall from './PostOnWall/PostOnWall'

export default function NewsPage(props) {

  console.log(props.posts)
  const posts = props.posts.map((post) => {
    return post.message;
  })
  return (
    <>
        <main>
        <div className='div-container'>
          
          <p>
            {posts}
          </p>
          <PostOnWall/>
              </div> 
        </main>    
    </>
  )
}
