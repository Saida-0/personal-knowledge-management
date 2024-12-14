// export const updateProfile = async (userId, profilePicture) => {
//     const formData = new FormData();
//     formData.append('userId', userId);
//     formData.append('profilePicture', profilePicture);
  
//     const response = await fetch('http://127.0.0.1:5000/api/user/profile', {
//       method: 'POST',
//       body: formData,
//     });
//     return response.json();
//   };
  
//   export const fetchProfile = async (userId) => {
//     const response = await fetch(`http://127.0.0.1:5000/api/user/profile/${userId}`);
//     return response.json();
//   };
  

import { api } from './api';

export const fetchProfile = (userId) => api(`/user/profile/${userId}`);

export const updateProfile = async (userId, profilePicture) => {
  const formData = new FormData();
  formData.append('userId', userId);
  formData.append('profilePicture', profilePicture);

  const response = await fetch(`${BASE_URL}/user/profile`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Error updating profile: ${response.statusText}`);
  }

  return response.json();
};
