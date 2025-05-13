import React from 'react';
import Card from 'react-bootstrap/Card';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import vash from '../images/vash.jpeg';
import prajin from '../images/prajin.jpeg';
import '../css/aboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${require('../images/2.jpg')})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          position: 'fixed',
          width: '100%',
          zIndex: '-1'
        }}
      ></div>

      <div className="content">
        <Title />
        <Navbar />

        <div className='container' style={{ color: 'black', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          <div className='container'>
            <header>
              <h1 style={{ fontWeight: 'bold', textAlign: 'center', margin: '0px', color: 'black', marginTop: '20px' }}>About Us</h1>
            </header>

            {/* Mission Section */}
            <section className="mission">
              <div className="container">
                <h2>Our Mission</h2>
                <p>
                  At E-Crime Report Hub, our mission is to revolutionize public safety through a secure, user-friendly platform that enables real-time crime reporting, seamless communication with law enforcement, and automated case tracking. We aim to empower citizens, improve police responsiveness, and leverage technology to foster a transparent and efficient justice system.
                </p>
              </div>
            </section>

            {/* Core Values Section */}
            <section className="values">
              <div className="container">
                <h2>Our Core Values</h2>
                <ul>
                  <li><strong>Accessibility:</strong> We are committed to ensuring crime reporting is available to everyone, anywhere, at any time.</li>
                  <li><strong>Security:</strong> We prioritize data protection through encryption, secure authentication, and robust access control.</li>
                  <li><strong>Innovation:</strong> We integrate cutting-edge technologies like AI and cloud infrastructure to optimize crime detection and response.</li>
                  <li><strong>Efficiency:</strong> We reduce manual processes and improve coordination between departments through automation and intelligent workflows.</li>
                  <li><strong>Transparency:</strong> We build public trust by providing real-time updates and clear communication throughout the reporting process.</li>
                </ul>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-us">
              <div className="container">
                <h2>Why Choose Us</h2>
                <p>
                  E-Crime Report Hub is more than a digital reporting tool—it's a comprehensive crime management solution. Here's why you should trust us:
                </p>
                <ul>
                  <li>Real-time status tracking and communication with law enforcement.</li>
                  <li>Automated case allocation and classification using AI technologies.</li>
                  <li>Secure data handling with modern encryption protocols.</li>
                  <li>Multi-platform accessibility with a user-friendly interface.</li>
                  <li>Proactive analytics for crime pattern recognition and prevention.</li>
                </ul>
              </div>
            </section>

            {/* Team Section */}
            <section className="team">
              <div className="container">
                <h2 style={{ textAlign: 'center' }}>Our Team</h2>
                <div className="team-members" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '20px',
                  marginTop: '20px'
                }}>
                  {/* Member 1 */}
                  <div className="team-member" style={{
                    maxWidth: '250px',
                    border: '1px solid #ccc',
                    padding: '20px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    backgroundColor: '#fff'
                  }}>
                    <img className="team-member-img" src={vash} alt="Vaishnavi" style={{ width: '100%', borderRadius: '10px' }} />
                    <h3>Vaishnavi</h3>
                  </div>

                  {/* Member 2 */}
                  <div className="team-member" style={{
                    maxWidth: '250px',
                    border: '1px solid #ccc',
                    padding: '20px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    backgroundColor: '#fff'
                  }}>
                    <img className="team-member-img" src={prajin} alt="Prajin Chopra" style={{ width: '100%', borderRadius: '10px' }} />
                    <h3>Prajin Chopra</h3>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <footer style={{
          height: '35px',
          position: 'auto',
          left: '0',
          bottom: '0',
          width: '100%',
          backgroundColor: 'rgba(13, 2, 2, 1)',
          color: 'white',
          textAlign: 'center',
          padding: '10px'
        }}>
          <p>&copy; 2025 E-Crime Report Hub</p>
        </footer>
      </div>
    </div>
  );
}

export default AboutUs;