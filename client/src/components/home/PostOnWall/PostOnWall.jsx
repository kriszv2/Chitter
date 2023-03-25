import React, { useState } from 'react';
import "./PostOnWall.css";
import axios from "axios";
import Cookies from 'universal-cookie';

export default function PostOnWall() {
  const [postContent, setPostContent] = useState(``)
  const cookies = new Cookies();
  const usernameCookie = cookies.get("username")
  
  const handleSubmit = event => {
    event.preventDefault();
    axios.post("http://localhost:4000", {
      username: usernameCookie,
      message: postContent
    })
      
window.location.reload();
  }
  const changeHandler = (event) => {
    setPostContent(event.target.value)
  }
  
  return (
    <div>
      
      <form className='message-form' onSubmit={handleSubmit}>
        <h2 className='message-text'>Message</h2>
        
        <textarea placeholder='Message...' type="text" className='message-box' name="messageBox" onChange={changeHandler} value={postContent} id="PostMessageBox" />
        <div>
<input className='post-sub-btn' type="submit" value="Post message" />
        </div>
              
      </form>
      <hr/>
    </div>
  )
}
