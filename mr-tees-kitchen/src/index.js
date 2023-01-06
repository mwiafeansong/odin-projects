import './style.css';
import nav from './nav.js';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

const content = document.getElementById('content');
content.appendChild(nav());
content.appendChild(home());
content.appendChild(menu());
content.appendChild(contact());

const tabContents = document.querySelectorAll('.tab-content');
const tabLinks = document.querySelectorAll('.tablink');

function openPage(pageName, element) {
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    tabLinks[0].classList.remove('show');

    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].style.backgroundColor = '';
    }

    document.getElementById(pageName).style.display = 'block';
    element.style.backgroundColor = 'rgb(255, 255, 255, 0.3)';
}

tabLinks[0].addEventListener('click', (e) => {
    openPage('home', e.target);
});

tabLinks[1].addEventListener('click', (e) => {
    openPage('menu', e.target);
});

tabLinks[2].addEventListener('click', (e) => {
    openPage('contact', e.target);
});