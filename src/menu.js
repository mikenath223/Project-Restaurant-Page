const menu = () => {
  const createElem = elem => document.createElement(elem);
  const menu = document.querySelector('.menu');
  const menuDes = createElem('p');
  const menuBut = createElem('button');
  menu.append(menuDes, menuBut);
  menuDes.classList.add('menuDes');
  menuBut.classList.add('menuBut');
  menuDes.textContent = "Explore our diverse international cuisines crafted just for you."
  menuBut.textContent = "Open Menu"
  menuBut.addEventListener('click', () => {
    const contact = document.querySelector('.contact');
    menu.classList.add('slide-out-left');
    contact.classList.add('slide-out-right');
  })
}

export { menu };