import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Welcomeimage from './images/welcomeimage.jpg';



function Welcome() {
  const navigate = useNavigate();

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <h1 style={{ fontWeight: 'bold' }}> Welcome to the Personal Knowledge Management System</h1>
        <p style={{ fontWeight: 'bold' }}>Organize and retrieve your personal knowledge effortlessly!</p>
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => navigate('/login')} style={buttonStyle}>
            Login
          </button>
          <button onClick={() => navigate('/register')} style={buttonStyle}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  position: 'relative',
  height: '100vh',
  // backgroundImage: `url(${Welcomeimage})`, // Replace with your image path
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#003f5e', // Optional: for better contrast on text
};

const overlayStyle = {
  backgroundColor: 'rgba(173, 216, 230, 0.5)',// Semi-transparent dark overlay
  padding: '30px',
  borderRadius: '10px',
  textAlign: 'center',
};

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
  backgroundColor: '#fe9b00',//'#00aade',//'#003280',//'#4CAF50',
  color: '#003f5e',
  border: 'none',
};

export default Welcome;
