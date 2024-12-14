// export const register = async (userData) => {
//   const response = await fetch('http://127.0.0.1:5000/api/auth/register', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData),
//   });
//   return response.json();
// };

// export const login = async (userData) => {
//   const response = await fetch('http://127.0.0.1:5000/api/auth/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData),
//   });
//   return response.json();
// };


import { api } from './api';

export const register = (userData) => api('/auth/register', 'POST', userData);

export const login = (userData) => api('/auth/login', 'POST', userData);
