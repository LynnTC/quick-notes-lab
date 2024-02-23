import {useState} from "react";


export default function NoteForm({handleCreateNote}) {

  const [Note, setNote] = useState({
    text: '',

  })

  async function handleSubmit(evt) {
    handleCreateNote(Note);
    evt.preventDefault();
  }

  function handleChange(evt) {
    const noteForm = {...Note, [evt.target.name]: evt.target.value};
    setNote(noteForm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      name="text"
      value={Note.text}
      onChange={handleChange}
      required
      />
      <button type="Submit">Add Note</button>
    </form>
  )
  
}