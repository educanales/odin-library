const newBook = new Book("Game of Thrones", "George R.R. Martin", 800, "Read");
const harry = new Book("Harry Potter", "JK Rowling", 350, "Read");
const myLibrary = [newBook, harry];
const bookContainer = document.querySelector(".book-container");
const addBtn = document.querySelector(".add-btn");

function showBook() {
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookStatus = document.createElement("p");

    bookContainer.appendChild(card);
    card.append(bookTitle, bookAuthor, bookPages, bookStatus);
    bookTitle.textContent = `Title: ${book.title}`;
    bookAuthor.textContent = `Author: ${book.author}`;
    bookPages.textContent = `Pages: ${book.pages}`;
    bookStatus.textContent = `Status: ${book.status}`;
  });
}

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// addBtn.addEventListener("click", showBook);
showBook()

function addBookToLibrary() {}

/*
- Modificar DOM para mostrar myLibrary
  - Seleccionar el div
  - 


*/
