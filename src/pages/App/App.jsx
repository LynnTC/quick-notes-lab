import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NoteForm from '../Notes/NoteForm';
import MyNotes from '../Notes/MyNotes'
import * as notesAPI from '../../utilities/note-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);

async function handleCreateNote(Note) {
  const note = await notesAPI.createNote(Note);
  setNotes([...notes, note]);
}

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path='/' element={<MyNotes notes={notes} handleCreateNote={handleCreateNote} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
