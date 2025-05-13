
import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function AdminViewUser() {
  const [user, setUser] = useState({

    name: '',
    email: '',
     password: '',
     phone: '',
     dob: '',
     address: '',
    documentType: '',
   documentDetails: '',
     registrationDate: ''
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/identifier/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id :   {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  <br />
                  { user.name}
                </li>
              
                <li className="list-group-item">
                  <b>Email:</b>
                  <br />
                  {user.email}
                </li>
                <li className="list-group-item">
                  <b>Password:</b>
                  <br />
                  {user.password}
                </li>
                <li className="list-group-item">
                  <b>Phone:</b>
                  <br />
                  {user.phone}
                </li>
                <li className="list-group-item">
                  <b>Date Of Birth:</b>
                  <br />
                  {user.dob}
                </li>
                <li className="list-group-item">
                  <b>Address:</b>
                  <br />
                  {user.address}
                </li>
                <li className="list-group-item">
                  <b>Document Type:</b>
                  <br />
                  {user.documentType}
                </li>
                <li className="list-group-item">
                  <b>Document Details:</b>
                  <br />
                  {user.documentDetails}
                </li>
                <li className="list-group-item">
                  <b>Registration Date:</b>
                  <br />
                  {user.registrationDate}
                </li>

              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/AdminFetchUserData"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
