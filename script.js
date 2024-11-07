const got = new Book("Game of Thrones", "George R.R. Martin", 800, "Read");
// const harry = new Book("Harry Potter", "JK Rowling", 350, "Read");
const myLibrary = [got];

const bookContainer = document.querySelector(".book-container");
const dialog = document.querySelector("dialog");
const addBtn = document.querySelector(".add-btn");
const closeBtn = document.querySelector(".close-btn");
const submitBtn = document.querySelector(".submit-btn");
const form = document.forms["book-form"];

function showBook() {
  bookContainer.replaceChildren();
  myLibrary.forEach((book, i) => {
    book.id = i;
    const card = document.createElement("div");
    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookStatus = document.createElement("p");
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");
    const statusBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    deleteBtn.addEventListener("click", () => {
      deleteBook(book.id);
    });

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

addBtn.addEventListener("click", () => dialog.showModal());
closeBtn.addEventListener("click", () => dialog.close());
form.addEventListener("submit", addBookToLibrary);

function addBookToLibrary(event) {
  event.preventDefault();
  
  const checkboxStatus = document.querySelector("#status");
  let bookStatus;
  if (checkboxStatus.checked !== true) {
    bookStatus = "Unread";
  } else {
    bookStatus = "Read";
  };
  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    bookStatus
  );
  myLibrary.push(newBook);
  title.value = "";
  author.value = "";
  pages.value = "";
  showBook();
  dialog.close();
}

function deleteBook(id) {
  myLibrary.splice(id, 1);
  showBook();
}

showBook();

// console.log(myLibrary)

// addBookToLibrary("El tunel", "Ernesto Sabato", 158, "Unread");
