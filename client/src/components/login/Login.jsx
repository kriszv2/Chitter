import React, { useState } from 'react'
import axios from "axios"
import Cookies from "universal-cookie";


export default function Login() {

  const cookies = new Cookies();
  const [user, setUser] = useState({
    username: ``,
    password:``
  })

  const changeHandler = (e) => {
    const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
  }
  const login = (e) => {

    e.preventDefault();

    axios.post("http://localhost:4000/login", user)
      
      .then(res => {
        alert("Logged in")
        cookies.set("TOKEN", res.data.token, {
          path: "/",
          
        });
        console.log(res.data.token)
        window.location.href = "/home";
      }).catch((e) => {
        e = new Error();
      })
      }
  return (
    <div>
      
          <form onSubmit={login}>
            <label>Username: 
            <input type="text" name="username" value={user.username} onChange={changeHandler}/>
          </label>
              <label>Password: 
            <input type="password" name="password" value={user.password} onChange={changeHandler}/>
          </label>
              <input type="submit" value="Login" />
          </form>
    </div>
  )
}
