import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate} from "react-router-dom"

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
      
        if (firstName && lastName && username && email && password) {
          
          const res = await axios.post(`http://localhost:4000/register`, user);
          alert(res.data.message);
          setUser({ firstName: ``, lastName: ``, username: ``, email: ``, password: `` });
          
          
          navigate('/');
        } else {
          alert(`Invalid input`);
        }
        
    }

    return (
        <>
            <h3>Create new account</h3>
            
        <form onSubmit={register}>
          <label>First name: 
            <input type="text" name="firstName" value={user.firstName} onChange={handleChange}/>
          </label>
          <label>Last name: 
            <input type="text" name="lastName" value={user.lastName} onChange={handleChange}/>
          </label>
          <label>Username: 
            <input type="text" name="username" value={user.username} onChange={handleChange}/>
          </label>
          <label>Email: 
            <input type="email" name="email" value={user.email} onChange={handleChange}/>
          </label>
          <label>Password: 
            <input type="password" name="password" value={user.password} onChange={handleChange}/>
          </label>
           <input type="submit" value="Register" />
            </form>
        </>
    );
}
