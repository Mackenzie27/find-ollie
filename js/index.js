// TO DO:
// - Hide Ollie when he's done jumping
// - Restrict clicking the "Play" button only once during play --> document.getElementById("pg-2-play-button").disabled = true;

// #1: SET RANDOM CHOICE AND CHANGE CARD ACCORDINGLY

// Start Shuffle

document
  .getElementById("pg-2-play-button")
  .addEventListener("click", handleStart);

// When Ollie is showing, use clicking on him as a trigger for "Play"

document.querySelector(".ollieCard").addEventListener("click", handleStart);

function getRandomNumber() {
  var x = Math.floor(Math.random() * 8 + 1);
  return x;
}

function shuffle() {
  let previousRabbitImage = document.querySelector("img.card-face-ollie");
  if (previousRabbitImage === null) return;
  let previousRabbitParentDiv = previousRabbitImage.parentElement;

  previousRabbitImage.classList.replace("card-face-ollie", "card-face-carrot");
  previousRabbitParentDiv.classList.replace("ollieCard", "carrotCard");
  previousRabbitImage.src = "../images/single-carrot.png";

  let randomNumber = getRandomNumber();
  // if # = 2, then Ollie goes to card-carrot-1
  //change the div class to ollieC, remove the class carrot
  //change the src of the img to ollie, change the class to card-face-ollie
  var anyDiv = document.getElementById("card-carrot-" + (randomNumber - 1));
  // console.log("#card-carrot-" + (randomNumber-1) + " img");
  // const img2 = document.querySelector("#card-carrot-" + (randomNumber-1) + " img");
  const img = anyDiv.querySelector("img");

  anyDiv.classList.add("ollieCard");
  anyDiv.classList.remove("carrotCard");
  //access the children of secondDiv
  img.src = "./images/ollie.png";
  img.classList.add("card-face-ollie");
  img.classList.remove("card-face-carrot");
  document.getElementById("pg-2-play-button").disabled = true;
}

// Set time interval for Start Shuffle

function handleStart() {
  let time = 0;
  const interval = setInterval(() => {
    shuffle();
    time++;
    if (time > 20) {
      clearInterval(interval);
      hideOllieAfterShuffle();
      checkPlayerAnswer();
    }
  }, 200);
}

// After shuffle, hide Ollie.

function reenablePlayButton() {
  document.getElementById("pg-2-play-button").disabled = false;
}

/**
 * @description should find ollie card and change its ccs class while chnaging the child image src back to a carrot
 * @returns {undefined}
 */
function hideOllieAfterShuffle() {
  let ollie = document.querySelector(".ollieCard");
  if (ollie === null) return;
  ollie.setAttribute("data-correct-answer", "here");
  // select the image too
  let image = ollie.querySelector("img");
  // change the image's source
  image.src = "../images/single-carrot.png";
  // repace the div's css class
  image.classList.replace("card-face-ollie", "card-face-carrot");
  ollie.classList.replace("ollieCard", "carrotCard");
}

function checkClickedCard(event) {
  const card = event.target;
  let correctCardAttribute = card.getAttribute("data-correct-answer");
  // si l'attribute de la carte courante contient here, c'est la bonne carte
  if (correctCardAttribute === "here") {
    displayText(true);
    revealOllie();
    reenablePlayButton();
  } else {
    displayText(false);
    revealOllie();
    reenablePlayButton();
  }

}

function revealOllie() {
  let ollieBunny = document.querySelector(".ollieCard");

  // find the card with data-correct-answer
  let correctCardAttribute = card.getAttribute("data-correct-answer");

  if (correctCardAttribute === "here") {
  // replace the div class
  ollieBunny.classList.replace("carrotCard", "ollieCard");

  // replace the image class
  image.classList.replace("card-face-carrot", "card-face-ollie");
  
  // change the image source
  image.src = "../images/ollie.png";
  }
}

function checkPlayerAnswer() {
  const cards = document.querySelectorAll(".carrotCard");
  // console.log(cards);
  cards.forEach(function (card) {
    card.addEventListener("click", checkClickedCard);
  });
}

// #2: CHANGE INSTRUCTION TEXT WHEN GUESSED CORRECTLY OR INCORRECTLY

function displayText() {
  let result = card.getAttribute("data-correct-answer");
  if (correctCardAttribute === "here") {
    //if clicked correctly, replace #"instructions-text" with:
    document.getElementById("instructions-text").innerHTML =
      "You found Ollie! He'll love your cuddles.";
  } else {
    // If clicked incorrectly, replace #"instructions-text" with:
    document.getElementById("instructions-text").innerHTML =
      "Ollie's somewhere else. Keep looking!";
  }
}
