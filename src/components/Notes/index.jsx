import { useEffect, useState } from "react";
import NoteItem from "../NoteItem";
import { useNavigate } from "react-router-dom";
import "./index.css";

const API_URL = "https://6995899fb081bc23e9c39519.mockapi.io/notes";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);

  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const fetchNotes = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    const userNotes = data.filter(
      (note) => note.username === username
    );
    setNotes(userNotes);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSubmit = async () => {
    if (title.trim() === "" || text.trim() === "") {
      setError("Please enter both title and description");
      return;
    }

    if (editingId) {
      await fetch(`${API_URL}/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content: text }),
      });
      setEditingId(null);
    } else {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          content: text,
          username,
        }),
      });
    }

    setTitle("");
    setText("");
    setError("");
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchNotes();
  };

  const editNote = (note) => {
    setTitle(note.title);
    setText(note.content);
    setEditingId(note.id);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="notes-page">
      <div className="notes-container">
        <div className="notes-header">
          <h1>My Notes</h1>
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>

        <input
          className="search-input"
          placeholder="Search notes by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="note-form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Write your note..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {error && <p className="form-error">{error}</p>}

          <button className="add-btn" onClick={handleSubmit}>
            {editingId ? "Update Note" : "Add Note"}
          </button>
        </div>

        <ul className="notes-grid">
          {filteredNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              editNote={editNote}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notes;
