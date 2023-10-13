let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let personImage = document.querySelector("#person-img");
let personName = document.querySelector("#person-name");
let personPosition = document.querySelector("#person-pos");
let personDetail = document.querySelector("#person-detail");
let supriseButton = document.querySelector("#suprise");

let employeeData = [
  {
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "Susan Smith",
    position: "web developer",
    detail:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse, before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },

  {
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "Peter Jones",
    position: "intern",
    detail:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },

  {
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    name: "anna johnson",
    position: "Web Designer",
    detail:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    name: "Bill Anderson",
    position: "CEO and Founder",
    detail:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let idx = 0;

function setData(idx) {
  personImage.src = employeeData[idx].image;
  personName.innerHTML = employeeData[idx].name;
  personPosition.innerHTML = employeeData[idx].position;
  personDetail.innerHTML = employeeData[idx].detail;
}

// prev.addEventListener('click', () => {
//     idx--;
//     if (idx < 0) {
//         idx = employeeData.length - 1;
//     }
//     setData(idx);
// });

// next.addEventListener('click', () => {
//     idx++;
//     if (idx >= employeeData.length) {
//         idx = 0;
//     }
//     setData(idx);
// });

// supriseButton.addEventListener('click',()=>{
//     idx=Math.floor(Math.random()*employeeData.length);
//     setData(idx);
// });
// setData(0);


prev.addEventListener('click', () => {
    idx = (idx - 1 + employeeData.length) % employeeData.length;
    setData(idx);
  });
  
  next.addEventListener('click', () => {
    idx = (idx + 1) % employeeData.length;
    setData(idx);
  });
  
  supriseButton.addEventListener('click', () => {
    idx = Math.floor(Math.random() * employeeData.length);
    setData(idx);
  });
  
  setData(idx);
  