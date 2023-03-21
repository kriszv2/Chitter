import React from 'react'

export default function Register() {
  return (
    <div>
          <form>
            <label>Username:
              <input type="text"/>
          </label>
              
              <label>Password:
                <input type="text" />
              </label>
              <input type="submit" value="Register" />
          </form>
    </div>
  )
}
