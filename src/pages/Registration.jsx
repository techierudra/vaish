
import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from '../components/Navbar';
import Title from '../components/Title';

export default function RegistrationComponent() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
    address: "",
    documentType: 'select',
    documentDetails: '',
    agreement: false
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationFailed, setRegistrationFailed] = useState(false);

  const { name, email, password, phone, dob, address, documentType, documentDetails, agreement } = user;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post("http://localhost:8080/user", user);
      setRegistrationSuccess(true);
    } catch (error) {
      setRegistrationFailed(true);
      console.error('Error sending data to backend:', error);
    }
  };

  const showDocumentDetails = () => {
    const documentSelect = document.getElementById('document');
    const documentDetails = document.getElementById('documentDetails');
    const selectedOption = documentSelect.options[documentSelect.selectedIndex].text;

    if (documentSelect.value !== 'select') {
      documentDetails.style.display = 'block';
      documentDetails.setAttribute('required', 'true');
      documentDetails.placeholder = `Enter ${selectedOption} details`;

      // Update the user state
      setUser((prevUser) => ({
        ...prevUser,
        documentType: documentSelect.value,
      }));
    } else {
      documentDetails.style.display = 'none';
      documentDetails.removeAttribute('required');
      // Reset documentType and documentDetails in user state
      setUser((prevUser) => ({
        ...prevUser,
        documentType: 'select',
        documentDetails: '',
      }));
    }
  };

  if (registrationSuccess) {
    return <Navigate to="/RegSuccess" />;
  }

  if (registrationFailed) {
    return <Navigate to="/RegFailed" />;
  }

  return (
    <div className="background-image"
      style={{
        backgroundImage: `url(${require('../images/7.jpg')})`,
        backgroundSize: 'cover ',
        backgroundPosition:'center center',
        backgroundAttachment: 'fixed',
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <div>
        <Title />
        <Navbar />
        <div style={{ color:'white', padding:'10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Form onSubmit={handleSubmit} style={{ width: '300px' }}>
            <div style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <h2>REGISTRATION</h2></div>
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
            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                value={phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="dob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={dob}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                name="address"
                value={address}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="document">
              <Form.Label>Government Issued Document</Form.Label>
              <Form.Control
                as="select"
                name="documentType"
                onChange={(e) => { handleChange(e); showDocumentDetails(); }}
                value={documentType}
                required
              >
                <option value="select">Select any one</option>
                <option value="aadhar">Aadhaar Number</option>
                <option value="pan">PAN Number</option>
                <option value="driving">Driving License Number</option>
                <option value="passport">Passport Number</option>
                
              </Form.Control>
            </Form.Group>
            <Form.Group id="documentDetails" style={{ display: 'none' }}>
              <Form.Label>Document Details</Form.Label>
              <Form.Control
                type="text"
                name="documentDetails"
                placeholder="Enter document details"
                value={documentDetails}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="agreement">
              <Form.Check style={{fontWeight:'bold', color:'white', marginTop: '10px' }}
                type="checkbox"
                label="I AGREE THAT ALL THE INFO MENTIONED ABOVE ARE LEGIT AND I WILL USE THIS WEBSITE WISELY AS PER THE LAW"
                name="agreement"
                checked={agreement}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ width: '100%' }}>
              Submit
            </Button>
            <div><br /><Link to="/Login" style={{color:'white'}}>Already a user? Login here</Link></div>
          </Form>
        </div>
      </div>
    </div>
  );
}



