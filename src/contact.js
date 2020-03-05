const contact = () => {
  const createElem = elem => document.createElement(elem);
  const contact = document.querySelector('.contact');
  const contactDes = createElem('p');
  const contactBut = createElem('button');
  contact.append(contactDes, contactBut);
  contactDes.classList.add('contactDes');
  contactBut.classList.add('contactBut');
  contactDes.textContent = "Have complaints or suggestions? Kindly reach out to us."
  contactBut.textContent = "Contact us"
}

export { contact };