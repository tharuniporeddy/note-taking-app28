import "./index.css";

const NoteItem = ({ note, deleteNote, editNote }) => {
  return (
    <li className="note-card">
      <h3 className="note-title">{note.title}</h3>
      <p className="note-content">{note.content}</p>

      <div className="note-actions">
        <button
          className="small-btn edit-btn"
          onClick={() => editNote(note)}
        >
          Edit
        </button>

        <button
          className="small-btn delete-btn"
          onClick={() => deleteNote(note.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default NoteItem;
