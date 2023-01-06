export default function footer() {
    const footer = document.createElement('footer');

    const footerPara = document.createElement('p');
    footerPara.textContent = 'Inspired by Mr. Tee & Jollof.com. Created by mwiafeansong for ';
    
    const footerAnchor = document.createElement('a');
    footerAnchor.setAttribute('href', 'https://theodinproject.com');
    footerAnchor.textContent = 'The Odin Project';
    
    footerPara.appendChild(footerAnchor);

    footer.appendChild(footerPara)

    return footer;
}