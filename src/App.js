import React from 'react';
import './App.css';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  createBrowserRouter,
} from "react-router-dom";

import  Courses  from './components/Courses';
import  JobBoard  from './components/JobBoard';
import Home  from './components/Home';
import  Pricing  from './components/Pricing';
import  Community  from './components/Community';
import Signup from './Signup/Signup';  // Ensure this import is included
import Login from './Login/Login';      // Ensure this import is included

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />, // Initial route shows Home component
    },
    {
      path: "/login",
      element: <Login />, // Login route
    },
    {
      path: "/signup",
      element: <Signup />, // Signup route
    },
    // Add other routes as needed
  ]);

  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/Courses">Courses</Nav.Link>
                <Nav.Link as={Link} to="/JobBoard">Job Board</Nav.Link>
                <Nav.Link as={Link} to="/Community">Community</Nav.Link>
                <Nav.Link as={Link} to="/Pricing">Pricing</Nav.Link>
              </Nav>
              {/* Right-aligned buttons */}
              <div className="auth-buttons">
                <Button variant="outline-light" as={Link} to="/login">Login</Button>
                <Button variant="outline-light" as={Link} to="/signup">Sign Up</Button>
              </div>
            </Container>
          </Navbar>
        </>
        <div>
          <Routes>
            <Route path="/Courses" element={<Courses />} />
            <Route path="/JobBoard" element={<JobBoard />} />
            <Route path="/" element={<Home />} />  {/* Matches any unmatched path */}
            <Route path="/Community" element={<Community />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/signup" element={<Signup />} />  {/* Signup route */}
            <Route path="/login" element={<Login />} />    {/* Login route */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
