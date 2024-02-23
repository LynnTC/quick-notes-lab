import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export function listNotes(){
    return sendRequest(BASE_URL)
}

export async function createNote(noteData) {
  return sendRequest(`${BASE_URL}/create`, 'POST', noteData);
}