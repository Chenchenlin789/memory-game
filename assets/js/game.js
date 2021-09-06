// creating the deck
let section = document.createElement("section");
section.classList.add("deck");
document.body.append(section);

let cardsArray = [
  { src: "assets/img/aquaman.jpg", value: 0 },
  { src: "assets/img/aquaman.jpg", value: 0 },
  { src: "assets/img/batman.jpg", value: 1 },
  { src: "assets/img/batman.jpg", value: 1 },
  { src: "assets/img/captain-america.jpg", value: 2 },
  { src: "assets/img/captain-america.jpg", value: 2 },
  { src: "assets/img/fantastic-four.jpg", value: 3 },
  { src: "assets/img/fantastic-four.jpg", value: 3 },
  { src: "assets/img/flash.jpg", value: 4 },
  { src: "assets/img/flash.jpg", value: 4 },
  { src: "assets/img/green-arrow.jpg", value: 5 },
  { src: "assets/img/green-arrow.jpg", value: 5 },
  { src: "assets/img/green-lantern.jpg", value: 6 },
  { src: "assets/img/green-lantern.jpg", value: 6 },
  { src: "assets/img/ironman.jpg", value: 7 },
  { src: "assets/img/ironman.jpg", value: 7 },
  { src: "assets/img/spiderman.jpg", value: 8 },
  { src: "assets/img/spiderman.jpg", value: 8 },
  { src: "assets/img/superman.jpg", value: 9 },
  { src: "assets/img/superman.jpg", value: 9 },
  { src: "assets/img/the-avengers.jpg", value: 10 },
  { src: "assets/img/the-avengers.jpg", value: 10 },
  { src: "assets/img/thor.jpg", value: 11 },
  { src: "assets/img/thor.jpg", value: 11 },
];

let randomisedDeck = shuffle(cardsArray);

for (let i = 0; i <= randomisedDeck.length - 1; i++) {
  let parentDiv = document.createElement("div");
  let childDiv = document.createElement("div");
  let img = document.createElement("img");

  parentDiv.classList.add("card");

  childDiv.classList.add("card__face", "card__face--front");
  img.src = randomisedDeck[i].src;
  img.classList.add("card__face", "card__face--back");

  section.appendChild(parentDiv);
  parentDiv.appendChild(childDiv);
  parentDiv.appendChild(img);
}

// flipping Card
let cards = document.querySelectorAll(".card");
cards.forEach((element) => {
  element.addEventListener("click", function () {
    element.classList.toggle("is-flipped");
  });
});

//counting moves
let moves = 0;
let counter = document.querySelector(".moves");
function moveCounter() {
  moves++;
  counter.innerHTML = moves;
}
// counting matched pairs
let scored = 0;
let matchedPairs = document.getElementById("scored");
function match() {
  scored++;
  matchedPairs.innerHTML = scored;
}

// shuffle deck
function shuffle(array) {
  let initialDeck = array;
  let randomDeck = [];

  for (let i = array.length; i > 0; i--) {
    randomIndex = Math.floor(Math.random() * i); //a random index number selected

    randomCard = initialDeck[randomIndex]; // pick the random index number from the deck

    randomDeck.push(randomCard);
    initialDeck.splice(randomIndex, 1);
  }
  console.log(randomDeck);
  return randomDeck;
}
shuffle(cardsArray);

//start Game
function startGame() {
  // empty the openCards array
  //   openedCards = [];
  //   // shuffle deck
  //   cards = shuffle(cards);
  //   // remove all exisiting classes from each card
  //   for (var i = 0; i < cards.length; i++) {
  //     deck.innerHTML = "";
  //     [].forEach.call(cards, function (item) {
  //       deck.appendChild(item);
  //     });
  //     cards[i].classList.remove("show", "open", "match", "disabled");
  //   }
}
// reset moves
//   moves = 0;
//   counter.innerHTML = moves;
