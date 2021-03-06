import { utilService } from "./util-service.js";
import { storageService } from "./async-storage-service.js";
import { gBooks } from "../services/books-data.js";

const BOOKS_KEY = "books";
const REVIEWS_KEY = "reviews";
_createBook();

export const booksService = {
  query,
  remove,
  save,
  getById,
  getReviewById
};

function query(key) {
  return storageService.query(key);
}

function remove(bookId) {
  return storageService.remove(REVIEWS_KEY, bookId);
}

function save(review) {
  // if (bookId) return storageService.put(REVIEWS_KEY, review);
  // else
  return storageService.post(REVIEWS_KEY, review);
}

function getById(bookId) {
  return storageService.get(BOOKS_KEY, bookId);
}
function getReviewById(bookId) {
  return storageService.query(REVIEWS_KEY)
  .then(reviews=>{
    return reviews.filter(review=> review.bookId === bookId);
  });
}

function _createBook() {
  var books = utilService.loadFromStorage(BOOKS_KEY);
  if (!books || !books.length) {
    books = gBooks;
    utilService.saveToStorage(BOOKS_KEY, books);
  }
}
