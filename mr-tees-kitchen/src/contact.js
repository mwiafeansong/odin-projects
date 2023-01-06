import footer from "./footer.js";

export default function contact() {
    const contactPage = document.createElement('article');
    contactPage.classList.add('tab-content');
    contactPage.setAttribute('id', 'contact');

    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Get In Touch';
    contactPage.appendChild(contactTitle);

    let contactParagraphs = [];

    for (let i = 0; i < 2; i++) {
        let contactPara = document.createElement('p');
        contactParagraphs.push(contactPara);
        contactPage.appendChild(contactPara);
    }

    contactParagraphs[0].textContent = 'We are just a phone call away.';
    contactParagraphs[1].textContent = 'Phone: 555-555-5555';

    contactPage.appendChild(footer());

    return contactPage;
}