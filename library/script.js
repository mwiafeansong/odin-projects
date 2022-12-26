const library = document.querySelector('.library');
const form = document.querySelector('form');
const addBookBtn = document.querySelector('.add-button');
const closeFormBtn = document.querySelector('.close-button');
const backDrop = document.querySelector('.backdrop');

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#num-pages');
const readChoices = document.getElementsByName('hasRead');
const readBook = document.querySelector('#read');
const notReadBook = document.querySelector('#not-read');
const requiredField = document.querySelector('.required');
 
let myLibrary = [];
let bookCreated = false;

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

Book.prototype.addBookToLibrary = function() {
    myLibrary.push(this);
}

Book.prototype.createBook = function() {
        newBook = document.createElement('article');
        newBook.setAttribute('data-id', myLibrary.indexOf(this));
        newBook.className = 'book';
        library.appendChild(newBook);

        newTitle = document.createElement('h3');
        newTitle.setAttribute('data-id', myLibrary.indexOf(this));
        newTitle.className = 'title';
        newTitle.innerHTML = this.title;
        newBook.appendChild(newTitle);

        newAuthor = document.createElement('p');
        newAuthor.setAttribute('data-id', myLibrary.indexOf(this));
        newAuthor.className = 'author';
        newAuthor.innerHTML = `by <span class="author-name">${this.author}</span>`;
        newBook.appendChild(newAuthor);

        newPages = document.createElement('p');
        newPages.setAttribute('data-id', myLibrary.indexOf(this));
        newPages.className = 'pages';
        newPages.innerHTML = `Number of pages: ${this.pages}`;
        newBook.appendChild(newPages);

        readStatus = document.createElement('p');
        readStatus.setAttribute('data-id', myLibrary.indexOf(this));
        spanStatus = document.createElement('span');
        spanStatus.setAttribute('data-id', myLibrary.indexOf(this));
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

        bookBtns = document.createElement('div');
        bookBtns.setAttribute('data-id', myLibrary.indexOf(this));
        bookBtns.className = 'book-btns';
        newBook.appendChild(bookBtns);

        changeBookStatusBtn = document.createElement('button');
        changeBookStatusBtn.setAttribute('data-id', myLibrary.indexOf(this));
        changeBookStatusBtn.className = 'change-status';
        changeBookStatusBtn.id = this.title;
        changeBookStatusBtn.textContent = 'Change Status';
        bookBtns.appendChild(changeBookStatusBtn);

        deleteBookBtn = document.createElement('button');
        deleteBookBtn.setAttribute('data-id', myLibrary.indexOf(this));
        deleteBookBtn.className = 'delete-book';
        deleteBookBtn.textContent = 'Delete';
        bookBtns.appendChild(deleteBookBtn);
}


function displayBook() { 
    for (const choice of readChoices) {
        if (choice.checked) {
            readChoice = choice.value;
        }
    }

    let book = new Book(title.value, author.value, pages.value.toString(), readChoice);
    book.addBookToLibrary();
    book.createBook();
}

function showBooks() {
    for (const book of myLibrary) {
        book.createBook();
    }
}

function showForm() {
    if (form.className === 'invisible') {
        form.classList.add('visible');
        form.classList.remove('invisible');
    }

    backDrop.classList.add('show');
}

function removeForm() {
    if (form.className === 'visible') {
        form.classList.add('invisible');
        form.classList.remove('visible');
    }

    backDrop.classList.remove('show');

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

function displayBookFromForm(e) {
    e.preventDefault();
    if (title.value !== '' && author.value !== '' && ((!readBook.checked && notReadBook.checked) || (readBook.checked && !notReadBook.checked))) {
        displayBook();
        clearInputs();
        requiredWarningBefore();
        bookCreated = true;
    } else {
        requiredWarningAfter();
    }   
}

function removeBook(e) {
    if (e.target.classList.contains('delete-book')) {
        let li = e.target.parentElement.parentElement;
        library.removeChild(li);

        let dataId = li.getAttribute('data-id');
        for (const book of myLibrary) {
            if (parseInt(dataId) === myLibrary.indexOf(book)) {
                myLibrary.splice(parseInt(dataId), 1);
                console.log(myLibrary);
            }
        }
    } 
}

function changeReadStatus(e) {
    if (e.target.classList.contains('change-status')) {
        let li = e.target.parentElement.previousElementSibling.lastElementChild;
        
        let dataId = li.getAttribute('data-id');
        for (const book of myLibrary) {
            if (parseInt(dataId) === myLibrary.indexOf(book)) {
                if (book.hasRead === 'Yes') {
                    book.hasRead = 'No';   
                } else {
                    book.hasRead = 'Yes'; 
                }
                break;
            }
        }
        
        if (li.textContent === 'read') {
            li.textContent = 'not read';
            li.className = 'not-read';
        } else {
            li.textContent = 'read';
            li.className = 'read';
        }
    }
}

const book1 = new Book('Harry Potter', 'JK Rowling', 400, 'No');
const book2 = new Book('The Maze Runner', 'James Dashner', 375, 'Yes');
const book3 = new Book('Tell Me Your Dreams', 'Sydney Sheldon', 400, 'Yes');

book1.addBookToLibrary();
book2.addBookToLibrary();
book3.addBookToLibrary();

showBooks();
addBookBtn.addEventListener('click', showForm);
closeFormBtn.addEventListener('click', removeForm);
form.addEventListener('submit', (e) => {
    displayBookFromForm(e);
    if (bookCreated) {
        removeForm();
    }
})
library.addEventListener('click', (e) => {
    removeBook(e);
    changeReadStatus(e);
})









