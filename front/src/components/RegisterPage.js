// import React, { useState } from 'react';
// import { register } from '../api/auth';
// import './Auth.css';

// const RegisterPage = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = async () => {
//     const response = await register({ username, email, password });
//     if (response.message) {
//       alert('Registration successful');
//       window.location.href = '/login';
//     } else {
//       alert(response.error);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h1 className="auth-title">Register</h1>
//       <input
//         type="text"
//         placeholder="Username"
//         className="auth-input"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         className="auth-input"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         className="auth-input"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button className="auth-button" onClick={handleRegister}>
//         Register
//       </button>
//       <p className="auth-link">
//         Already have an account? <a href="/login">Login</a>
//       </p>
//     </div>
//   );
// };

// export default RegisterPage;



import React, { useState } from 'react';
// import { register } from '../api/auth';
import { register } from '../services/auth';
import './Auth.css';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const response = await register({ username, email, password });
    if (response.message) {
      alert('Registration successful');
      window.location.href = '/login';
    } else {
      alert(response.error);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">Join us and manage your knowledge effortlessly</p>
        <input
          type="text"
          placeholder="Username"
          className="auth-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="auth-button" onClick={handleRegister}>
          Register
        </button>
        <p className="auth-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

