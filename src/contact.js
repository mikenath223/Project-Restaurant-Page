const contact = () => {
  const createElem = elem => document.createElement(elem);
  const contact = document.querySelector('.contact');
  const contactDes = createElem('p');
  const contactBut = createElem('button');
  contact.append(contactDes);
  document.querySelector('.bottomDiv').appendChild(contactBut);
  contactDes.classList.add('contactDes');
  contactBut.classList.add('contactBut');
  contactDes.textContent = 'Have complaints or suggestions? Kindly reach out to us.';
  contactBut.textContent = 'Contact us';

  contactBut.addEventListener('click', () => {
    document.querySelector('.table').style.transform = 'translateX(-1800px)';
    const menu = document.querySelector('.menu');
    const contact = document.querySelector('.contact');
    document.querySelector('.table').classList.remove('height-table');
    const switchIn = () => {
      if (window.matchMedia('(max-width: 800px)')) {
        contact.style.width = '100%';
        contact.classList.remove('translate');
      } else {
        contact.style.width = '48%';
      }
      contact.style.visibility = 'visible';
      menu.style.visibility = 'visible';
      menu.classList.replace('slide-out-left', 'slide-in-left');
      contact.classList.replace('slide-out-right', 'slide-in-right');
    };
    const switchOut = () => {
      menu.style.visibility = 'hidden';
      contact.style.width = '90%';
      contact.classList.add('translate');
    };
    if (menu.classList.value.indexOf('slide-out-left') !== -1) {
      switchIn();
    } else {
      switchOut();
    }
  });
};

export default contact;
