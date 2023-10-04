import React, { useState } from 'react'
import Signup from '../components/Signup'
import Login from '../components/Login'

const LSToggle = () => {
    const [toggle,setToggle] =useState(true)
  return (
    <div>
        {toggle ? <Signup/> : <Login/>}
        <button onClick={()=>{setToggle(!toggle)}}>TOGGLE</button>
    </div>
  )
}

export default LSToggle