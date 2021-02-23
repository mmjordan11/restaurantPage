import { createArticle, createArticleHeading, createMenuDisplay } from './DOMTools'

const MenuCategory = (name, modifiers, extras) => {
  const getName = () => name;
  const getModifiers = () => modifiers;
  const getExtras = () => extras;

  const _categoryItems = [];

  const addCategoryItem = (menuItem) => {
    _categoryItems.push(menuItem);
  }

  const getCategoryItems = () => _categoryItems;

  return { getName, getModifiers, getExtras, addCategoryItem, getCategoryItems }
}

const MenuItem = (name, desc, price) => {
  const state = {
    name,
    price,
    desc,
  }

  return { state }
}

const createBurritos = () => {
  const burritos = MenuCategory(
    'Burritos',
    ['chicken', 'beef', 'pork', 'carne asada', 'carnitas'],
    {
      'rice and beans': '$3.75',
      'chile relleno': '$3.75',
    }
  );

  const burritosItems = [
    {
      name: 'Deluxe',
      desc: 'rice, beans, meat, & cheese topped with mild sauce',
      price: '$8.95',
    },
    {
      name: 'Super',
      desc: 'rice, beans, meat, guacamole, cheese, & peppers',
      price: '$8.95',
    },
    {
      name: 'Regular',
      desc: 'rice, beans, & meat',
      price: '$8.25',
    },
    {
      name: 'Vegetarian',
      desc: 'rice, whole beans, lettuce, tomatoes, & cheese',
      price: '$8.25',
    },
  ];

  burritosItems.forEach(item => burritos.addCategoryItem(MenuItem(
    item.name,
    item.desc,
    item.price
  )));

  return burritos;
}

const createTacos = () => {
  const tacos = MenuCategory(
    'Tacos',
    ['chicken', 'beef', 'pork'],
    {'rice & beans': '$4.00',}
  );

  const tacosItems = [
    {
      name: 'Soft Shell',
      desc: 'soft corn tortilla, meat, lettuce, tomatoes & cheese',
      price: '$3.75'
    },
    {
      name: 'Hard Shell',
      desc: 'crispy corn tortilla, meat, lettuce, tomatoes & cheese',
      price: '$3.75'
    },
  ];

  tacosItems.forEach(item => tacos.addCategoryItem(MenuItem(
    item.name,
    item.desc,
    item.price
  )));

  return tacos;
}

const menu = {
  burritos: createBurritos(),
  tacos: createTacos(),
};

const renderMenu = () => {
  const article = createArticle('menu')

    article.appendChild(createArticleHeading('Menu available for dine-in and pick-up'));
    article.appendChild(createMenuDisplay(menu));

    return article;
}

export { renderMenu }
