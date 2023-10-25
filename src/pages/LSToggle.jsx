import React, { useState } from 'react'
import Signup from '../components/Signup'
import Login from '../components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';


const LSToggle = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <>
      {/* <h3 onClick={() => { setToggle(!toggle) }} >{toggle ? <><Login /><span>Login</span></> : <><Signup /><span>Register</span></>}</h3> */}
      {toggle ? (
        <Signup toggle={toggle} setToggle={setToggle}/>
      ): (
        <Login toggle={toggle} setToggle={setToggle}/>
      )}
    </>
    // </div>
  )
}

export default LSToggle