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

    const switchIn = () => {
      contact.style.visibility = 'visible';
      contact.style.width = '48%';
      menu.style.visibility = 'visible';
      menu.classList.replace('slide-out-left', 'slide-in-left');
      contact.classList.replace('slide-out-right', 'slide-in-right');
    };
    const switchOut = () => {
      menu.style.visibility = 'hidden';
      contact.style.width = '90%';
    };
    if (menu.classList.value.indexOf('slide-out-left') !== -1) {
      switchIn();
    } else {
      switchOut();
    }
  });
};

export default contact;
