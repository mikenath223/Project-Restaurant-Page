import Icon from "./food-tray.svg";
import BgImg from "./food.jpg";
import "./style.css";
import "./Normalize.css";

const page_load = () => {
  const hook = document.querySelector("#content");
  const createElem = elem => document.createElement(elem);

  const topDiv = createElem("div");
  const bottomDiv = createElem("div");
  hook.append(topDiv, bottomDiv);
  hook.classList.add("hook");
  topDiv.classList.add("topDiv");
  bottomDiv.classList.add("bottomDiv");
  topDiv.style.backgroundImage = `url(${BgImg})`;

  return;
};

export { page_load };
