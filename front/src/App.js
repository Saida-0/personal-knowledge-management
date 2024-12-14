// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Welcome from './components/welcome';
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Dashboard from "./components/Dashboard";
// import './app.css';


// function App () {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Welcome />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/login " element={<Login />} />
                
//                 <Route path="/dashboard" element={<Dashboard />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Dashboard from './components/Dashboard';
import './app.css';


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;
