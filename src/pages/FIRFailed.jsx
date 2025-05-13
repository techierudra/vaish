import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function FIRFailed() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = () => {
      navigate('/AfterLogin');
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [navigate]);

    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
          <Alert variant="danger" style={{ width: '800px', padding: '20px', textAlign: 'left ' }}>
          <h2>FIR Unsuccessful </h2>
                <p>Unable to file FIR.</p> 
          
            <p className="mb-0">
              <Link to="/afterLogin">   
                <Button> Go Home</Button>
              </Link>
            </p>
          </Alert>
        </div>
      );

  
    
}

export default FIRFailed;
