import BgImg from './food.jpg';
import BgMenu from './food-blue.jpg';
import './style.css';
import './Normalize.css';

const createElem = elem => document.createElement(elem);
const tabs = (parent) => {
  const tabsWrap = createElem('div');
  const menu = createElem('div');
  const contact = createElem('div');
  parent.appendChild(tabsWrap);
  tabsWrap.append(menu, contact);
  tabsWrap.classList.add('tabsWrap');
  menu.classList.add('menu');
  menu.style.backgroundImage = `url(${BgMenu})`;
  contact.classList.add('contact');
};

const pageLoad = () => {
  const hook = document.querySelector('#content');

  const topDiv = createElem('div');
  const bottomDiv = createElem('div');
  const header = createElem('div');
  const table = createElem('div');
  const intro = createElem('p');
  hook.append(topDiv, bottomDiv);
  bottomDiv.append(header, table, intro);
  header.classList.add('header');
  hook.classList.add('hook');
  topDiv.classList.add('topDiv');
  bottomDiv.classList.add('bottomDiv');
  table.classList.add('table');
  intro.classList.add('intro');
  intro.textContent = 'A thousand favors in one place!';
  topDiv.style.backgroundImage = `url(${BgImg})`;

  tabs(bottomDiv);
};

export default pageLoad;
