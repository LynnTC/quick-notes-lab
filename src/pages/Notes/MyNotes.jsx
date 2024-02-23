import NoteForm from './NoteForm';

export default function MyNotes({ notes, handleCreateNote }) {
    return (
        <div>
            <h1>Notes</h1>
            <NoteForm handleCreateNote={handleCreateNote} />
            {notes && notes.length ? notes.map((note, idx) => (
                <p key={idx}>{note.text} {(note.createdAt).toLocaleString()}</p>
            )) : <p>No Notes Yet</p>} 
        </div>
    );
  }