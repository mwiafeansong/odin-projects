import footer from "./footer.js";

export default function menu() {
    const menuPage = document.createElement('article');
    menuPage.classList.add('tab-content');
    menuPage.setAttribute('id', 'menu');

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Our Menu';
    menuPage.appendChild(menuTitle);

    let menuParagraphs = [];

    for (let i = 0; i < 5; i++) {
        let menuPara = document.createElement('p');
        menuParagraphs.push(menuPara);
        menuPage.appendChild(menuPara);
    }

    menuParagraphs[0].textContent = 'Jollof Rice & Chicken - $15 / $20';
    menuParagraphs[1].textContent = 'Jollof Rice & Beef - $15 / $20';
    menuParagraphs[2].textContent = 'Fried Rice & Chicken - $15 / $20';
    menuParagraphs[3].textContent = 'Assorted Fried Rice - $20';
    menuParagraphs[4].textContent = 'Indomie & Sausages - $17';

    menuPage.appendChild(footer());
    
    return menuPage;
}