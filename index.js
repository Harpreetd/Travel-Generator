let cardContainer = document.querySelector(".card-container");
let card = document.createElement("div");
card.style.padding = "10px";
let countryName = document.createElement("h1");
let img = document.createElement("img");
let aboutCountry = document.createElement("p");

let countriesArray = [
  {
    name: "India",
    img: "./assets/india.jpg",
    about:
      "This land of many cultures and languages needs no introduction! Famous the world over for its varied and exotic experiences, India has many more to offer than is possible to see in a single lifetime.",
  },
  {
    name: "Dubai",
    img: "./assets/dubai.jpg",
    about:
      "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene",
  },
  {
    name: "Spain",
    img: "./assets/spain.jpg",
    about:
      "Unravel the diverse landscape of Spain, and explore the vibrant culture. Food and wine are highest obsessions of Spain",
  },
  {
    name: "Netherlands",
    img: "./assets/netherlands.jpg",
    about:
      "Netherlands will always remain one of the top tourist countries no matter which year we are in. Whether it is the artistic heritage, 17th century legacies, beautiful canals or contemporary music, there is something about Amsterdam that attracts travelers.",
  },
  {
    name: "New Zealand",
    img: "./assets/newZealand.jpg",
    about:
      "New Zealand is the indisputable home of gigantic national parks, bizarre flora and fauna, the ever-dynamic and colorful Māori culture, and the best sites for surfing and skiing in the whole world.",
  },
];

let generateBtn = document.getElementById("generate-btn");
generateBtn.onclick = generateDestination;
function generateDestination() {
  cardContainer.innerHTML = "";
  let randomCountry = Math.floor(Math.random() * countriesArray.length);
  // card.style.backgroundColor = "white";
  switch (randomCountry) {
    case 0:
      card.classList.remove("dubai", "spain", "netherlands", "newZealand");
      card.classList.add("india");
      countryName.innerText = countriesArray[0].name;
      img.src = countriesArray[0].img;
      aboutCountry.innerText = countriesArray[0].about;
      break;
    case 1:
      card.classList.remove("india", "spain", "netherlands", "newZealand");
      card.classList.add("dubai");
      countryName.innerText = countriesArray[1].name;
      img.src = countriesArray[1].img;
      aboutCountry.innerText = countriesArray[1].about;
      break;
    case 2:
      card.classList.remove("india", "dubai", "netherlands", "newZealand");
      card.classList.add("spain");
      countryName.innerText = countriesArray[2].name;
      img.src = countriesArray[2].img;
      aboutCountry.innerText = countriesArray[2].about;
      break;
    case 3:
      card.classList.remove("india", "spain", "dubai", "newZealand");
      card.classList.add("netherlands");
      countryName.innerText = countriesArray[3].name;
      img.src = countriesArray[3].img;
      aboutCountry.innerText = countriesArray[3].about;
      break;
    case 4:
      card.classList.remove("india", "spain", "dubai", "netherlands");
      card.classList.add("newZealand");
      countryName.innerText = countriesArray[4].name;
      img.src = countriesArray[4].img;
      aboutCountry.innerText = countriesArray[4].about;
      break;
    default:
      console.log(randomCountry);
  }
  console.log(randomCountry);
  console.log(countriesArray[randomCountry]);
  card.append(countryName, img, aboutCountry);
  cardContainer.append(card);
}
