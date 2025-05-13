

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function AdminViewQFIRdata() {
  const [quickFIR, setQuickFIR] = useState({
    id: '',
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

  const { id } = useParams();

  useEffect(() => {
    loadQuickFIR();
  }, []);



  const loadQuickFIR = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/quickfirdata/identifier/${id}`);
      console.log('Quick FIR Data:', result.data); //  to log the data
      setQuickFIR(result.data);
    } catch (error) {
      console.error('Error loading Quick FIR:', error);
    }
  };
  


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Quick FIR Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Quick FIR id : {quickFIR.id}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Name:</b>
                <br />
                {quickFIR.name}
              </li>
              <li className="list-group-item">
                <b>Emergency Contact:</b>
                <br />
                {quickFIR.emergencyContact}
              </li>
              <li className="list-group-item">
                <b>Category:</b>
                <br />
                {quickFIR.category}
              </li>
              <li className="list-group-item">
                <b>Description:</b>
                <br />
                {quickFIR.description}
              </li>
              <li className="list-group-item">
                <b>When Occurred Date:</b>
                <br />
                {quickFIR.whenOccurredDate}
              </li>
              <li className="list-group-item">
                <b>When Occurred Time:</b>
                <br />
                {quickFIR.whenOccurredTime}
              </li>
              <li className="list-group-item">
                <b>Where Occurred State:</b>
                <br />
                {quickFIR.whereOccurredState}
              </li>
              <li className="list-group-item">
                <b>Where Occurred City:</b>
                <br />
                {quickFIR.whereOccurredCity}
              </li>
              <li className="list-group-item">
                <b>Landmark:</b>
                <br />
                {quickFIR.landmark}
              </li>
              <li className="list-group-item">
                <b>FIR Report Date:</b>
                <br />
                {quickFIR.firReportDate}
              </li>
              <li className="list-group-item">
                <b>FIR Status:</b>
                <br />
                {quickFIR.firStatus}
              </li>
            </ul>
          
         
          </div>
          <Link className="btn btn-primary my-2" to={"/AdminFetchQFIRData"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

