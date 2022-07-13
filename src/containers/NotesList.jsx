import "../styles/notesList.css";
import Note from "../components/Note";
import AddNote from "../components/AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          handleDeleteNote={handleDeleteNote}
          id={note.id}
          text={note.text}
          date={note.date}
          key={note.id}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
