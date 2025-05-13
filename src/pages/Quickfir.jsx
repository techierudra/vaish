
import axios from "axios";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import {  Navigate } from 'react-router-dom'; // Import Navigate
import Title from '../components/Title';
import Button from 'react-bootstrap/Button';

const QuickFIR = () => {


  const [formData, setFormData] = useState({
    name: "",
    emergencyContact: "",
    category: "",
    description: "",
    whenOccurredDate: "", 
    whenOccurredTime: "",
    whereOccurredState: "", 
    whereOccurredCity: "", 
    landmark: ""
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationFailed, setRegistrationFailed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting form data:", formData); // Log the form data
      // Append ":00" to the time to include seconds
      const formDataWithSeconds = { ...formData, whenOccurredTime: formData.whenOccurredTime + ":00" };
      await axios.post("http://localhost:8080/quickfir", formDataWithSeconds);
      setRegistrationSuccess(true);
    } catch (error) {
      console.error("Error submitting form data:", error); // Log any errors
      setRegistrationFailed(true);
    }
  };

  

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    const incidentDescriptionGroup = document.getElementById('incidentDescriptionGroup');
    if (selectedCategory === '') {
      incidentDescriptionGroup.style.display = 'none';
    } else {
      incidentDescriptionGroup.style.display = 'block';
    }
  };

  if (registrationSuccess) {
    return <Navigate to="/QFIRSuccess" />;
  }

  if (registrationFailed) {
    return <Navigate to="/QFIRFailed" />;
  }

  return (
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${require('../images/qfir1.jpg')})`,
        backgroundSize: 'cover ',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <div className="content"  >
        <Title />
        <Navbar />
            <br />
            <br />
            
            <div className='container'style={{ color: 'white', display: 'flex' , justifyContent:'center',}}>
              <h2>QUICK FIR</h2>
            </div>
            <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '1vh' }}>
            <form onSubmit={handleSubmit} style={{fontWeight:'bold', color:'white', width:'400px' , justifyContent:'center', alignItems: 'center'}}>
              <div className="form-group" style={{  justifyContent:'center', alignItems: 'center'}}>
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="emergencyContact">Alternate Number (Emergency Contact):</label>
                <input type="tel" className="form-control" id="emergencyContact" name="emergencyContact" placeholder="Enter alternate number" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <select className="form-control" id="category" name="category" onChange={(e) => { handleCategoryChange(e); handleChange(e); }} required>
                  <option value="">Select category</option>
                  <option value="Theft">Theft</option>
                  <option value="Assault">Assault</option>
                  <option value="Fraud">Fraud</option>
                  <option value="Drug-Related Crimes">Drug-Related Crimes</option>
                  <option value="Vandalism">Vandalism</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="form-group" id="incidentDescriptionGroup" style={{ display: 'none' }}>
                <label htmlFor="description">Incident Description:</label>
                <textarea className="form-control" id="description" name="description" rows="4" placeholder="Enter incident description" onChange={handleChange}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="date">When Occurred (Date):</label>
                <input type="date" className="form-control" id="whenOccurredDate" name="whenOccurredDate" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="whenOccurred">When Occurred (TIME):</label>
                <input type="time" className="form-control" id="whenOccurredTime" name="whenOccurredTime" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="location(state)">Where Occurred (State):</label>
                <input type="text" className="form-control" id="whereOccurredState" name="whereOccurredState" placeholder="Enter State" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="location(city)">Where Occurred (City):</label>
                <input type="text" className="form-control" id="whereOccurredCity" name="whereOccurredCity" placeholder="Enter City" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="Landmark">Landmark:</label>
                <input type="text" className="form-control" id="landmark" name="landmark" placeholder="apartment/flat/school etc..." onChange={handleChange} required />
              </div>
              <br />
              <Button variant='primary' style={{ width:'100%', marginBottom:'20px'}} type="submit">Submit</Button>
            </form>
            </div>
          </div>
        </div>
  );
};

export default QuickFIR;


