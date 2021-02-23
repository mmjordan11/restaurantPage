import { createParagraphs, createArticle, createArticleHeading } from './DOMTools'
import { renderMenu } from './menu'
import { assignTriangle } from './index'

const createText = () => {
  const paragraphText = [
    'Taqueria Rosita is a family-owned and operated Mexican restaurant located in the heart of the Napa Valley.',
    'Never been to our restaurant? Check out the menu!'
  ];
  return createParagraphs(paragraphText);
}

const createMenuBtn = () => {
  const menuBtn = document.createElement('button');
  menuBtn.id = 'article--menu-btn';
  menuBtn.textContent = 'MENU';
  menuBtn.addEventListener('click', () => {
    document.querySelector('article').remove();
    document.querySelector('header').after(renderMenu());
    assignTriangle(document.querySelector('#nav--menu-btn').parentNode);
  });
  return menuBtn;
}

const renderHome = () => {
  const article = createArticle('home')

  article.appendChild(createArticleHeading('Bienvenidos'));
  createText().forEach(p => article.appendChild(p));
  article.appendChild(createMenuBtn());

  return article;
}

export { renderHome }
