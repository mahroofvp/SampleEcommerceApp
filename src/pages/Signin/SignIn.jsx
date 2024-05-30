import React from 'react'
import './signin.scss'
import {Link} from 'react-router-dom'
const SignIn = ()=> {
    return(
        <div className='signin-pg-main-div'>
           
           <form >
            <h2>Sign In</h2>
            <input placeholder='Email address'/>
            <label htmlFor="email"  ></label>
            <input placeholder='Password'/>
            <label htmlFor="password" ></label>
            <button >Sign In</button>
            <div className='forgot-pswd-div'>
                <h6>Already have an account? </h6><Link to={"/login"}><h5>Login</h5></Link>
                
            </div>
           </form>
        </div>
    )
}


export default SignIn