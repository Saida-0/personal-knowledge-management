import React, { useState, useEffect } from "react";
//import api from "../services/api";
import { api } from '../services/api';


const ContentList = ({ onEdit }) => {
  const [contentList, setContentList] = useState([]);

  const fetchContent = async () => {
    const response = await api.get("/content");
    setContentList(response.data);
  };

  const handleDelete = async (contentId) => {
    if (window.confirm("Are you sure you want to delete this content?")) {
      await api.delete(`/content/${contentId}`);
      fetchContent();
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <div>
      <h2>Your Content</h2>
      <ul>
        {contentList.map((content) => (
          <li key={content.content_id}>
            <h3>{content.title}</h3>
            <p>{content.summary || content.content_text.substring(0, 100)}...</p>
            <button onClick={() => onEdit(content.content_id)}>Edit</button>
            <button onClick={() => handleDelete(content.content_id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentList;
