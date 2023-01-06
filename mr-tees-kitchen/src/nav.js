export default function nav() {
    const element = document.createElement('nav');

    let tabLinks = [];

    for (let i = 0; i < 3; i++) {
        let btn = document.createElement('button');
        btn.classList.add('tablink');
        tabLinks.push(btn);
        element.appendChild(btn);
    }

    
    tabLinks[0].classList.add('homelink');
    tabLinks[0].classList.add('show');

    tabLinks[0].textContent = 'Home';
    tabLinks[1].textContent = 'Menu';
    tabLinks[2].textContent = 'Contact Us';

    return element;
}