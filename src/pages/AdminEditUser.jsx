import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function AdminEditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

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

  const { name, email,password,phone ,dob,address,documentType,documentDetails,registrationDate} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/identifier/${id}`, user);
    navigate("/AdminFetchUserData");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/identifier/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
           
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Phone" className="form-label">
              Phone
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your phone"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Date of Birth" className="form-label">
                Date of Birth
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your dob"
                name="dob"
                value={dob}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor=" Document Type" className="form-label">
                Document Type
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your documentType"
                name="documentType"
                value={documentType}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Document Details" className="form-label">
                Document Details
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your documentDetails"
                name="documentDetails"
                value={documentDetails}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="Registration Date" className="form-label">
                Registration Date
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="registrationDate"
                value={registrationDate}
                onChange={(e) => onInputChange(e)}
              />
            </div> */}

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/AdminFetchUserData">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
