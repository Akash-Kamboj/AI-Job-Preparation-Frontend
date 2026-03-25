import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Register = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { loading, handleRegister } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister({ username, email, password })
        navigate("/")
    }

    if (loading) {
        return (<main><h1>Loading.......</h1></main>)
    }

    return (
        <div className='login-container'>
            <main>
                <div className="container">
                    <div className="form-container">
                        <h1>Register</h1>

                        <form onSubmit={handleSubmit}>

                            <div className="input-group">
                                <label htmlFor="username">Username</label>
                                <div className="input-wrapper">
                                    <FaUser className="icon" />
                                    <input
                                        onChange={(e) => { setUsername(e.target.value) }}
                                        type="text" id="username" name='username' placeholder='Enter username' required />
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-wrapper">
                                    <MdEmail className="icon" />
                                    <input
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        type="email" id="email" name='email' placeholder='Enter email address' required />
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <div className="input-wrapper">
                                    <FaLock className="icon" />
                                    <input
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        type="password" id="password" name='password' placeholder='Enter password' required />
                                </div>
                            </div>

                            <button className='button primary-button' >Register</button>

                        </form>

                        <p>Already have an account? <Link to={"/login"} >Login</Link> </p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Register