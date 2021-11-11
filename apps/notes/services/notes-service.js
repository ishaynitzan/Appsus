import { utilService } from "../../../js/services/util-service.js";
import { storageService } from "../../../js/services/async-storage-service.js";
import { gNotes } from "../services/notes-data.js";

const NOTES_KEY = "note";
_createNote();

export const notesService = {
  query,
  remove,
  save,
  getById,
};

function query() {
  return storageService.query(NOTES_KEY);
}

function remove(noteId) {
  return storageService.remove(NOTES_KEY, noteId);
}

function save(note) {
  if (note.id) return storageService.put(NOTE_KEY, note);
  else return storageService.post(NOTES_KEY, note);
}

function getById(noteId) {
  return storageService.get(NOTES_KEY, noteId);
}

function _createNote() {
  var notes = utilService.loadFromStorage(NOTES_KEY);
  if (!notes || !notes.length) {
    notes = gNotes;
    utilService.saveToStorage(NOTES_KEY, notes);
  }
}
