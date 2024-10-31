import React from 'react';
import './Home.css'; // Optional: Create a CSS file for additional styling

const Home = () => {
  return (
    <div className="home">
      <div className="welcome-text">
        <h1>Welcome to Our Learning Platform!</h1>
        <p>
          Are you ready to elevate your skills and unlock new opportunities? 
          Our platform offers a diverse range of courses tailored for potential 
          students like you. Join us today and embark on a journey of knowledge 
          and growth!
        </p>
        <p>
          Whether you're looking to advance in your career, switch fields, 
          or simply explore new interests, we have something for everyone. 
          Our expert instructors and engaging content will ensure you have 
          the best learning experience possible.
        </p>
        <p>
          Don’t wait any longer! Sign up now and take the first step towards 
          your future success!
        </p>
      </div>
    </div>
  );
};

export default Home;
