
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Navbar from '../components/Navbar';
import Title from '../components/Title';

function TextExample() {
  const openGoogleMap = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
 
    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px', paddingBottom:"15px" , margin: '2px', height :"150px" }}>
      <Card style={{ width: '400px' , backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <Card.Body>
          <Card.Title style={{ textAlign: 'center' }}>REACH US VIA </Card.Title>
          <Card.Text>
            Emergency contact number : +91 9085736245 <br/>
            Email us : <Card.Link href="#">help.ecrhsupport@gmail.com</Card.Link><br/>
            Police Station Near me : <Card.Link href="#" onClick={openGoogleMap}> [Google Map]</Card.Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

function AfterLogin() {
  const navigate = useNavigate(); 

  function register() {
    navigate("/Registration");
  }

  return (
    <div  style={{
      backgroundImage: `url(${require('../images/15.jpg')})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      overflow:'auto'
    }}>
    <div>
      <Title/>
       <Navbar />
      <div className='con1' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '65vh', justifyContent: 'center' }}>
        <Link to="/MyComplaints">
          <Button variant="primary" size="lg" style={{ margin: '10px 0',
      padding: '30px',
      width: '350px',
      backgroundColor: 'rgba(255, 255, 255, 0.85)', // Background color with opacity
      color: 'black', // Text color
      border: '1px solid black', // Border color
      fontWeight: 'bold' ,
      textAlign: 'center',}}>MY COMPLAINTS</Button>
        </Link>
        <Link to="/FileFIR"> 
          <Button variant="primary" size="lg" style={{ margin: '10px 0',
      padding: '30px',
      width: '350px',
      backgroundColor: 'rgba(255, 255, 255, 0.85)', // Background color with opacity
      color: 'black', // Text color
      border: '1px solid black', // Border color
      fontWeight: 'bold' ,
      textAlign: 'center',}}>FILE FIR</Button>
        </Link>
        
      </div>
      <TextExample />
      <footer style={{ height:'35px', position: 'auto', left: '0', bottom: '0', width: '100%', backgroundColor: 'rgba(13, 2, 2, 0.7)', color: 'white', textAlign: 'center', padding: '10px' }}>
        <p>&copy; 2024 E-Crime Report Hub</p>
      </footer>
    </div>
    </div>
  );
}

export default AfterLogin;
