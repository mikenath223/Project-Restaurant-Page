import Icon from './food-tray.svg';

const headerComps = () => {
  const head = document.querySelector('.header');
  const createElem = elem => document.createElement(elem);

  const headText = createElem('h1');
  const headIcon = createElem('img');
  headIcon.setAttribute('src', Icon);
  headIcon.setAttribute('alt', 'icon');
  head.append(headText, headIcon);
  headText.textContent = 'The Clinkers';
};

export default headerComps;