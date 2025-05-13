import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function AdminEditQFIR() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [quickFIR, setQuickFIR] = useState({
    name: '',
    emergencyContact: '',
    category: '',
    description: '',
    whenOccurredDate: '',
    whenOccurredTime: '',
    whereOccurredState: '',
    whereOccurredCity: '',
    landmark: '',
    firReportDate: '',
    firStatus: ''
  });

  const { name, emergencyContact, category, description, whenOccurredDate, whenOccurredTime, whereOccurredState, whereOccurredCity, landmark, firReportDate, firStatus } = quickFIR;

  const onInputChange = (e) => {
    setQuickFIR({ ...quickFIR, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadQuickFIR();
  }, []);

  const loadQuickFIR = async () => {
    const result = await axios.get(`http://localhost:8080/quickfirdata/identifier/${id}`);
    setQuickFIR(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/quickfirdata/identifier/${id}`, quickFIR);
    navigate("/AdminFetchQFIRData");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Quick FIR</h2>

          <form onSubmit={(e) => onSubmit(e)}>
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
              <label htmlFor="When Occurred Date" className="form-label">
                When Occurred Date
              </label>
              <input
                type="date"
                className="form-control"
                name="whenOccurredDate"
                value={whenOccurredDate}
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
              <label htmlFor="Where Occurred State" className="form-label">
                Where Occurred State
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter state"
                name="whereOccurredState"
                value={whereOccurredState}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Where Occurred City" className="form-label">
                Where Occurred City
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter city"
                name="whereOccurredCity"
                value={whereOccurredCity}
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
            <Link className="btn btn-outline-danger mx-2" to="/AdminFetchQFIRData">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminEditQFIR;
