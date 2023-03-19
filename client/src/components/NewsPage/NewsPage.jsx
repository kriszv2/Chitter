import React from 'react'
import "./NewsPage.css"
import PostOnWall from './PostOnWall/PostOnWall'

export default function NewsPage(props) {

  console.log(props.posts)
  const posts = props.posts.map((post) => {

    const { _id, message,createdAt } = post;
    let formatTime = new Date(createdAt);
    return (
      <article key={_id} className='headlines-article'>
        <p>{message}</p>
        <time>{ formatTime.toLocaleString() }</time>
    </article>
    )
  })
  return (
    <>
        <main>
        <div className='div-container'>
            {posts}
          <PostOnWall posts={ posts} />
              </div> 
        </main>    
    </>
  )
}
