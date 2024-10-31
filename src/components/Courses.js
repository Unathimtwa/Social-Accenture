import React from 'react';
import './Courses.css'; // Optional: Create a CSS file for additional styling

const courseData = [
  { title: "Web3", image: require('../Assets/images/web3.jpg') },
  { title: "AI", image: require('../Assets/images/AI.jpg') },
  { title: "Cybersecurity", image: require('../Assets/images/cybersecurity.jpg') },
  { title: "Digital Marketing", image: require('../Assets/images/digital-marketing.jpg') },
  { title: "Sales", image: require('../Assets/images/sales.jpg') },
  { title: "Cloud Computing", image: require('../Assets/images/cloud-computing.jpg') },
];

const Courses = () => {
  return (
    <div className="courses">
      <h1>Our Courses</h1>
      <div className="course-container">
        {courseData.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image.default} alt={course.title} />
            <h2>{course.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
