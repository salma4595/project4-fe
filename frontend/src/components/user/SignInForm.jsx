import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './User.css'; // Import the CSS file for SignInForm

export default function SignInForm(props) {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({});

  const handleChange = (event) => {
    const user = { ...newUser };
    user[event.target.name] = event.target.value;
    console.log(user);
    setNewUser(user);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    props.login(newUser);
    e.target.reset();
    navigate('/');
  };

  return (
    <div className="signin-form">
      <div className="signin-form-card">
        <h1 className="text-center mb-4">Sign-In</h1>

        <form onSubmit={loginHandler}>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="user_emailAddress" onChange={handleChange} className="form-control" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name="user_password" onChange={handleChange} className="form-control" />
          </div>

          <div className="form-group text-center">
            <button type="submit" className="btn btn-secondary btn-lg" style={{ marginTop: 10 }}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}