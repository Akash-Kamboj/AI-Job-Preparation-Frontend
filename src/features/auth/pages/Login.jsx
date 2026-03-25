import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Login = () => {

    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleLogin({ email, password })
        navigate('/')
    }

    if (loading) {
        return (<main><h1>Loading.......</h1></main>)
    }


    return (
        <div className='login-container'>
            <main>
                <div className="container">
                    <div className="form-container">
                        <h1>Login</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-wrapper">
                                    <MdEmail className="icon" />
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter email address"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <div className="input-wrapper">
                                    <FaLock className="icon" />
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Enter password"
                                        required
                                    />
                                </div>
                            </div>
                            <button className='button primary-button' >Login</button>
                        </form>
                        <p>Don't have an account? <Link to={"/register"} >Register</Link> </p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login