import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/adminlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        const adminName = data.adminName;
  
        // Store credentials and admin name in session storage
        sessionStorage.setItem('adminEmail', email);
        sessionStorage.setItem('adminPassword', password);
        sessionStorage.setItem('adminName', adminName);
  
        // Redirect to AdminHomepage upon successful login
        navigate('/AdminHomepage');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  


  return (
    <div className="background-image" style={{
      backgroundImage: `url(${require('../images/9.jpg')})`,
      backgroundSize: 'cover ',
      backgroundPosition:'center center',
      backgroundAttachment: 'fixed',
      height: '100vh',
    }}>
      <div className="content">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
          <div className="row">
            <div style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <h2>ADMIN LOGIN</h2>
            </div>
            <br/>
            <br/>
            <br/>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email" style={{ color: 'white' }}>Email:</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="password" style={{ color: 'white' }}>Password:</label>
                <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
              </div>
              <Button variant="primary" style={{ width: '100%' }} type="submit">Login</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
