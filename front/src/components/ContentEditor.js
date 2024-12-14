//This component allows users to create or edit a note.

import React, { useState } from "react";
import { api } from '../services/api';

const NoteEditor = ({ noteId = null, onSave }) => {
  const [title, setTitle] = useState("");
  const [contentText, setContentText] = useState("");

  const loadNote = async () => {
    if (noteId) {
      const response = await api.get(`/content/${noteId}`);
      const note = response.data;
      setTitle(note.title);
      setContentText(note.content_text);
    }
  };

  React.useEffect(() => {
    if (noteId) loadNote();
  }, [noteId]);

  const handleSave = async (e) => {
    e.preventDefault();
    const payload = { title, content_text: contentText, content_type: "note" };

    if (noteId) {
      await api.put(`/content/${noteId}`, payload);
    } else {
      await api.post("/content", payload);
    }

    onSave(); // Trigger any callback to refresh the list or close the editor
  };

  return (
    <form onSubmit={handleSave}>
      <h2>{noteId ? "Edit Note" : "Create Note"}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Write your note here..."
        value={contentText}
        onChange={(e) => setContentText(e.target.value)}
        required
      />
      <button type="submit">{noteId ? "Update Note" : "Save Note"}</button>
    </form>
  );
};

export default NoteEditor;
