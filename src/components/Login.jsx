import axios from 'axios';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';


const Login = ({setToggle,toggle}) => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const val =useSelector(store=>store)
    const dispatch=useDispatch()
 
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(` http://localhost:9999/user?email${email}`)

            .then((res) => {
                console.log(res.data);
                // if (res.data[0].email === email && res.data[0].password === password) {
                    // alert("login successfully");
                // }
                // else {
                //     alert("login failed");
                // }
                // location.href = "http://localhost:3000/pages/Home";
                // history.push('../pages/Home');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <section className="text-center text-lg-start login-page">
                <style>
                    {`
          .cascading-right {
            margin-right: -50px;
          }

          @media (max-width: 991.98px) {
            .cascading-right {
              margin-right: 0;
            }
          }
        `}
                </style>

                <div className="container py-4">
                    <div className="row g-0">
                        <div className="col-lg-6 mb-5 mb-lg-0 padding">
                            <div className="card cascading-right" >
                                <div className="card-body p-5 shadow-5 text-center">
                                    <h2 className="fw-bold mb-5">Login Now</h2>
                                    <form  onClick={handleSubmit}>

                                        <div className="form-outline mb-4">
                                            <input type="email" id="form3Example3" className="form-control" placeholder='Enter Yore Email' onChange={(e) => setEmail(e.target.value)}/>
                                            <label className="form-label" htmlFor="form3Example3">Email address</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" id="form3Example4" className="form-control" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />
                                            <label className="form-label" htmlFor="form3Example4">Password</label>
                                        </div>


                                        <button type="submit" className="btn btn-primary btn-block mb-4">
                                            Login
                                        </button>

                                        <p onClick={()=>setToggle(!toggle)}>Sign Up</p>

                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0 padding img-width">
                            <img src="https://electrek.co/wp-content/uploads/sites/3/2021/06/Tesla-Model-S-yoke-steering-wheel-hero.jpg?quality=82&strip=all&w=1600" className="w-100 rounded-4 shadow-4 img-height" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login;