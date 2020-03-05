import food1 from "./food1.jpg";
import food2 from "./food2.jpg";
import food3 from "./food3.jpg";
import food4 from "./food4.jpg";
import food5 from "./food5.jpg";
import food6 from "./food6.jpg";

const tableMenu = () => {
  const table = document.querySelector(".table");
  const menuObjects = [
    {
      src: `url${food1}`,
      imgDes: "Roasted Crispy Potato Skins",
      descript:
        "Golden crispy skins topped with the great A.J. Hornings Haggis & served with our whisky, peppercorn, wholegrain mustard & cream sauce. Topped with mild cheddar cheese.",
      price: "£7.00"
    },
    {
      src: `url${food2}`,
      imgDes: "Mini Haggis, Neeps & Tatties Taster",
      descript:
        "A perfect beginners option for those new to Haggis. Small plate of our haggis, potato, turnip with a peppercorn sauce.",
      price: "£5.00"
    },
    {
      src: `url${food3}`,
      imgDes: "Steak Burger, Tomato, Cheese & Egg Rosti Stack",
      descript:
        "Our home-made prime steak burger stacked on top of a potato rosti fritter, sprinkled with mild Scottish cheddar, crowned with a tomato & fried egg. Served with a salad garnish & our homemade coleslaw.",
      price: "£9.00"
    },
    {
      src: `url${food4}`,
      imgDes: "Honey Soaked Char-Grilled Smoked Gammon with Redcurrants & Cranberry.",
      descript:
        "Gluten Trace. Spiced, cured & smoked using traditional techniques. Outdoor reared pigs make for an intensley flavoured & tender meat that we slice & char-grilled.",
      price: "£11.00"
    },
    {
      src: `url${food5}`,
      imgDes: "Braised Ox Cheek with Mushrooms & Rich Dark Gravy",
      descript:
        "We highly recommend that you try this dish. Slow cooked until tender, prime beef cheek breaks apart effortlessly. The button mushrooms & rich dark gravy finish it perfectly.",
      price: "£15.00"
    },
    {
      src: `url${food6}`,
      imgDes: "Portobello Mushroom with a Garlic & Herb Crust Rosti Stack",
      descript:
        "A giant marinated portobello mushroom is baked & stuffed with a wild garlic, fresh herbs and cheese crumble. Meaty but with no meat.",
      price: "£9.00"
    }
  ];

  
};

const menu = () => {
  const createElem = elem => document.createElement(elem);
  const menu = document.querySelector(".menu");
  const menuDes = createElem("p");
  const menuBut = createElem("button");
  menu.append(menuDes, menuBut);
  menuDes.classList.add("menuDes");
  menuBut.classList.add("menuBut");
  menuDes.textContent =
    "Explore our diverse international cuisines crafted just for you.";
  menuBut.textContent = "Open Menu";

  menuBut.addEventListener("click", () => {
    const contact = document.querySelector(".contact");
    menu.classList.add("slide-out-left");
    contact.classList.add("slide-out-right");
  });
};

export { menu };
