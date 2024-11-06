const got = new Book("Game of Thrones", "George R.R. Martin", 800, "Read");
const harry = new Book("Harry Potter", "JK Rowling", 350, "Read");
const myLibrary = [got, harry];

const dialog = document.querySelector("dialog");
const addBtn = document.querySelector(".add-btn");
const closeBtn = document.querySelector(".close-btn");
const submitBtn = document.querySelector(".submit-btn");

const bookContainer = document.querySelector(".book-container");

function showBook() {
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container")
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookStatus = document.createElement("p");
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");
    const statusBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    bookContainer.appendChild(card);
    card.append(textContainer, btnContainer);
    textContainer.append(bookTitle, bookAuthor, bookPages, bookStatus);
    btnContainer.append(statusBtn, deleteBtn);
    bookTitle.textContent = `Title: ${book.title}`;
    bookAuthor.textContent = `Author: ${book.author}`;
    bookPages.textContent = `Pages: ${book.pages}`;
    bookStatus.textContent = `Status: ${book.status}`;
    statusBtn.textContent = "Change status";
    deleteBtn.textContent = "Delete";
  });
}

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(title, author, pages, status) {
  const newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);
}

addBtn.addEventListener("click", () => dialog.showModal());
closeBtn.addEventListener("click", () => dialog.close());
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
})

addBookToLibrary("El tunel", "Ernesto Sabato", 158, "Unread");

showBook();
