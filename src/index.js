import { renderHeader } from './header'
import { renderHome } from './home'
import { renderMenu } from './menu'
import { renderContact } from './contact'
import { renderFooter } from './footer'

const content = document.querySelector('#content');


const contentLoad = (tab) => {
  switch (tab) {
    case 'Menu':
      return renderMenu();
    case 'Contact':
      return renderContact();
    default:
      return renderHome();
    }
};

const assignTriangle = (parentElement) => {
  const triangles = document.querySelectorAll('.triangle-down');
  for (let key=0; key<triangles.length; key++) {
    triangles[key].remove()
  };
  const triangle = document.createElement('div');
  triangle.classList.add('triangle-down');
  parentElement.appendChild(triangle);

}

const tabSwitch = (e) => {
  assignTriangle(e.target.parentNode);

  const newTab = e.target.textContent;

  const article = document.querySelector('article');
  (article) ? article.remove() : undefined;

  document.querySelector('header').after(contentLoad(newTab));
};

const addTabListeners = () => {
  const tabBtns = document.querySelectorAll('nav button');

  tabBtns.forEach(btn => btn.addEventListener('click', tabSwitch));
};


const init = (() => {
  content.appendChild(renderHeader());
  content.appendChild(renderHome());
  content.appendChild(renderFooter());

  assignTriangle(document.querySelector('#nav--home-btn').parentNode);

  addTabListeners();
})();

export { assignTriangle }
