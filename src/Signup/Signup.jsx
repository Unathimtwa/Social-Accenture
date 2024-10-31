import React, { useState } from 'react';
import "./Signup.css";
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
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
      <h3>Sign Up</h3>
      <form className='addUserForm' onSubmit={handleSubmit}>
        <div className='inputGroup'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            autoComplete='off'
            placeholder='Enter your name'
            value={formData.name}
            onChange={handleChange}
          />
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
          <button type='submit' class='btn btn-success'>
            Sign Up
          </button>
        </div>
      </form>
      <div className='Login'>
        <p>Already have an account</p>
        <Link to='/login' type='button' class='btn btn-primary'>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;