// import React, { useState } from 'react';
// import { createContent, linkContent, updateVersion, rateContent } from '../api/content';

// const ContentForm = ({ onContentUpdate }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     category: '',
//     tags: '',
//     version: 1,
//     linkedId: '',
//     rating: 0,
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const newContent = await createContent({
//         ...formData,
//         tags: formData.tags.split(',').map((tag) => tag.trim()),
//       });
//       onContentUpdate(newContent);
//       setFormData({ title: '', category: '', tags: '', version: 1, linkedId: '', rating: 0 });
//     } catch (error) {
//       console.error('Error creating content:', error);
//     }
//   };

//   const handleLinkContent = async () => {
//     try {
//       await linkContent(formData.id, formData.linkedId);
//       alert('Content linked successfully');
//     } catch (error) {
//       console.error('Error linking content:', error);
//     }
//   };

//   const handleUpdateVersion = async () => {
//     try {
//       await updateVersion(formData.id, formData.version);
//       alert('Version updated successfully');
//     } catch (error) {
//       console.error('Error updating version:', error);
//     }
//   };

//   const handleRateContent = async () => {
//     try {
//       await rateContent(formData.id, formData.rating);
//       alert('Rating added successfully');
//     } catch (error) {
//       console.error('Error adding rating:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Manage Content</h2>
//       <label>
//         Title:
//         <input
//           type="text"
//           value={formData.title}
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//         />
//       </label>
//       <label>
//         Category:
//         <input
//           type="text"
//           value={formData.category}
//           onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//         />
//       </label>
//       <label>
//         Tags (comma-separated):
//         <input
//           type="text"
//           value={formData.tags}
//           onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
//         />
//       </label>
//       <button type="submit">Add Content</button>

//       <h3>Link Content</h3>
//       <label>
//         Content ID:
//         <input
//           type="text"
//           value={formData.id}
//           onChange={(e) => setFormData({ ...formData, id: e.target.value })}
//         />
//       </label>
//       <label>
//         Linked Content ID:
//         <input
//           type="text"
//           value={formData.linkedId}
//           onChange={(e) => setFormData({ ...formData, linkedId: e.target.value })}
//         />
//       </label>
//       <button type="button" onClick={handleLinkContent}>
//         Link Content
//       </button>

//       <h3>Update Version</h3>
//       <label>
//         New Version:
//         <input
//           type="number"
//           value={formData.version}
//           onChange={(e) => setFormData({ ...formData, version: e.target.value })}
//         />
//       </label>
//       <button type="button" onClick={handleUpdateVersion}>
//         Update Version
//       </button>

//       <h3>Add Rating</h3>
//       <label>
//         Rating (1-5):
//         <input
//           type="number"
//           value={formData.rating}
//           onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
//         />
//       </label>
//       <button type="button" onClick={handleRateContent}>
//         Add Rating
//       </button>
//     </form>
//   );
// };

// export default ContentForm;



import React, { useState } from 'react';
import { createContent } from '../services/content';
import './styles/ContentForm.css';

const ContentForm = ({ onContentUpdate }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    tags: '',
    reminder: '',
    links: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const tagsArray = formData.tags.split(',').map((tag) => tag.trim());
      const linksArray = formData.links.split(',').map((link) => link.trim());
      const newContent = await createContent({
        ...formData,
        tags: tagsArray,
        links: linksArray,
      });
      setSuccess('Content added successfully!');
      setError(null);
      onContentUpdate(newContent);
      setFormData({
        title: '',
        description: '',
        category: '',
        tags: '',
        reminder: '',
        links: '',
      });
    } catch (err) {
      setError('Failed to add content.');
      setSuccess(null);
    }
  };

  return (
    <div className="content-form-container">
      <h2>Add New Content</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        ></textarea>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
        />
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="Tags (comma-separated)"
        />
        <input
          type="datetime-local"
          name="reminder"
          value={formData.reminder}
          onChange={handleChange}
          placeholder="Set a reminder"
        />
        <input
          type="text"
          name="links"
          value={formData.links}
          onChange={handleChange}
          placeholder="Links to other content (comma-separated)"
        />
        <button type="submit">Add Content</button>
      </form>
    </div>
  );
};

export default ContentForm;
