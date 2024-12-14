// import React, { useState } from 'react';
// import { login } from '../api/auth';
// import './Auth.css';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     const response = await login({ email, password });
//     if (response.message) {
//       alert('Login successful');
//       window.location.href = '/dashboard';
//     } else {
//       alert(response.error);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h1 className="auth-title">Login</h1>
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
//       <button className="auth-button" onClick={handleLogin}>
//         Login
//       </button>
//       <p className="auth-link">
//         Don't have an account? <a href="/register">Register</a>
//       </p>
//     </div>
//   );
// };

//export default LoginPage;


import React, { useState } from 'react';
import { login } from '../services/auth';
import './Auth.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await login({ email, password });
    if (response.message) {
      alert('Login successful');
      window.location.href = '/dashboard';
    } else {
      alert(response.error);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">Please login to continue</p>
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
        <button className="auth-button" onClick={handleLogin}>
          Login
        </button>
        <p className="auth-link">
          Don’t have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

