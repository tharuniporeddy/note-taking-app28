import "./index.css";

const NoteItem = ({ note, deleteNote, editNote }) => {
  const onClickEdit = () => {
    editNote(note);
  };

  const onClickDelete = () => {
    deleteNote(note.id);
  };

  return (
    <li className="note-card">
      <h3 className="note-title">{note.title}</h3>
      <p className="note-content">{note.content}</p>

      <div className="note-actions">
        <button
          className="small-btn edit-btn"
          onClick={onClickEdit}
        >
          Edit
        </button>

        <button
          className="small-btn delete-btn"
          onClick={onClickDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default NoteItem;
