import React, { useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import Cookies from "universal-cookie";
import "./Login.css"


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
    <>
      <div className='div-container'>
        <div className='left-div'>
          
          <h2>Not a user yet?</h2>
          <Link to="/register">Register</Link>
        </div>
        <div className='right-div'>
          <h2>Login</h2>
         <form className='login-form' onSubmit={login}>
             
            <input placeholder="Username..." type="text" name="username" value={user.username} onChange={changeHandler}/>
          
            <input placeholder="Password..." type="password" name="password" value={user.password} onChange={changeHandler}/>
          
              <input type="submit" value="Login" />
        </form> 
        </div>
          
        </div>
    </>
  )
}
