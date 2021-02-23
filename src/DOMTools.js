const createParagraphs = (obj) => {
  const paragraphs = []
  const flattenObj = (object) => {
    for (let item in object) {
      if (!Array.isArray(object[item])) {
        const p = document.createElement('p');
        p.innerHTML = object[item];
        paragraphs.push(p);
      }
      else {
        flattenObj(object[item]);
      }
    }
  }
  flattenObj(obj);
  return paragraphs;
};

const createArticle = (type) => {
  const article = document.createElement('article');
  article.id = type;
  return article
};

const createArticleHeading = (text) => {
  const h2 = document.createElement('h2');
  h2.textContent = text;
  return h2;
};

const createMenuItem = (item) => {
  const container = document.createElement('div');
  container.classList.add('menu--category--info--item');
  for (let detail in item.state) {
    const p = document.createElement('p');
    p.classList.add(`menu--category--info--item--${detail}`);
    p.textContent = item.state[detail];
    container.appendChild(p);
  }

  return container;
}

const createCategoryInfo = (category) => {
  const info = document.createElement('div');
  info.classList.add('menu--category--info')

  const h2 = document.createElement('h2');
  h2.classList.add('menu--category--info--name');
  h2.textContent = category.getName();

  const h3 = document.createElement('h3');
  h3.textContent = category.getModifiers();

  const extras = category.getExtras();
  const pExtras = document.createElement('p');
  for (let extra in extras) {
    (pExtras.textContent == '') ?
      pExtras.textContent += `Add ${extra} : ${extras[extra]}` :
      pExtras.textContent += ` | ${extra} : ${extras[extra]}`;
  }

  info.appendChild(h2);
  info.appendChild(h3);
  info.appendChild(pExtras);

  const categoryItems = category.getCategoryItems();

  categoryItems.forEach((item) => {
    info.appendChild(createMenuItem(item));
  });


    return info;
}

const createCategory = (category) => {
  const name = category.getName().toLowerCase();

  const container = document.createElement('div');
  container.id = name;
  container.classList.add('menu--category');

  const graphic = document.createElement('div');
  graphic.classList.add('menu--category--graphic')
  switch (name) {
    case 'burritos':
      graphic.textContent = '🌯';
      break;
    case 'tacos':
      graphic.textContent = '🌮';
      break;
    default:
      break;
  };

  container.appendChild(createCategoryInfo(category));
  container.appendChild(graphic);

  return container;
}

const createMenuDisplay = (menu) => {
  const container = document.createElement('div')
  container.id = 'menu-items';
  for (let category in menu) {
    container.appendChild(createCategory(menu[category]));
  }

  return container;
};

const createFormField = (element,type,label,required=true) => {
  const container = document.createElement('div');
  container.classList.add('form-field');
  if (element == 'button') {
    const field = document.createElement(element);
    field.setAttribute('type',type);
    field.id = label.toLowerCase();
    field.textContent = label;
    container.appendChild(field);
  }
  else {
    const labelElem = document.createElement('label');
    labelElem.setAttribute('for',label);
    labelElem.textContent = label;
    container.appendChild(labelElem);

    const field = document.createElement(element);
    field.setAttribute('type',type);
    field.id = label;
    field.setAttribute('required', required);
    container.appendChild(field);
  }


  return container;
}

export {
  createParagraphs,
  createArticle,
  createArticleHeading,
  createMenuDisplay,
  createFormField,
}
