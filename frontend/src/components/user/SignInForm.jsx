import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignInForm(props) {

  const navigate = useNavigate()

    const [newUser, setNewUser] = useState({});

    const handleChange = (event) => {
        const user = {...newUser};
        user[event.target.name] = event.target.value;
        console.log(user);
        setNewUser(user);
    }

    const loginHandler = (e) => {
        e.preventDefault();
        props.login(newUser);
        e.target.reset();
        navigate('/')
    }

    return (
      <div className="mx-auto p-5 d-flex justify-content-center align-items-center">
      <div className="col-md-5">
        <div className="card p-4" style={{ borderRadius: '15px' }}>
          <h1 className="text-center mb-4">Sign-In</h1>

          <form onSubmit={loginHandler}>
            <div className="form-group col-md-6 mb-3 mx-auto ">
              <label htmlFor="user_emailAddress">Email Address</label>
              <input
                type="email"
                id="user_emailAddress"
                name="user_emailAddress"
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email"
                required
                style={{ borderRadius: '20px' }}
              />
            </div>

          

            <div className="form-group col-md-6 mb-3 mx-auto">
              <label htmlFor="user_password">Password</label>
              <input
                type="password"
                id="user_password"
                name="user_password"
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your password"
                required
                style={{ borderRadius: '20px' }}
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-secondary btn-lg p-15" style={{  width: '110px'}}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
