import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './login.scss'
const Login = ()=> {
   
    return(
        <div className='login-pg-main-div'>
           <form >
            <h2>Login</h2>
            <input placeholder='Email address'/>
            <label htmlFor="email"  ></label>
            <input placeholder='Password'/>
            <label htmlFor="password" ></label>
            <button >Login</button>
            <div className='forgot-pswd-div'>
                <h6>New to Gadget Gallery ? </h6><Link to={"/signin"}><h5>Sign In</h5></Link>
            </div>
           </form>
        </div>
    )
}


export default Login