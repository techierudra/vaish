

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Title from '../components/Title';
import AdminNavbar from '../components/AdminNavbar';
import Table from 'react-bootstrap/Table';

function formatDateTime(dateTimeString) {
  const dateTime = new Date(dateTimeString);
  const formattedDate = dateTime.toISOString().slice(0, 10); // Get date in yyyy-mm-dd format
  const formattedTime = dateTime.toTimeString().slice(0, 8); // Get time in HH:mm:ss format
  return `${formattedDate} ${formattedTime}`;
}

function AdminFetchUserData() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/identifier/${id}`);
    loadUsers();
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
      <Title />
      <AdminNavbar />
      <h3 style={{ color: 'white', textAlign: 'center' }}>USER DATA</h3>
      <div className="py-4">
        <Table className="table border shadow" striped bordered hover responsive>
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Phone</th>
              <th scope="col">DOB</th>
              <th scope="col">Address</th>
              <th scope="col">Document Type</th>
              <th scope="col">Document Details</th>
              <th scope="col">Registration Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.phone}</td>
                <td>{user.dob}</td>
                <td>{user.address}</td>
                <td>{user.documentType}</td>
                <td>{user.documentDetails}</td>
                <td>{formatDateTime(user.registrationDate)}</td> {/* Display formatted registration date and time */}
                <td>
                  <Link className="btn btn-primary btn-sm mx-1" to={`/AdminViewUser/identifier/${user.id}`}>
                    View
                  </Link>
                  <Link className="btn btn-outline-primary btn-sm mx-1" to={`/AdminEditUser/identifier/${user.id}`}>
                    Edit
                  </Link>
                  <button className="btn btn-danger btn-sm mx-1" onClick={() => deleteUser(user.id)}>
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

export default AdminFetchUserData;
