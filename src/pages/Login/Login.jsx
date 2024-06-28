import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { onBtnClick } from '../../Redux/logFormSlice';

const Login = () => {
  const currentState = useSelector((store) => store.form.currentState);
  const dispatch = useDispatch();
  const isSigninRoute = window.location.pathname === "/signin";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSigninRoute) {
      // Sign-in logic here
      console.log("Sign Up with:", formData);
    } else {
      // Login logic here
      console.log("Login with:", formData);
    }
  };

  return (
    <div className='login-pg-main-div'>
      <form onSubmit={handleSubmit}>
        <h1>{isSigninRoute ? "Sign In" : "Login"}</h1>
        {isSigninRoute && (
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required={isSigninRoute}
            />
            <label htmlFor="name">Name</label>
          </div>
        )}
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit">{isSigninRoute ? "Sign In" : "Login"}</button>
        <div className='forgot-pswd-div'>
          <h4>{isSigninRoute ? "Already have an account?" : "New to Gadget Gallery?"}</h4>
          <Link to={isSigninRoute ? "/login" : "/signin"} style={{ textDecoration: "none", marginLeft: "5px" }}>
            <h3 onClick={() => dispatch(onBtnClick(isSigninRoute ? "login" : "signin"))}>
              {isSigninRoute ? "Login" : "Sign In"}
            </h3>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
