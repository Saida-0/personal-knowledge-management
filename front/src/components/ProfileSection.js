import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/ProfileSection.css';

const ProfileSection = () => {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get('http://127.0.0.1:5000/api/user/profile', {
        params: { user_id: 1}, // Replace with the actual user ID
      });
      setUser(response.data);
      setUsername(response.data.username);
      setEmail(response.data.email);
    };
    fetchProfile();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user_id', 1); // Replace with the actual user ID
    formData.append('username', username);
    formData.append('email', email);
    if (profilePicture) {
      formData.append('profile_picture', profilePicture);
    }

    const response = await axios.post('http://127.0.0.1:5000/api/user/profile', formData);
    alert(response.data.message);
    setUser({ ...user, username, email, profile_picture: response.data.profile_picture });
  };

  return (
    <div className="profile-section">
      <h2>Profile</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Profile Picture:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
      {user.profile_picture && (
        <img
          src={`http://127.0.0.1:5000${user.profile_picture}`}
          alt="Profile"
          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        />
      )}
    </div>
  );
};

export default ProfileSection;
