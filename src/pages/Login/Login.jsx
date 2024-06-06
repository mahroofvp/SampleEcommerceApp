import React from 'react'
import { Link } from 'react-router-dom'
import './login.scss'
import { useDispatch, useSelector } from 'react-redux'
import { onBtnClick } from '../../Redux/logFormSlice'


const Login = ()=> {

 const  currentState = useSelector((store)=> store.form.currentState)
 const dispatch = useDispatch()


    return(
        <div className='login-pg-main-div'>
           <form >
            <h1>{currentState === 'login'? "Login": "Sign In"}</h1>
            <input placeholder='Email address'/>
            <label htmlFor="email"  ></label>
            <input placeholder='Password'/>
            <label htmlFor="password" ></label>
            <button >{currentState === 'login'? "Login": "Sign In"}</button>
            <div className='forgot-pswd-div'>
               {currentState === 'login'? <h4>New to Gadget Gallery ? </h4>: <h4>Already have an account ? </h4>}
                <Link to={currentState === 'login'? "/signin":"/login"} style={{textDecoration:"none", marginLeft:"5px"}}>
                    <h3 onClick={()=>dispatch(onBtnClick(currentState === 'login'?"signin": "login"))}>
                        {currentState === 'login'? "Sign In": "Login"}</h3>
                        </Link>
            </div>
           </form>
           
        </div>
    )
}


export default Login