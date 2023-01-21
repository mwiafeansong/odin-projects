const aside = document.querySelector('aside');

export function openPage(page, element) {
    let tabContents = document.querySelectorAll('.tab-content');
    let tabLinks = document.querySelectorAll('.tablink');
    
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].style.backgroundColor = '';
    }

    tabLinks[0].classList.remove('show');
    
    document.getElementById(page).style.display = 'block';
    element.style.backgroundColor = '#ccc';
}


export default function displayPage() {
    let tabContents = document.querySelectorAll('.tab-content');
    let tabLinks = document.querySelectorAll('.tablink');
    for (const link of tabLinks) {
        for (const content of tabContents) {
             if (link.getAttribute('data-id') === content.getAttribute('data-id')) {
                link.addEventListener('click', (e) => {
                    openPage(content.getAttribute('id'), e.target);
                    removeSidebar();
                })
             }
         }
     }
}

export function displaySidebar() {
    aside.classList.remove('hide');
}

export function removeSidebar() {
    aside.classList.add('hide')
}