import React from 'react'
import "./PostOnWall.css"

export default function PostOnWall() {
  return (
      <div>
          <form method='POST' action='/'>
              <input type="text" name="messageBox" id="PostMessageBox" />
              <input type="button" value="Post message" />
          </form>
    </div>
  )
}
