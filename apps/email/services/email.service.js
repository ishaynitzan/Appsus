import { utilService } from "../../../js/services/util-service.js";
import { storageService } from "../../../js/services/async-storage-service.js";
import { gEmail } from "./email-data.js";

const EMAIL_KEY = "email";
_createEmail();

export const emailService = {
  query,
  remove,
  save,
  getById,
};

function query() {
  return storageService.query(EMAIL_KEY);
}

function remove(id) {
  return storageService.remove(EMAIL_KEY, id);
}

function save(email) {
  if (email.id) return storageService.put(EMAIL_KEY, email);
  else return storageService.post(EMAIL_KEY, email);
}

function getById(id) {
  return storageService.get(EMAIL_KEY, id);
}

function _createEmail() {
  var emails = utilService.loadFromStorage(EMAIL_KEY);
  if (!emails || !emails.length) {
    console.log('_createEmail')
    emails = gEmail;
    utilService.saveToStorage(EMAIL_KEY, emails);
  }
}
