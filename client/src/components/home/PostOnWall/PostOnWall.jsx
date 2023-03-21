import React, {  useState } from 'react'
import "./PostOnWall.css"
import axios from "axios"

export default function PostOnWall() {
  const [postContent, setPostContent] = useState(``)

  
  const handleSubmit = event => {
    event.preventDefault();
    axios.post("http://localhost:4000", { message : postContent })
      
window.location.reload();
  }
  const changeHandler = (event) => {
    setPostContent(event.target.value)
  }
  
  return (
    <div>
      
          <form onSubmit={handleSubmit}>
        <input type="text" name="messageBox" onChange={ changeHandler } value={postContent} id="PostMessageBox" />
              <input type="submit" value="Post message" />
          </form>
    </div>
  )
}
