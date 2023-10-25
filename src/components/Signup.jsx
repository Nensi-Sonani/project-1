// Signup Component
import axios from 'axios';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
// import LSToggle from '../pages/LSToggle';


const Signup = ({ setToggle, toggle }) => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const val = useSelector(store => store)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            name: name,
            email: email,
            password: password
        }
        axios.post(`http://localhost:9999/user`, obj)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            {/* <div classNameNameName="center d-flex justify-content-center align-items-center m-5">
            <div classNameNameName="card">
            <form >
                <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} classNameNameName='m-3'/>
                <input type="email" placeholder='email'  classNameNameName='m-3'/>
                <input type="password" placeholder='password'  classNameNameName='m-3'/>
                <input type="submit" classNameNameName='m-3'/>
                {/* <LSToggle/> 
            </form>
            </div>
            </div> */}

            <section className="text-center signup-page">
                {/* Background image */}
                <div className="p-5 bg-image" style={{
                    // backgroundImage: `url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg')`,
                    height: '300px'
                }}></div>
                {/* Background image */}

                <div className="main-card">
                    <div className="card mx-4 mx-md-5 shadow-5-strong" style={{
                        marginTop: '-100px',
                        background: 'hsla(0, 0%, 100%, 0.8)',
                        backdropFilter: 'blur(30px)'
                    }}>
                        <div className="card-body py-3 px-md-5">

                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className="fw-bold mb-5">Sign up now</h2>
                                    <form onSubmit={handleSubmit}>
                                        {/* 2 column grid layout with text inputs for the first and last names */}
                                        {/* <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="form3Example1" className="form-control" />
                                                <label className="form-label" htmlFor="form3Example1">First name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="form3Example2" className="form-control" />
                                                <label className="form-label" htmlFor="form3Example2">Last name</label>
                                            </div>
                                        </div>
                                    </div> */}

                                        {/* Name input */}
                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example3" className="form-control" onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' />
                                            <label className="form-label" htmlFor="form3Example3">Name</label>
                                        </div>

                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <input type="email" id="form3Example3" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' />
                                            <label className="form-label" htmlFor="form3Example3">Email address</label>
                                        </div>

                                        {/* Password input */}
                                        <div className="form-outline mb-4">
                                            <input type="password" id="form3Example4" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password' />
                                            <label className="form-label" htmlFor="form3Example4">Password</label>
                                        </div>


                                        {/* Submit button */}
                                        <button type="submit" className="btn btn-primary btn-block mb-4">
                                            Sign up
                                        </button>

                                        <p onClick={() => setToggle(!toggle)}>Login</p>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup