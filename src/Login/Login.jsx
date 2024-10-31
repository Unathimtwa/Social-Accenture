import React, { useState } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log(formData);
  };

  return (
    <div className='addUser'>
      <h3>Sign In</h3>
      <form className='addUserForm' onSubmit={handleSubmit}>
        <div className='inputGroup'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            autoComplete='off'
            placeholder='Enter your Email'
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            autoComplete='off'
            placeholder='Enter your Password'
            value={formData.password}
            onChange={handleChange}
          />
          <button type='submit' class='btn btn-primary'>
            Login
          </button>
        </div>
      </form>
      <div className='Login'>
        <p>No account registered yet, create one here</p>
        <Link to='/signup' type='button' class='btn btn-Success'>
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;