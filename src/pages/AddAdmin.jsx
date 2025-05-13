import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function RegistrationComponent() {
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationFailed, setRegistrationFailed] = useState(false);

  const { name, email, password } = admin;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin((prevAdmin) => ({
      ...prevAdmin,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post("http://localhost:8080/admin", admin);
      setRegistrationSuccess(true);
    } catch (error) {
      setRegistrationFailed(true);
      console.error('Error sending data to backend:', error);
    }
  };

  if (registrationSuccess) {
    return <Navigate to="/AdminRegSuccess" />;
  }

  if (registrationFailed) {
    return <Navigate to="/AdminRegFailed" />;
  }

  return (
    <div className="background-image"
      style={{
        backgroundImage: `url(${require('../images/10.jpg')})`,
        backgroundSize: 'cover ',
        backgroundPosition:'center center',
        backgroundAttachment: 'fixed',
        height: '100vh',
      }}
    >
      <div>
        <div style={{ fontWeight:'bold', color:'white', padding:'70px', display: 'flex', justifyContent: 'center'}}>
          <Form onSubmit={handleSubmit} style={{ width: '300px' }}>
            <div style={{ fontWeight:'bold', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <h3>ADMIN REGISTRATION</h3></div>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit" style={{ width: '100%' }}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
