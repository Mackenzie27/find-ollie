// TO DO: 
// - Hide Ollie when he's done jumping
// - Restrict clicking the "Play" button only once during play --> document.getElementById("pg-2-play-button").disabled = true;

// #1: SET RANDOM CHOICE AND CHANGE CARD ACCORDINGLY

// Start Shuffle

document
  .getElementById("pg-2-play-button")
  .addEventListener("click", handleStart);


// When Ollie is showing, use clicking on him as a trigger for "Play"

document
  .querySelector(".ollieCard")
  .addEventListener("click", handleStart);


function getRandomNumber() {
  var x = Math.floor(Math.random() * 8 + 1);
  return x;
}


function shuffle() {

  let previousRabbitImage = document.querySelector("img.card-face-ollie");
  let previousRabbitParentDiv = previousRabbitImage.parentElement;

  previousRabbitImage.classList.replace("card-face-ollie", "card-face-carrot");
  previousRabbitParentDiv.classList.replace("ollieCard", "carrotCard");
  previousRabbitImage.src = "../Images/single-carrot.png";

  let randomNumber = getRandomNumber();
  // if # = 2, then Ollie goes to card-carrot-1
  //change the div class to ollieC, remove the class carrot
  //change the src of the img to ollie, change the class to card-face-ollie
  var anyDiv = document.getElementById("card-carrot-" + (randomNumber-1));
  // console.log("#card-carrot-" + (randomNumber-1) + " img");
  // const img2 = document.querySelector("#card-carrot-" + (randomNumber-1) + " img");
  const img = anyDiv.querySelector("img");

  anyDiv.classList.add("ollieCard");
  anyDiv.classList.remove("carrotCard");
  //access the children of secondDiv
  img.src = "./Images/ollie.png";
  img.classList.add("card-face-ollie");
  img.classList.remove("card-face-carrot");
  document.getElementById("pg-2-play-button").disabled = true;
}

// Set time interval for Start Shuffle

function handleStart() {
  let time = 0
  console.log("start")
  const interval = setInterval(()=>{
    shuffle()
    console.log(time)
    time++;
    if(time > 20) {
    hideOllieAfterShuffle()
    clearInterval(interval)
  }
  },200)
}

// After shuffle, hide Ollie.

function reenablePlayButton() {
  document.getElementById("pg-2-play-button").disabled = false;
}

function hideOllieAfterShuffle() {
  var ollie = document.querySelector(".ollieCard");  
  // infinite loop: ollie.classList.toogle("carrotCard")
  // no infinite loop: ollie.classList.toggle(".carrotCard");
  // no infinite loop: ollie.classList.toggle("card-carrot-1")
  // infinite loop: ollie.classList.toogle("img.card-face-carrot");
  // infinite loop: ollie.classList.toogle(".card-face-carrot");
  reenablePlayButton();
}

// comparing a querySelector with a ClassList --> Not the same object. 
// Infinite loop. Is it coming from the reenable play button by activating or "pushing" the play button?


// #2: CHANGE INSTRUCTION TEXT WHEN GUESSED CORRECTLY OR INCORRECTLY

function guessLogicInstructions() {

  let guessedCorrectly = document.getElementById("carrot-card-0");
  let guessedIncorrectly = document.querySelector("img.card-face-carrot");

  if (guessedCorrectly) {
    //if clicked correctly, replace #"instructions-text" with:
    document.getElementById("instructions-text").innerHTML = "You found Ollie! He'll love your cuddles.";
    
  } if (guessedIncorrectly) {
    // If clicked incorrectly, replace #"instructions-text" with:
    document.getElementById("instructions-text").innerHTML = "Ollie's somewhere else. Keep looking!";
  } {
    
  }
}

//guessLogicInstructions();