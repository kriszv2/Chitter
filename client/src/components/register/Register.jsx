import React from 'react'

export default function Register() {
  return (
    <div>
      <form>
        <label>First name:
              <input type="text"/>
        </label>
        <label>Last name:
              <input type="text"/>
        </label>
        <label>email:
              <input type="email"/>
          </label>
            <label>Username:
              <input type="text"/>
          </label>
              
              <label>Password:
                <input type="password" />
              </label>
              <input type="submit" value="Register" />
          </form>
    </div>
  )
}
