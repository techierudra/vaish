



import Title from '../components/Title';
import  Navbar  from '../components/Navbar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function formatDateTime(dateTimeString) {
  const dateTime = new Date(dateTimeString);
  const year = dateTime.getFullYear();
  const month = ('0' + (dateTime.getMonth() + 1)).slice(-2); // Adding leading zero if needed
  const day = ('0' + dateTime.getDate()).slice(-2); // Adding leading zero if needed
  const hours = ('0' + dateTime.getHours()).slice(-2); // Adding leading zero if needed
  const minutes = ('0' + dateTime.getMinutes()).slice(-2); // Adding leading zero if needed
  const seconds = ('0' + dateTime.getSeconds()).slice(-2); // Adding leading zero if needed
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function MyComplaint() {
  const [userComplaints, setUserComplaints] = useState([]);

  useEffect(() => {
    const fetchUserComplaints = async () => {
      try {
        const email = localStorage.getItem('data1');
        if (!email) {
          console.error('Email not found in local storage');
          return;
        }

        const response = await axios.get(`http://localhost:8080/filefirdata/email/${email}`);
        // Format FIR report date and time before setting user complaints
        const formattedComplaints = response.data.map(complaint => ({
          ...complaint,
          firReportDateTime: formatDateTime(complaint.firReportDate)
        }));
        setUserComplaints(formattedComplaints);
        console.log('User complaints:', formattedComplaints);
      } catch (error) {
        console.error('Error fetching user complaints:', error);
      }
    };

    fetchUserComplaints();
  }, []);

  return (
    <div
        className="background-image"
        style={{
          backgroundImage: `url(${require('../images/17.jpg')})`,
          backgroundSize: 'cover ',
        backgroundPosition:'center center',
        backgroundAttachment: 'fixed',
        height: '100vh',
        }}
      >
        <Title/>
        <Navbar/>
    <div>
       <h2 style={{color:'white', textAlign:'center'}}>USER COMPLAINTS</h2>
      {userComplaints.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Complaint ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Emergency Contact</th>
              <th>Category</th>
              <th>Description</th>
              <th>Date</th>
              <th>When Occurred Time</th>
              <th>Location State</th>
              <th>Location City</th>
              <th>Landmark</th>
              <th>FIR Report Date & Time</th>
              <th>FIR Status</th>
            </tr>
          </thead>
          <tbody>
            {userComplaints.map((complaint) => (
              <tr key={complaint.id}>
                <td>{complaint.id}</td>
                <td>{complaint.name}</td>
                <td>{complaint.email}</td>
                <td>{complaint.emergencyContact}</td>
                <td>{complaint.category}</td>
                <td>{complaint.description}</td>
                <td>{complaint.date}</td>
                <td>{complaint.whenOccurredTime}</td>
                <td>{complaint.locationState}</td>
                <td>{complaint.locationCity}</td>
                <td>{complaint.landmark}</td>
                <td>{complaint.firReportDateTime}</td> {/* Display formatted FIR report date and time */}
                <td>{complaint.firStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No complaints found for this email.</p>
      )}
      <footer style={{ height:'35px', position: 'fixed', left: '0', bottom: '0', width: '100%', backgroundColor: 'rgba(13, 2, 2, 1)', color: 'white', textAlign: 'center', padding: '10px' }}>
        <p>&copy; 2024 E-Crime Report Hub</p>
      </footer>
    </div>
    </div>
    
  );
}

export default MyComplaint;
