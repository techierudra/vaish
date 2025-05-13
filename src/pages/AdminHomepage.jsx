



import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Title from '../components/Title';
import AdminNavbar from '../components/AdminNavbar';

function formatDateAndTime(dateTimeString) {
  const dateTime = new Date(dateTimeString);
  const formattedDate = dateTime.toISOString().slice(0, 10); // Get date in yyyy-mm-dd format
  const formattedTime = dateTime.toTimeString().slice(0, 8); // Get time in HH:mm:ss format
  return { date: formattedDate, time: formattedTime };
}

function AdminHomepage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [fileFIRs, setFileFIRs] = useState([]);

  useEffect(() => {
    loadFileFIRs();
  }, []);

  const loadFileFIRs = async () => {
    const result = await axios.get("http://localhost:8080/filefirdata");
    setFileFIRs(result.data);
  };

  const deleteFileFIR = async (id) => {
    await axios.delete(`http://localhost:8080/filefirdata/identifier/${id}`);
    loadFileFIRs();
  };

  return (
    <div className="background-image" style={{
      backgroundImage: `url(${require('../images/17.jpg')})`,
      backgroundSize: 'cover ',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      height: '100vh',
    }}>
      <Title />
      <AdminNavbar />
      <h3 style={{ color: 'white', textAlign: 'center' }}>REGULAR FIR ENTRIES</h3>
      <div className="py-4">
        <Table className="table border shadow" striped bordered hover responsive>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Email</th>
              <th>Name</th>
              <th>Contact Ph</th>
              <th>Category</th>
              <th>Description</th>
              <th>Incident Date</th>
              <th>Incident Time</th>
              <th>State</th>
              <th>City</th>
              <th>Landmark</th>
              <th>FIR Report Date</th>
              <th>FIR Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fileFIRs.map((fileFIR, index) => {
              const { date, time } = formatDateAndTime(fileFIR.firReportDate);
              return (
                <tr key={fileFIR.id}>
                  <td>{index + 1}</td>
                  <td>{fileFIR.email}</td>
                  <td>{fileFIR.name}</td>
                  <td>{fileFIR.emergencyContact}</td>
                  <td>{fileFIR.category}</td>
                  <td>{fileFIR.description}</td>
                  <td>{fileFIR.date}</td>
                  <td>{fileFIR.whenOccurredTime}</td>
                  <td>{fileFIR.locationState}</td>
                  <td>{fileFIR.locationCity}</td>
                  <td>{fileFIR.landmark}</td>
                  <td>
                    <div>{date}</div>
                    <div>{time}</div>
                  </td>
                  <td>{fileFIR.firStatus}</td>
                  <td>
                    <Link className="btn btn-primary btn-sm mx-1" to={`/AdminViewFFIRdata/identifier/${fileFIR.id}`}>
                      View
                    </Link>
                    <Link className="btn btn-outline-primary btn-sm mx-1" to={`/AdminEditFFIR/identifier/${fileFIR.id}`}>
                      Edit
                    </Link>
                    <button className="btn btn-danger btn-sm mx-1" onClick={() => deleteFileFIR(fileFIR.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <footer style={{ height:'35px', position: 'fixed', left: '0', bottom: '0', width: '100%', backgroundColor: 'rgba(13, 2, 2, 1)', color: 'white', textAlign: 'center', padding: '10px' }}>
          <p>&copy; 2024 E-Crime Report Hub</p>
        </footer>
      </div>
    </div>
  );
}

export default AdminHomepage;
