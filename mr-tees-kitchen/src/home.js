import footer from "./footer.js";

export default function home() {
    const homePage = document.createElement('article');
    homePage.classList.add('tab-content');
    homePage.setAttribute('id', 'home');

    const homeTitle = document.createElement('h1');
    homeTitle.textContent = 'Welcome To Jollof.Com';
    homePage.appendChild(homeTitle);

    const homeParagragh = document.createElement('p');
    homeParagragh.textContent = "Where you can say goodbye to oedematous and anaemic jollof. But wait a minute, we don't just serve tasty jollof; other sumptous dishes await you.";
    homePage.appendChild(homeParagragh);

    homePage.appendChild(footer());

    return homePage;
}