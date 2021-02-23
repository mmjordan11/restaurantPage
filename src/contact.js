import { createArticle, createArticleHeading, createFormField } from './DOMTools'

const renderContact = () => {
  const article = createArticle('contact')

  article.appendChild(createArticleHeading('We\'d love to hear from you!'));

  const articleBody = document.createElement('div');
  articleBody.id = 'article-body';

  const form = document.createElement('form');

  form.appendChild(createFormField('input', 'text', 'Name'));
  form.appendChild(createFormField('input', 'email', 'Email'));
  form.appendChild(createFormField('textarea', 'text', 'Comments'));
  form.appendChild(createFormField('button', 'submit', 'Submit'));

  articleBody.appendChild(form);

  const map = document.createElement('div');
  map.id = 'map';
  map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.0763582743016!2d-122.28889148472413!3d38.30089858948762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80850667402e0ce3%3A0x3c2b7ff48360eae5!2sTaqueria%20Rosita!5e0!3m2!1sen!2sus!4v1613893274242!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;

  articleBody.appendChild(map);

  article.appendChild(articleBody);

  return article;
};

export { renderContact }
