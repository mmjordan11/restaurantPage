const createLogo = () => {
  const logo = document.createElement('logo');
  const logoImg = document.createElement('img');
  const logoName = document.createElement('h1');

  logo.id = 'logo';
  logoImg.src = 'tr-logo_home.png';
  logoName.textContent = 'Taqueria Rosita';

  logo.appendChild(logoImg);
  logo.appendChild(logoName);

  return logo;
}

const createSlogan = () => {
  const slogan = document.createElement('div');
  slogan.id = 'slogan';
  slogan.textContent = 'Killer Mexican Food';

  return slogan;
}

const createNav = () => {
  const nav = document.createElement('nav');
  const _navItems = ['Home','Menu','Contact'];

  _navItems.forEach(navItem => {
    const container = document.createElement('div');
    const btn = document.createElement('button');

    container.classList.add('nav-item');
    btn.id = `nav--${navItem.toLowerCase()}-btn`;
    btn.textContent = navItem;

    container.appendChild(btn);
    nav.appendChild(container);
  });

  return nav;
}

const renderHeader = () => {
  const header = document.createElement('header');

  header.appendChild(createLogo());
  header.appendChild(createSlogan());
  header.appendChild(createNav());

  return header;
}

export { renderHeader }
