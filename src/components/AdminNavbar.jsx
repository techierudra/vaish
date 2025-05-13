



import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { IconLogout } from '@tabler/icons-react';
import '../css/Navbar.css';
import { useNavigate } from 'react-router-dom';


function AdminNavbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear stored credentials from session storage
    sessionStorage.removeItem('adminEmail');
    sessionStorage.removeItem('adminPassword');

    // Redirect to the login page or homepage after logout
    navigate('/'); // Redirect to the desired page after logout
  };

  return (
    <>
      {/* <Title /> */}
      <Navbar collapseOnSelect expand="lg" className="custom-navbar">
        <Container>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          <Navbar.Toggle  aria-controls="responsive-navbar-nav" style={{ color:'white',borderColor: 'white' }} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link style={{ color: 'white' }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/></svg> Admin Name: {sessionStorage.getItem("adminName")} </Nav.Link>
              <NavDropdown title="Categories" id="collapsible-nav-dropdown" className="custom-nav-dropdown">
                <NavDropdown.Item href="/AdminFetchUserData" style={{ color: 'black' }}>User Data</NavDropdown.Item>
                <NavDropdown.Item href="/AdminFetchQFIRData" style={{ color: 'black' }}>Quick FIR Entries</NavDropdown.Item>
                
            
              </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="/AddAdmin" style={{ color: 'white' }}>Add Admin</Nav.Link>
              <Nav.Link href="/AdminHomepage" style={{ color: 'white' }}>Home</Nav.Link>
              
              <Nav.Link href="/AdminLogin" style={{ color: 'white' }} onClick={handleLogout} >Logout <IconLogout stroke={1.25} /></Nav.Link>
              
        
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;