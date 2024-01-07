import axios from "axios";
import { useState } from "react";

const Signup = ({ setToggle, toggle }) => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

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
            <div className="text-center signup-page">
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
                                    {/* Name input */}
                                    <div className="form-outline mb-4">
                                        <input type="text" id="form3Example3" className="form-control" onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' />
                                        <label className="form-label" htmlFor="form3Example3">Name</label>
                                    </div>

                                    {/* Email input */}
                                    <div className="form-outline mb-4">
                                        <input type="email" id="form3ExampleEmail" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' />
                                        <label className="form-label" htmlFor="form3ExampleEmail">Email address</label>
                                    </div>

                                    {/* Password input */}
                                    <div className="form-outline mb-4">
                                        <input type="password" id="form3ExamplePassword" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password' />
                                        <label className="form-label" htmlFor="form3ExamplePassword">Password</label>
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
        </div>
    )
}

export default Signup;