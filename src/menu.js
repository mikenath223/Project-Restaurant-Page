import food1 from "./food1.jpg";
import food2 from "./food2.jpg";
import food3 from "./food3.jpg";
import food4 from "./food4.jpg";
import food5 from "./food5.jpg";
import food6 from "./food6.jpg";

const createElem = elem => document.createElement(elem);
const tableMenu = () => {
  const table = document.querySelector(".table");
  const menuObjects = [
    {
      src: food1,
      imgDes: "Roasted Crispy Potato",
      descript:
        "Golden crispy skins topped with the great A.J. Hornings Haggis & served with our whisky, peppercorn, wholegrain mustard & cream sauce. Topped with mild cheddar cheese.",
      price: "£7.00"
    },
    {
      src: food2,
      imgDes: "Neeps & Tatties Taster",
      descript:
        "A perfect beginners option for those new to Haggis. Small plate of our haggis, potato, turnip with a peppercorn sauce.",
      price: "£5.00"
    },
    {
      src: food3,
      imgDes: "Cheese & Egg Rosti",
      descript:
        "Our home-made prime steak burger stacked on top of a potato rosti fritter, sprinkled with mild Scottish cheddar, crowned with a tomato & fried egg. Served with a salad garnish & our homemade coleslaw.",
      price: "£9.00"
    },
    {
      src: food4,
      imgDes: "Smoked Gammon",
      descript:
        "Gluten Trace. Spiced, cured & smoked using traditional techniques. Outdoor reared pigs make for an intensley flavoured & tender meat that we slice & char-grilled.",
      price: "£11.00"
    },
    {
      src: food5,
      imgDes: "Braised Ox Cheek",
      descript:
        "We highly recommend that you try this dish. Slow cooked until tender, prime beef cheek breaks apart effortlessly. The button mushrooms & rich dark gravy finish it perfectly.",
      price: "£15.00"
    },
    {
      src: food6,
      imgDes: "Crust Rosti Stack",
      descript:
        "A giant marinated portobello mushroom is baked & stuffed with a wild garlic, fresh herbs and cheese crumble. Meaty but with no meat.",
      price: "£9.00"
    }
  ];

  menuObjects.forEach(e => {
    const itemWrap = createElem('div');
    const itemImg = createElem('img');
    const itemDes = createElem('div');
    const itemInfo = createElem('p');
    itemWrap.classList.add('itemWrap');
    itemImg.classList.add('itemImg');
    itemDes.classList.add('itemDes');
    itemInfo.classList.add('itemInfo');
    table.appendChild(itemWrap);
    itemWrap.append(itemImg, itemDes);
    itemImg.setAttribute('src', e.src);
    itemImg.setAttribute('alt', 'food-image');
    itemInfo.textContent = e.imgDes;
    const itemDescript = createElem('p');
    itemDescript.classList.add('itemDescript');
    const itemPrice = createElem('span');
    itemPrice.classList.add('itemPrice');
    itemDes.append(itemInfo, itemDescript, itemPrice);
    itemDescript.textContent = e.descript;
    itemPrice.textContent = e.price;
  });
};

const menu = () => {
  const menu = document.querySelector(".menu");
  const contact = document.querySelector(".contact");
  const menuDes = createElem("p");
  const menuBut = createElem("button");
  menu.appendChild(menuDes);
  document.querySelector('.bottomDiv').appendChild(menuBut);
  menuDes.classList.add("menuDes");
  menuBut.classList.add("menuBut");
  menuDes.textContent =
    "Explore our diverse international cuisines crafted just for you.";
  menuBut.textContent = "Open Menu";

  const switchIn = () => {
    menu.classList.replace("slide-in-left", "slide-out-left");
    contact.classList.replace("slide-in-right", "slide-out-right");
  };

  const switchOut = () => {
    menu.classList.add("slide-out-left");
    contact.classList.add("slide-out-right");
  };

  menuBut.addEventListener("click", () => {
    contact.style.width === "90%" ? contact.style.visibility = "hidden" : null;
    menu.classList.value.indexOf('slide-in-left') !== -1 ? switchIn() : switchOut();
    document.querySelector('.table').style.transform = "translateX(0px)"
  });
};

export { menu, tableMenu };
