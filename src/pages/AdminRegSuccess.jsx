

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function AdminRegSuccess() {
  return(
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
      <Alert variant="success" style={{ width: '800px', padding: '20px', textAlign: 'left ' }}>
      <h2>Registration Successful</h2>
            <p>Your registration was successful. You can now login to your account.</p> 
      
        <p className="mb-0">
          <Link to="/AdminHomepage">   
            <Button>Go Home</Button>
          </Link>
        </p>
      </Alert>
    </div>
  );

  
    
}

export default AdminRegSuccess;
