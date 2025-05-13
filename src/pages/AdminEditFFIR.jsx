import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function AdminEditFFIR() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [fileFIR, setFileFIR] = useState({
    email:'',
    name: '',
    emergencyContact: '',
    category: '',
    description: '',
    date: '',
    whenOccurredTime: '',
    locationState: '',
    locationCity: '',
    landmark: '',
    firReportDate: '',
    firStatus: ''
  });

  const { email, name, emergencyContact, category, description, date, whenOccurredTime, locationState, locationCity, landmark, firReportDate, firStatus } = fileFIR;

  const onInputChange = (e) => {
    setFileFIR({ ...fileFIR, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadFileFIR();
  }, []);

  const loadFileFIR = async () => {
    const result = await axios.get(`http://localhost:8080/filefirdata/${id}`);
    setFileFIR(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/filefirdata/identifier/${id}`, fileFIR);
    navigate("/AdminHomepage");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit FILE FIR</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Emergency Contact" className="form-label">
                Emergency Contact
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter emergency contact"
                name="emergencyContact"
                value={emergencyContact}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Category" className="form-label">
                Category
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter category"
                name="category"
                value={category}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                placeholder="Enter description"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="Date" className="form-label">
                When Occurred Date
              </label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={date}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="When Occurred Time" className="form-label">
                When Occurred Time
              </label>
              <input
                type="time"
                className="form-control"
                name="whenOccurredTime"
                value={whenOccurredTime}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Location State" className="form-label">
                Location State
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter state"
                name="locationState"
                value={locationState}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Location City" className="form-label">
                Location City
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter city"
                name="locationCity"
                value={locationCity}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Landmark" className="form-label">
                Landmark
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter landmark"
                name="landmark"
                value={landmark}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="FIR Report Date" className="form-label">
                FIR Report Date
              </label>
              <input
                type="date"
                className="form-control"
                name="firReportDate"
                value={firReportDate}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="FIR Status" className="form-label">
                FIR Status
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter FIR status"
                name="firStatus"
                value={firStatus}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/AdminHomepage">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminEditFFIR;
