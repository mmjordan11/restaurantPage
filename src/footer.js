import { createParagraphs } from './DOMTools'

const createLocation = () => {
  const location = document.createElement('div');
  location.id = 'location';

  const _h3 = document.createElement('h3');
  _h3.textContent = 'Location';

  const _contactInfo = {
    address: ['1214 Main Street', 'Napa, CA 94559'],
    phone: '(707) 253-9208',
  };

  location.appendChild(_h3);
  createParagraphs(_contactInfo).forEach(elem => location.appendChild(elem));

  return location;
}

const createHours = () => {
  const hours = document.createElement('div');
  hours.id = 'hours';

  const _h3 = document.createElement('h3');
  _h3.textContent = 'Hours';

  const _hours = {
    hours: '10:30AM-9:00PM',
    days: 'Monday-Saturday',
    closed: 'Closed Sunday',
  }

  hours.appendChild(_h3);
  createParagraphs(_hours).forEach(elem => hours.appendChild(elem));

  return hours;
}

const createConnect = () => {
  const connect = document.createElement('div');
  connect.id = 'connect';

  const _h3 = document.createElement('h3');
  _h3.textContent = 'Connect';

  const socialBlock = document.createElement('div');
  socialBlock.id = 'social-block';

  const _social = {
    facebook: {
      link: 'https://www.facebook.com/Taqueria-Rosita-304411464302/',
      classes: ['fab', 'fa-facebook'],
    },
    twitter: {
      link: 'https://twitter.com/taqrositanapa',
      classes: ['fab', 'fa-twitter']
    },
    instagram: {
      link: 'https://www.instagram.com/taqrositanapa/',
      classes: ['fab', 'fa-instagram'],
    },
    yelp: {
      link: 'https://www.yelp.com/biz/taqueria-rosita-napa',
      classes: ['fab', 'fa-yelp'],
    },
    email: {
      link: 'mailto:info@taqueriarosita.com',
      classes: ['far', 'fa-envelope'],
    },
  }

  const createSocialLinks = (obj) => {
    const links = []
    for (let account in obj) {
      const a = document.createElement('a');
      a.href = obj[account].link;
      const i = document.createElement('i');
      obj[account].classes.forEach(faClass => {
        i.classList.add(faClass);
      })

      a.appendChild(i);
      links.push(a);
    }
    return links;
  }

  connect.appendChild(_h3);
  createSocialLinks(_social).forEach(link => socialBlock.appendChild(link));
  connect.appendChild(socialBlock);

  return connect
}

const createContactBar = () => {
  const contactBar = document.createElement('div');
  contactBar.id = 'contact-bar';

  contactBar.appendChild(createLocation());
  contactBar.appendChild(createHours());
  contactBar.appendChild(createConnect());

  return contactBar;
}

const createSignature = () => {
  const signature = document.createElement('div');
  signature.id = 'signature';

  const paragraphs = [
    `Hand-typed by <a href="https://github.com/mmjordan11">Matt Jordan</a>.`,
    `Fashioned after the real <a href="https://taqueriarosita.com/">Taqueria Rosita</a>. Check them out!`,
  ]

  createParagraphs(paragraphs).forEach(elem => signature.appendChild(elem));

  return signature;
}

const renderFooter = () => {
  const footer = document.createElement('footer');

  footer.appendChild(createContactBar());
  footer.appendChild(createSignature());

  return footer;
}

export { renderFooter }
