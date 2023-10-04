import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
    let[email,setEmail]=useState('');
    let[password,setPassword]=useState('');
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.get(` http://localhost:9999/user?email${email}`)
        .then((res)=>{
            console.log(res.data);
            if(res.data[0].email===email && res.data[0].password===password){
                alert("login successfully");
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
        <form onClick={handleSubmit}>
            <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Login