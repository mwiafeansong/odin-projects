export default function footer() {
    const footer = document.createElement('footer');

    const footerPara1 = document.createElement('p');
    footerPara1.textContent = 'Inspired by Mr. Tee & Jollof.Com';

    const footerPara2 = document.createElement('p');
    footerPara2.textContent = 'Created by mwiafeansong for ';
    
    const footerAnchor = document.createElement('a');
    footerAnchor.setAttribute('href', 'https://theodinproject.com');
    footerAnchor.textContent = 'The Odin Project';
    
    footerPara2.appendChild(footerAnchor);

    footer.appendChild(footerPara1);
    footer.appendChild(footerPara2);

    return footer;
}