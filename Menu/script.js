const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "Breakfast",
    price: 15.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "Lunch",
    price: 13.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "Shakes",
    price: 6.99,
    img: "https://images.pexels.com/photos/11410548/pexels-photo-11410548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "Breakfast",
    price: 20.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "Lunch",
    price: 22.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "Shakes",
    price: 18.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "Breakfast",
    price: 8.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "Lunch",
    price: 12.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "Shakes",
    price: 16.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "Dinner",
    price: 39.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
let menuList = document.querySelector(".menuList");
let allButtons = document.querySelectorAll(".all-filter-btn button");

function addMenuItem(itemList) {
  let sendMenulist = "";
  itemList.forEach((item) => {
    sendMenulist += ` <div class="menu-item">
        <img
          src=${item.img}
          alt=""
        />
        <div class="menu-item-text">
          <div class="menu-item-heading">
            <h1>${item.title}</h1>
            <span>$${item.price}</span>
          </div>
          <hr />
          <p>${item.desc}</p>
        </div>
      </div>`;
  });
  return sendMenulist;
}
allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log(button);
    if (button.textContent === "All") {
      menuList.innerHTML=addMenuItem(menu);
      // console.log(menu);
    } else {
      let itemList = menu.filter(
          (item) => item.category === button.textContent
          );
          // console.log(itemList);
          menuList.innerHTML=addMenuItem(itemList);
    }
  });
});

menuList.innerHTML=addMenuItem(menu);