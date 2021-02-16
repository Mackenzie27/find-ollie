// #1: SET RANDOM CHOICE AND CHANGE CARD ACCORDINGLY

// Start Shuffle

document.getElementById("pg-2-play-button").addEventListener("click", startShuffle);


function getRandomNumber() {
    var x = Math.floor((Math.random() * 8) + 1);
    return x;
    }


let randomNumber = getRandomNumber();


function startShuffle() { 

    if (randomNumber === 1) {
         // # = 1, then then Ollie goes to card-ollie
        var firstdiv = document.getElementById("card-ollie"); 
    }
    else if (randomNumber === 2) {
        // if # = 2, then Ollie goes to card-carrot-1
        
        //change the div class to ollieC, remove the class carrot
        //change the src of the img to ollie, change the class to card-face-ollie

        var secondDiv = document.getElementById("card-carrot-1");
        secondDiv.classList.add("ollieCard");
        secondDiv.classList.remove("carrotCard");

        //access the children of secondDiv
        secondDiv.children.src = "./Images/ollie.png";
        secondDiv.children.classList.add("card-face-ollie");
        secondDiv.children.classList.remove("card-face-carrot");
    }
    else if (randomNumber === 3) {
        // if # = 3, then then Ollie goes to card-carrot-2
       
        var thirdDiv = document.getElementById("card-carrot-2");
        thirdDiv.classList.add("ollieCard");
        thirdDiv.classList.remove("carrotCard");

        //access the children of thirdDiv
        thirdDiv.children.src = "./Images/ollie.png";
        thirdDiv.children.classList.add("card-face-ollie");
        thirdDiv.children.classList.remove("card-face-carrot");
        
    }
    else if (randomNumber === 4) {
        // if # = 4, then then Ollie goes to card-carrot-3

        var fourthDiv = document.getElementById("card-carrot-3");
        fourthDiv.classList.add("ollieCard");
        fourthDiv.classList.remove("carrotCard");

        //access the children of fourthDiv
        fourthDiv.children.src = "./Images/ollie.png";
        fourthDiv.children.classList.add("card-face-ollie");
        fourthDiv.children.classList.remove("card-face-carrot");
    }
    else if (randomNumber === 5) {
        // if # = 5, then then Ollie goes to card-carrot-4

        var fifthDiv = document.getElementById("card-carrot-4");
        fifthDiv.classList.add("ollieCard");
        fifthDiv.classList.remove("carrotCard");

        //access the children of fifthDiv
        fifthDiv.children.src = "./Images/ollie.png";
        fifthDiv.children.classList.add("card-face-ollie");
        fifthDiv.children.classList.remove("card-face-carrot");
    }
    else if (randomNumber === 6) {
        // if # = 6, then then Ollie goes to card-carrot-5

        var sixthDiv = document.getElementById("card-carrot-5");
        sixthDiv.classList.add("ollieCard");
        sixthDiv.classList.remove("carrotCard");

        //access the children of sixthDiv
        sixthDiv.children.src = "./Images/ollie.png";
        sixthDiv.children.classList.add("card-face-ollie");
        sixthDiv.children.classList.remove("card-face-carrot");
    }
    else if (randomNumber === 7) {
        // if # = 7, then then Ollie goes to card-carrot-6

        var seventhDiv = document.getElementById("card-carrot-6");
        seventhDiv.classList.add("ollieCard");
        seventhDiv.classList.remove("carrotCard");

        //access the children of seventhDiv
        seventhDiv.children.src = "./Images/ollie.png";
        seventhDiv.children.classList.add("card-face-ollie");
        seventhDiv.children.classList.remove("card-face-carrot");
    }
    else if (randomNumber === 8) {
        // if # = 8, then then Ollie goes to card-carrot-7

        var eighthDiv = document.getElementById("card-carrot-7");
        eighthDiv.classList.add("ollieCard");
        eighthDiv.classList.remove("carrotCard");

        //access the children of eighthDiv
        eighthDiv.children.src = "./Images/ollie.png";
        eighthDiv.children.classList.add("card-face-ollie");
        eighthDiv.children.classList.remove("card-face-carrot");
    }
}

// Set time interval for Start Shuffle

function timeOutInterval() {
    setTimeout(startShuffle(), 3000);
  }


// Set time interval for Pause Shuffle 

document.getElementById("pg-2-pause-button").addEventListener("click", pauseShuffle);

function pauseShuffle() {
    setTimeout(startShuffle(), 0);
}

// #2: SET RANDOM FLASHING FOR 3 SECONDS




// #3: CHANGE INSTRUCTION TEXT TEXT WHEN GUESSED CORRECTLY OR INCORRECTLY 

//if clicked correctly, replace #"instructions-text" with:

// document.getElementById("instructions-text").innerHTML = "You found Ollie! He'll love your cuddles.";

// If clicked incorrectly, replace #"instructions-text" with:

// document.getElementById("instructions-text").innerHTML = "Ollie's somewhere else. Keep looking!";