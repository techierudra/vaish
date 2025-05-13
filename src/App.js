
import React from 'react';

import Home from './pages/Home';
import Registration from './pages/Registration';
import { Route,  Routes}  from  "react-router-dom";
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import QuickFIR from './pages/Quickfir';
import 'bootstrap/dist/css/bootstrap.min.css';
import OurMission from './pages/OurMission';
import FAQ from './pages/FAQ';
import Theft from './pages/Theft';
import Assault from './pages/Assault';
import Fraud from './pages/fraud';
import DrugRelatedCrimes from './pages/DrugRelatedCrimes'
import Vandalism from './pages/Vandalism';
import RegSuccess from './pages/RegSuccess';
import AfterLogin from './pages/AfterLogin';
import FileFIR from './pages/FileFIR';
import MyComplaints from './pages/MyComplaints';
import RegFailed from './pages/RegFailed';
import QFIRFailed from './pages/QFIRFailed';
import QFIRSuccess from './pages/QFIRSuccess';
import FIRSuccess from './pages/FIRSuccess';
import FIRFailed from './pages/FIRFailed';
import AdminLogin from './pages/AdminLogin';
import AdminHomepage from './pages/AdminHomepage';
import AdminFetchUserData from './pages/AdminFetchUserData';
import AdminFetchQFIRData from './pages/AdminFetchQFIRData';
import AddAdmin from './pages/AddAdmin';
import AdminRegSuccess from './pages/AdminRegSuccess';
import AdminRegFailed from './pages/AdminRegFailed';
import AdminViewUser from './pages/AdminViewUser';
import AdminEditUser from './pages/AdminEditUser';
// import FetchUserComplaints from './pages/fetchusercomplaints';

import AdminEditQFIR from './pages/AdminEditQFIR';
import AdminViewQFIRdata from './pages/AdminViewQFIRdata';

import AdminEditFFIR from './pages/AdminEditFFIR';
import AdminViewFFIRdata from './pages/AdminViewFFIRdata';

const App = () => {


  return (

    <div>
     
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/QuickFIR" element={<QuickFIR />} />
        <Route path="/OurMission" element={<OurMission />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Theft" element={<Theft />} />
        <Route path="/Assault" element={<Assault />} />
        <Route path="/Fraud" element={<Fraud />} />
        <Route path="/DrugRelatedCrimes" element={<DrugRelatedCrimes />} />
        <Route path="/Vandalism" element={<Vandalism />} />
        <Route path="/RegSuccess" element={<RegSuccess />} />
        <Route path="/RegFailed" element={<RegFailed />} />
        <Route path="/AfterLogin" element={<AfterLogin />} />
        <Route path="/FileFIR" element={<FileFIR />} />
        <Route path="/MyComplaints" element={<MyComplaints />} />
        <Route path="/QFIRFailed" element={<QFIRFailed />} />
        <Route path="/QFIRSuccess" element={<QFIRSuccess />} />
        <Route path="/FIRSuccess" element={<FIRSuccess />} />
        <Route path="/FIRFailed" element={<FIRFailed />} />
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
        <Route path="/AdminHomepage" element={<AdminHomepage/>}/>
        <Route path="/AdminFetchUserData" element={<AdminFetchUserData/>}/>
        <Route path="/AdminFetchQFIRData" element={<AdminFetchQFIRData/>}/>
        <Route path="/AddAdmin" element={<AddAdmin/>}/>
        <Route path="/AdminRegSuccess" element={<AdminRegSuccess/>}/>
        <Route path="/AdminRegFailed" element={<AdminRegFailed/>}/>
        <Route path="/AdminViewUser/identifier/:id" element={<AdminViewUser/>}/>
        <Route path="/AdminEditUser/identifier/:id" element={<AdminEditUser/>}/>
        <Route path="/AdminViewQFIRdata/identifier/:id" element={<AdminViewQFIRdata/>}/>
        <Route path="/AdminEditQFIR/identifier/:id" element={<AdminEditQFIR/>}/>
        <Route path="/AdminViewFFIRdata/identifier/:id" element={<AdminViewFFIRdata/>}/>
        <Route path="/AdminEditFFIR/identifier/:id" element={<AdminEditFFIR/>}/>
        <Route path="/" element= {<Home/>}/>
       
      </Routes>
    </div> 
  );
};

export default App;


