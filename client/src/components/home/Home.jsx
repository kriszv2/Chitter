import React from 'react'
import "./Home.css"
import PostOnWall from './PostOnWall/PostOnWall'

export default function Home(props) {

  console.log(props.posts)
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
