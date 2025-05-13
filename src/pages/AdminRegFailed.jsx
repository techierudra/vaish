

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function AdminRegFailed() {
  return(
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
    <Alert variant="danger" style={{ width: '800px', padding: '20px', textAlign: 'left ' }}>
    <h2>Registration Failed</h2>
          <p>Your registration was Unsuccessful.</p> 
    
      <p className="mb-0">
        <Link to="/AdminHomepage">   
          <Button>Go Home</Button>
        </Link>
      </p>
    </Alert>
  </div>
  );

  
    
}

export default AdminRegFailed;
