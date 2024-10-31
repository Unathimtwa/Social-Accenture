import React from 'react';
import './pricing.css'; // Ensure you have this CSS file

const Pricing = () => {
  return (
    <div className="pricing">
      <h1>Pricing Plans</h1>
      <p>Choose the plan that's right for you:</p>
      
      <div className="plan-container">
        <div className="plan">
          <h2>Basic Plan</h2>
          <p>Access to basic courses and community features.</p>
          <p>Price: 0.005 ETH</p>
          <button>Sign Up</button>
        </div>
        
        <div className="plan">
          <h2>Pro Plan</h2>
          <p>Includes all basic features plus premium courses.</p>
          <p>Price: 0.01 ETH</p>
          <button>Sign Up</button>
        </div>
        
        <div className="plan">
          <h2>Enterprise Plan</h2>
          <p>Custom solutions for organizations and teams.</p>
          <p>Contact us for pricing.</p>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
