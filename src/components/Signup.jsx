// Signup Component
import axios from 'axios';
import React, { useState } from 'react'

const Signup = () => {
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
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Signup