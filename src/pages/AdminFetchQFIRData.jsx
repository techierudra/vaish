



import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Title from '../components/Title';
import AdminNavbar from '../components/AdminNavbar';
import '../css/AdminFetchQFIRData.css'; // Import CSS file for styling

function formatDateTime(dateTimeString) {
  const dateTime = new Date(dateTimeString);
  const formattedDate = dateTime.toISOString().slice(0, 10); // Get date in yyyy-mm-dd format
  const formattedTime = dateTime.toTimeString().slice(0, 8); // Get time in HH:mm:ss format
  return `${formattedDate} ${formattedTime}`;
}

function AdminFetchQFIRData() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quickFIRs, setQuickFIRs] = useState([]);

  useEffect(() => {
    loadQuickFIRs();
  }, []);

  const loadQuickFIRs = async () => {
    try {
      const response = await axios.get("http://localhost:8080/quickfirdata");
      setQuickFIRs(response.data);
    } catch (error) {
      console.error('Error fetching quick FIR data:', error);
    }
  };

  const deleteQuickFIR = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/quickfirdata/identifier/${id}`);
      loadQuickFIRs();
    } catch (error) {
      console.error('Error deleting quick FIR data:', error);
    }
  };

  return (
    <div className="background-image"
         style={{
           backgroundImage: `url(${require('../images/17.jpg')})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center center',
           backgroundAttachment: 'fixed',
           height: '100vh',
         }}
    >
      <Title/>
      <AdminNavbar />
      <h3 style={{ color: 'white', textAlign: 'center' }}>QUICK FIR DATA</h3>
      <div className="py-4 ">
        <Table className="table border shadow" striped bordered hover responsive>
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Emergency Contact</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Incident Date</th>
              <th scope="col">Incident Time</th>
              <th scope="col">State</th>
              <th scope="col"> City</th>
              <th scope="col">Landmark</th>
              <th scope="col">FIR Report Date</th>
              <th scope="col">FIR Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {quickFIRs.map((quickFIR, index) => (
              <tr key={quickFIR.id}>
                <th scope="row">{index + 1}</th>
                <td>{quickFIR.name}</td>
                <td>{quickFIR.emergencyContact}</td>
                <td>{quickFIR.category}</td>
                <td>{quickFIR.description}</td>
                <td>{quickFIR.whenOccurredDate}</td>
                <td>{quickFIR.whenOccurredTime}</td>
                <td>{quickFIR.whereOccurredState}</td>
                <td>{quickFIR.whereOccurredCity}</td>
                <td>{quickFIR.landmark}</td>
                <td>{formatDateTime(quickFIR.firReportDate)}</td> {/* Display formatted FIR report date and time */}
                <td>{quickFIR.firStatus}</td>
                <td>
                  <Link
                    className="btn btn-primary btn-sm mx-1" // Use btn-sm for smaller primary button
                    to={`/AdminViewQFIRdata/identifier/${quickFIR.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary btn-sm mx-1" // Use btn-sm for smaller outline button
                    to={`/AdminEditQFIR/identifier/${quickFIR.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm mx-1" // Use btn-sm for smaller danger button
                    onClick={() => deleteQuickFIR(quickFIR.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <footer style={{ height:'35px', position: 'fixed', left: '0', bottom: '0', width: '100%', backgroundColor: 'rgba(13, 2, 2, 1)', color: 'white', textAlign: 'center', padding: '10px' }}>
        <p>&copy; 2024 E-Crime Report Hub</p>
      </footer>
      </div>
    </div>
  );
}

export default AdminFetchQFIRData;
