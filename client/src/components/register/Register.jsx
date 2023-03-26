import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"
import "./Register.css"

export default function Register() {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: ``,
    lastName: ``,
    username: ``,
    email: ``,
    password:``

})

  const handleChange = event => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const register = async (e) => {
        e.preventDefault();
      const { firstName, lastName, username, email, password } = user;
      try {
        if (firstName && lastName && username && email && password) {
          
          const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/register`, user);
          alert(res.data.message);
          setUser({ firstName: ``, lastName: ``, username: ``, email: ``, password: `` });
          
          
          navigate('/');
        }
        
      } catch (e) {
       
      }
        
    }
console.log(user)
    return (
      <>
        <main className='register-page'>
          <div className='register-container'>
            <h3>Create new account</h3>
            <form onSubmit={register}>
              <div>
                <input className='register-form-input' type="text" name="firstName" value={user.firstName} onChange={handleChange} placeholder="First Name..."/>
                <input className='register-form-input' type="text" name="lastName" value={user.lastName} onChange={handleChange} placeholder="Last Name..."/>
              </div>
              <div>
              <input className='register-form-input' type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username..."/>
                <input className='register-form-input' type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email..."/>
              </div>
              <div>
                <input className='register-form-input' type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password..."/>
              </div>

              <input className='register-form-submit-btn' type="submit" value="Register" disabled={!user.email || !user.firstName || !user.lastName || !user.password || !user.username} />
            </form>
            <Link className='already-user-btn' to="/">Already a user?</Link>
          </div>
        </main>
        </>
    );
}

 
            
        