import { utilService } from "../../../js/services/util-service.js";
import { storageService } from "./async-storage-service.js";
import { gNotes } from "../services/notes-data.js";

const NOTES_KEY = "note";
_createNote();

export const booksService = {
  query,
  remove,
  save,
  getById,
};

function query(key) {
  return storageService.query(key);
}

function remove(noteId) {
  return storageService.remove(NOTES_KEY, noteId);
}

function save(note) {
  return storageService.post();
}

function getById(noteId) {
  return storageService.get(NOTES_KEY, noteId);
}

function _createNote() {
  var notes = utilService.loadFromStorage(NOTES_);
  if (!notes || !notes.length) {
    notes = gNotes;
    utilService.saveToStorage(NOTES_KEY, notes);
  }
}
