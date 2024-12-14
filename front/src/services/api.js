const BASE_URL = 'http://127.0.0.1:5000/api';

export const api = async (endpoint, method = 'GET', body = null, headers = {}) => {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : null,
    };

    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('API error:', error.message);
    throw error; // Rethrow to propagate error
  }
};


// Add specific HTTP methods for convenience
api.get = (endpoint, headers = {}) => api(endpoint, 'GET', null, headers);