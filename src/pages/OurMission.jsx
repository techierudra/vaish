import React from 'react';
import Navbar from '../components/Navbar';
import Title from '../components/Title';

function OurMission() {
  return (
    <div style={{
      backgroundImage: `url(${require('../images/2.jpg')})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      color:'white',
      overflow: 'auto',
    }} >

      <Title/>
      
    <Navbar />   
    <div className="container"  >
    
      <div style={{backgroundColor:'rgba(255, 255, 255, 0.9)',
    color:'black', paddingLeft:'15px' , paddingRight: '15px',
    marginTop:'20px'
    }}>
      
      <section className="mission">
  <div className="container">
    <h2>Our Mission</h2>
    <p>
      At Online Crime Reporting and Incident Management System, our mission is to create a robust, transparent, and citizen-centric platform that empowers individuals to report crimes seamlessly and track incident progress in real-time. We aim to strengthen public safety by enabling faster reporting, effective communication with law enforcement, and efficient case management through modern technologies.
    </p>

    <h3>A Platform for Victims</h3>
    <p>
      Our solution is designed to provide victims with a secure, intuitive, and accessible digital platform where they can report incidents without visiting police stations physically. By simplifying the FIR filing process and integrating support services, we ensure that justice is accessible to everyone—regardless of their background or technical expertise.
    </p>

    <h3>Bridging the Gap</h3>
    <p>
      One of the critical challenges in today’s law enforcement landscape is the disconnect between the public and authorities. Our system directly addresses this by providing a communication bridge that keeps victims informed of their case status, facilitates updates from officers, and promotes accountability through real-time transparency.
    </p>

    <h3>Empowering Communities</h3>
    <p>
      Beyond individual reporting, our platform encourages community vigilance. Citizens can report suspicious activities, submit anonymous tips, and contribute to crime prevention efforts collaboratively. By enabling community participation, we foster a proactive approach to public safety.
    </p>

    <h3>Leveraging Technology for Justice</h3>
    <p>
      We harness modern tools such as cloud computing, automation, and intelligent data analysis to improve the effectiveness of crime response and case resolution. Our platform streamlines task assignment, generates actionable reports, and reduces administrative delays—ensuring justice is swift and efficient.
    </p>

    <h3>Join Us in Our Mission</h3>
    <p>
      Our goal is not just to report crimes but to modernize how justice is served. By bridging the gap between citizens and law enforcement through digital means, raising awareness about safety, and promoting data-driven decision-making, we aim to create a more secure and responsive environment. Join us in transforming crime reporting into a transparent, efficient, and community-driven process.
    </p>
  </div>
</section>

      </div>
     
      </div>


      <footer style={{ height:'35px', position: 'auto', left: '0', bottom: '0', width: '100%', backgroundColor: 'rgba(13, 2, 2, 1)', color: 'white', textAlign: 'center', padding: '10px' }}>
        <p>&copy; 2025 E-Crime Report Hub</p>
      </footer>
     
    </div>
    
    
  );
}

export default OurMission;