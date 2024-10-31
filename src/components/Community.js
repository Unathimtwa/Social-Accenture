import React from 'react';
import './community.css'; // Create this CSS file for styles

const Community = () => {
  return (
    <div className="community">
      <h1>Welcome to Our Community!</h1>
      <p>
        Join our vibrant community of learners, educators, and professionals! Share knowledge, ask questions, and collaborate with others.
      </p>
      
      <section className="forums">
        <h2>Discussion Forums</h2>
        <ul>
          <li><a href="#">General Discussions</a></li>
          <li><a href="#">Course Feedback</a></li>
          <li><a href="#">Job Opportunities</a></li>
        </ul>
      </section>

      <section className="resources">
        <h2>Resources</h2>
        <p>Access valuable resources to enhance your learning experience:</p>
        <ul>
          <li><a href="#">Webinars</a></li>
          <li><a href="#">E-books</a></li>
          <li><a href="#">Online Workshops</a></li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <blockquote>
          "This platform has transformed my learning experience!" - A Happy Learner
        </blockquote>
        <blockquote>
          "I found the community support invaluable!" - Another Happy User
        </blockquote>
      </section>
    </div>
  );
};

export default Community;
