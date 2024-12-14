// export const fetchContents = async () => {
//   const response = await fetch('http://127.0.0.1:5000/api/content', {
//     method: 'GET',
//   });
//   if (!response.ok) {
//     throw new Error(`Error fetching contents: ${response.statusText}`);
//   }
//   return response.json();
// };

// export const createContent = async (contentData) => {
//   const response = await fetch('http://127.0.0.1:5000/api/content', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(contentData),
//   });
//   if (!response.ok) {
//     throw new Error(`Error creating content: ${response.statusText}`);
//   }
//   return response.json();
// };

// export const linkContent = async (contentId, linkedId) => {
//   const response = await fetch(`http://127.0.0.1:5000/api/content/${contentId}/link`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ linkedId }),
//   });
//   if (!response.ok) {
//     throw new Error(`Error linking content: ${response.statusText}`);
//   }
//   return response.json();
// };

// export const updateVersion = async (contentId, newVersion) => {
//   const response = await fetch(`http://127.0.0.1:5000/api/content/${contentId}/version`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ version: newVersion }),
//   });
//   if (!response.ok) {
//     throw new Error(`Error updating version: ${response.statusText}`);
//   }
//   return response.json();
// };

// export const rateContent = async (contentId, rating) => {
//   const response = await fetch(`http://127.0.0.1:5000/api/content/${contentId}/rate`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ rating }),
//   });
//   if (!response.ok) {
//     throw new Error(`Error rating content: ${response.statusText}`);
//   }
//   return response.json();
// };



// import { api } from './api';

// export const fetchContents = () => api('/content');

// export const createContent = (contentData) => api('/content', 'POST', contentData);

// export const linkContent = (contentId, linkedId) => 
//   api(`/content/${contentId}/link`, 'POST', { linkedId });

// export const updateVersion = (contentId, newVersion) =>
//   api(`/content/${contentId}/version`, 'PUT', { version: newVersion });

// export const rateContent = (contentId, rating) =>
//   api(`/content/${contentId}/rate`, 'POST', { rating });


import { api } from './api';

//export const fetchContents = () => api('/content', 'GET'); // Explicitly define the 'GET' method
// const fetchContent = async () => {
//   try {
//     const response = await api.get('/content'); // Use api.get
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching content:', error);
//   }
// };
export const fetchContent = async () => {
  try {
    const data = await api('/content', 'GET');
    console.log('Fetched content:', data);
    return data;
  } catch (error) {
    console.error('Failed to fetch content:', error.message);
    throw error;
  }
};



export const createContent = (contentData) => api('/content', 'POST', contentData);

export const linkContent = (contentId, linkedId) => 
  api(`/content/${contentId}/link`, 'POST', { linkedId });

export const updateVersion = (contentId, newVersion) =>
  api(`/content/${contentId}/version`, 'PUT', { version: newVersion });

export const rateContent = (contentId, rating) =>
  api(`/content/${contentId}/rate`, 'POST', { rating });
