const main = document.querySelector("main");
const voicesSelect = document.getElementById("voices");
const textarea = document.getElementById("text");
const readBtn = document.getElementById("read");
const toggleBtn = document.getElementById("toggle");
const closeBtn = document.getElementById("close");

const data = [
  {
    image: "./assets/thirsty.jpg",
    text: "Jag är törstig",
  },
  {
    image: "./assets/hungry.jpg",
    text: "Jag är hungrig",
  },
  {
    image: "./assets/tired.jpg",
    text: "Jag är trött",
  },
  {
    image: "./assets/hurt.jpg",
    text: "Jag har ont",
  },
  {
    image: "./assets/sad.jpg",
    text: "Jag är ledsen",
  },
  {
    image: "./assets/happy.jpg",
    text: "Jag är glad",
  },
  {
    image: "./assets/angry.jpg",
    text: "Jag är arg",
  },
  {
    image: "./assets/scared.jpg",
    text: "Jag är rädd",
  },
  {
    image: "./assets/toilet.jpg",
    text: "Jag vill på toa",
  },
  {
    image: "./assets/playground.jpg",
    text: "Jag vill gå till lekplatsen",
  },
  {
    image: "./assets/apartment.jpg",
    text: "Jag vill hem",
  },
  {
    image: "./assets/grandmother.png",
    text: "Jag vill till mormor",
  },
];

data.forEach(createBox);

// skapar en box för varje objekt i data
function createBox(item) {
  box = document.createElement("div");

  const {image, text} = item; // destructing för image och text

  box.classList.add("box"); // box får en klass

  box.innerHTML = `
  <img src="${image}" alt="${text}" />
  <p class="info">${text}</p>`;

  main.appendChild(box); // lägger till boxen i main
}
