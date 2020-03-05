import BgImg from "./food.jpg";
import BgMenu from "./food-blue.jpg";
import "./style.css";
import "./Normalize.css";

const createElem = elem => document.createElement(elem);
const tabs = (parent) => {
  const tabsWrap = createElem("div");
  const menu = createElem("div");
  const contact = createElem("div");
  parent.appendChild(tabsWrap);
  tabsWrap.append(menu, contact);
  tabsWrap.classList.add("tabsWrap");
  menu.classList.add("menu");
  menu.style.backgroundImage = `url(${BgMenu})`;
  contact.classList.add("contact");
};

const page_load = () => {
  const hook = document.querySelector("#content");

  const topDiv = createElem("div");
  const bottomDiv = createElem("div");
  const header = createElem("div");
  hook.append(topDiv, bottomDiv);
  bottomDiv.appendChild(header);
  header.classList.add("header");
  hook.classList.add("hook");
  topDiv.classList.add("topDiv");
  bottomDiv.classList.add("bottomDiv");
  topDiv.style.backgroundImage = `url(${BgImg})`;

  tabs(bottomDiv);
  return;
};

export { page_load };
