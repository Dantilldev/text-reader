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
  const box = document.createElement("div");

  const {image, text} = item; // destructing för image och text

  box.classList.add("box"); // box får en klass

  box.innerHTML = `

  <div class="image-wrapper">
  <img src="${image}" alt="${text}" />
  </div>
  <p class="info">${text}</p>`;

  box.addEventListener("click", () => {
    setTextMessage(text);
    speakText();

    // Lägger till active och tar bort den efter 800ms
    box.classList.add("active");
    setTimeout(() => box.classList.remove("active"), 800);
  });

  // lägger till boxen i main
  main.appendChild(box);
}

// Sätter texten i message
const message = new SpeechSynthesisUtterance();

// Lägger till röster i en array
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  // Lägger till röster i select med en for-loop
  for (let i = 0; i < voices.length; i++) {
    const voice = voices[i];

    const option = document.createElement("option");

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  }
}
// Sätter texten som ska läsas upp
function setTextMessage(text) {
  message.text = text;
}

// Läs texten
function speakText() {
  speechSynthesis.cancel();
  speechSynthesis.speak(message);
}
// Ändra rösten
function setVoice(e) {
  message.voice = voices.find((voice) => voice.name === e.target.value);
}

// Ändra Röster
speechSynthesis.addEventListener("voiceschanged", getVoices);

// Visa och dölja text-box
toggleBtn.addEventListener("click", () => {
  document.getElementById("text-box").classList.toggle("show");
});

// Stäng knappen
closeBtn.addEventListener("click", () => {
  document.getElementById("text-box").classList.remove("show");
});

// onchange event för select
voicesSelect.addEventListener("change", setVoice);

// Läs knappen
readBtn.addEventListener("click", () => {
  setTextMessage(textarea.value);
  speakText();
});

getVoices();
