
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getUserLogin } from "../services/api";
import Title from "../components/Title";
import Navbar from "../components/Navbar";

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const usegetUserRecord = async () => {
    try {
      const response = await getUserLogin(user.email);
      const { email, password, name } = response.data;

      if (email === user.email && password === user.password) {
        localStorage.setItem("data1", email);
        localStorage.setItem("data2", name);
        navigate("/AfterLogin");
      } else {
        const div = document.getElementById('fail');
        div.innerHTML = "Wrong password! Please check your password and email id";
      }
    } catch (error) {
      console.error("Error logging in:", error);
      const div = document.getElementById('fail');
      div.innerHTML = "An error occurred. Please try again.";
    }
  }

  return (
    <div className="background-image"
      style={{
        backgroundImage: `url(${require('../images/11.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        height: '100vh',
      }}
    >
      <Title/>
      <Navbar/>
      <div className="content">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
          <div className="row">
            <div className="row">
              <div style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <h2>LOGIN</h2></div>
              <br />
              <br />
              <br />
              <Form style={{ color: 'white' }}>
                <div className="form-group">
                  <span id="fail" style={{ color: 'red', justifyContent: 'center', alignItems: 'center' }}></span>
                  <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="email" value={user.email} placeholder="Enter your email" onChange={onValueChange} required />
                  </Form.Group>
                </div>
                <div className="form-group">
                  <Form.Group controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" name="password" value={user.password} placeholder="Enter your password" onChange={onValueChange} />
                  </Form.Group>
                </div>
                <br />
                <Button variant='primary' style={{ width: '100%' }} type="button" onClick={usegetUserRecord}>Login</Button>
                <br />
                <p> <br /><a href="registration" style={{ color: 'white' }}>New User? Create New Account</a></p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
