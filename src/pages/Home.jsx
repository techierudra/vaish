
// import React from 'react';
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Navbar from '../components/Navbar';

import backgroundImage from '../images/3.jpg';
import Title from '../components/Title';
import '../css/home.css';



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
    
    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px', paddingBottom:"5px" ,margin: '2px', height :"150px" ,}}>
      <Card style={{ width: '400px'  , backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
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

function Home() {
  const navigate = useNavigate(); 

  function register() {
    navigate("/Registration");
  }

  return (
    <div  style={{
      backgroundImage: `url(${require('../images/3.jpg')})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      overflow:'auto',
    }}>
    

    <Title/>
    <div className='content'>
       <Navbar />
    </div>
     
     
      <div className='con1' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '65vh', justifyContent: 'center' }}>
        <Link to="/Registration">
       
          <Button
    variant="primary"
    size="lg"
    style={{
      margin: '10px 0',
      padding: '30px',
      width: '350px',
      backgroundColor: 'rgba(255, 255, 255, 0.85)', // Background color with opacity
      color: 'black', // Text color
      border: '1px solid black', // Border color
      fontWeight: 'bold' ,
      textAlign: 'center', // Center align text
      // opacity: '0.9', // Opacity of the button
    }}
  >
    Register
  </Button>
        </Link>
        <Link to="/Login"> 
          <Button variant="primary" size="lg" style={{ margin: '10px 0',
      padding: '30px',
      width: '350px',
      backgroundColor: 'rgba(255, 255, 255, 0.85)', // Background color with opacity
      color: 'black', // Text color
      border: '1px solid black', // Border color
      fontWeight: 'bold' ,
      textAlign: 'center',}}>Login
          
          
          </Button>
        </Link>
        <Link to="/QuickFIR">
          <Button variant="primary" size="lg" style={{  margin: '10px 0',
      padding: '30px',
      width: '350px',
      backgroundColor: 'rgba(255, 255, 255, 0.85)', // Background color with opacity
      color: 'black', // Text color
      border: '1px solid black', // Border color
      fontWeight: 'bold' ,
      textAlign: 'center',}}>Quick FIR</Button>
        </Link>
      </div>
      <TextExample />
      <footer style={{ height:'35px', position: 'auto', left: '0', bottom: '0', width: '100%', backgroundColor: 'rgba(13, 2, 2, 1)', color: 'white', textAlign: 'center', padding: '10px' }}>
        <p>&copy; 2024 E-Crime Report Hub</p>
      </footer>
      
    </div>

    
  );
}

export default Home;
