import React from 'react';
import Img from "../Images/Best-laptops-in-2021-7-things-to-consider-when-buying-a-laptop.jpg";
 // Import the CSS file

function Login() {
  return (
    <div className="container">
      <div className="login-form">
        <img src={Img} alt="Laptop" />
        <h1>Member Login</h1>
        
        <div className="form-group">
          <input type="email" id="email" placeholder="Email" />
        </div>
        
        <div className="form-group">
          <input type="password" id="password" placeholder="Password" />
        </div>
        
        <button type='submit' className="login-button">LOGIN</button>
        
        <p className="forgot-password">Forgot Username / Password?</p>
        <p className="create-account">Create your account</p>
      </div>
    </div>
  );
}

export default Login;