import React, {  useState } from 'react'
import "./PostOnWall.css"
import axios from "axios"

export default function PostOnWall(props) {
  const [postContent, setPostContent] = useState(``)
  const [postsOnWall, setPostsOnWall] = useState([])

  
  const handleSubmit = event => {
    event.preventDefault();
    axios.post("http://localhost:4000", { message : postContent })
      .then((response) => {
        console.log("Success:", response.data);
        
        // handle successful response from server
        
      })
      .catch((error) => {
        console.error("Error:", error);
        // handle error
      });

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
