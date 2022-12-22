const library = document.querySelector('.library');
const form = document.querySelector('form');
const addBookBtn = document.querySelector('.add-button');
const closeFormBtn = document.querySelector('.close-button');
const formBtn = document.querySelector('.form-button');

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#num-pages');
const readChoices = document.getElementsByName('hasRead');
const readBook = document.querySelector('#read');
const notReadBook = document.querySelector('#not-read');
const requiredField = document.querySelector('.required');
 

let myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead
}

Book.prototype.addBookToLibrary = function() {
    myLibrary.push(this);
}

Book.prototype.addBookToShelf = function() {
        newBook = document.createElement('article');
        newBook.className = 'book';
        library.appendChild(newBook);

        newTitle = document.createElement('h3');
        newTitle.className = 'title';
        newTitle.textContent = this.title;
        newBook.appendChild(newTitle);

        by = document.createElement('p');
        by.textContent = 'by';
        newBook.appendChild(by);

        newAuthor = document.createElement('p');
        newAuthor.className = 'author';
        newAuthor.textContent = this.author;
        newBook.appendChild(newAuthor);

        newPages = document.createElement('p');
        newPages.className = 'pages';
        newPages.textContent = `Number of pages: ${this.pages}`;
        newBook.appendChild(newPages);

        readStatus = document.createElement('p');
        spanStatus = document.createElement('span');
        readStatus.textContent = 'Status: ';
        if (this.hasRead === 'Yes') {
            spanStatus.className = 'read';
            spanStatus.textContent = 'read';
        } else if (this.hasRead === 'No') {
            spanStatus.className = 'not-read';
            spanStatus.textContent = 'not read';
        }
        readStatus.appendChild(spanStatus);
        newBook.appendChild(readStatus);
}

function createBook() { 
    for (const choice of readChoices) {
        if (choice.checked) {
            readChoice = choice.value;
        }
    }

    book = new Book(title.value, author.value, pages.value.toString(), readChoice);
    book.addBookToLibrary();
    book.addBookToShelf();
}

function showBooks() {
    for (const book of myLibrary) {
        book.addBookToShelf();
    }
}

function showForm() {
    if (form.className === 'invisible') {
        form.classList.add('visible');
        form.classList.remove('invisible');
    }
}

function removeForm() {
    if (form.className === 'visible') {
        form.classList.add('invisible');
        form.classList.remove('visible');
    }

    requiredWarningBefore();
}

function clearInputs() {
    title.value = '';
    author.value = '';
    pages.value = '';
    for (const choice of readChoices) {
        if (choice.checked) {
            choice.checked = false;
        }
    }
}

function requiredWarningBefore() {
    requiredField.textContent = '* required field';
    requiredField.style.color = 'black';
}

function requiredWarningAfter() {
    requiredField.textContent = '* Input needed in required fields';
    requiredField.style.color = 'red';
}

const book1 = new Book('Harry Potter', 'JK Rowling', 400, 'No');
const book2 = new Book('The Maze Runner', 'James Dashner', 375, 'Yes');
const book3 = new Book('Tell me your dreams', 'Sydney Sheldon', 200, 'No');

book1.addBookToLibrary();
book2.addBookToLibrary();
book3.addBookToLibrary();

showBooks();
addBookBtn.addEventListener('click', showForm);
closeFormBtn.addEventListener('click', removeForm);
formBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (title.value !== '' && author.value !== '' && ((!readBook.checked && notReadBook.checked) || (readBook.checked && !notReadBook.checked))) {
        createBook();
        clearInputs();
        requiredWarningBefore();
    } else {
        requiredWarningAfter();
    }    
});




