

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function AdminViewFFIRdata() {
  const [fileFIR, setFileFIR] = useState({
    id: '',
    email: '',
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

  const { id } = useParams();

  useEffect(() => {
    loadFileFIR();
  }, []);



  const loadFileFIR = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/filefirdata/${id}`);
      console.log('FILE FIR Data:', result.data); //  to log the data
      setFileFIR(result.data);
    } catch (error) {
      console.error('Error loading File FIR:', error);
    }
  };
  


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Regular FIR Details</h2>

          <div className="card">
            <div className="card-header">
              Details of File FIR id : {fileFIR.id}
            </div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <b>Email:</b>
                <br />
                {fileFIR.email}
              </li>
              <li className="list-group-item">
                <b>Name:</b>
                <br />
                {fileFIR.name}
              </li>
              <li className="list-group-item">
                <b>Emergency Contact:</b>
                <br />
                {fileFIR.emergencyContact}
              </li>
              <li className="list-group-item">
                <b>Category:</b>
                <br />
                {fileFIR.category}
              </li>
              <li className="list-group-item">
                <b>Description:</b>
                <br />
                {fileFIR.description}
              </li>
              <li className="list-group-item">
                <b>When Occurred Date:</b>
                <br />
                {fileFIR.date}
              </li>
              <li className="list-group-item">
                <b>When Occurred Time:</b>
                <br />
                {fileFIR.whenOccurredTime}
              </li>
              <li className="list-group-item">
                <b>Location State:</b>
                <br />
                {fileFIR.locationState}
              </li>
              <li className="list-group-item">
                <b>Location City:</b>
                <br />
                {fileFIR.locationCity}
              </li>
              <li className="list-group-item">
                <b>Landmark:</b>
                <br />
                {fileFIR.landmark}
              </li>
              <li className="list-group-item">
                <b>FIR Report Date:</b>
                <br />
                {fileFIR.firReportDate}
              </li>
              <li className="list-group-item">
                <b>FIR Status:</b>
                <br />
                {fileFIR.firStatus}
              </li>
            </ul>
          
         
          </div>
          <Link className="btn btn-primary my-2" to={"/AdminHomepage"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

