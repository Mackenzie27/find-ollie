// #1: SET RANDOM CHOICE AND CHANGE CARD ACCORDINGLY

// Start Shuffle

document.getElementById("pg-2-play-button").addEventListener("click", startShuffle);


function getRandomNumber() {
    var x = Math.floor((Math.random() * 8) + 1);
    return x;
    }

let randomNum = getRandomNumber();


function startShuffle() { 

    if (randomNum === 1) {
         // # = 1, then highlight card-ollie
        var firstdiv = document.getElementById("card-ollie");//.src = this.card-ollie;   
    }
    else if (getRandomNumber() === 2) {
        // if # = 2, then highlight card-carrot-1
        
        //change the div class to ollieC, remove the class carrot
        //change the src of the img to ollie, change the class to card-face-ollie

        var secondDiv = document.getElementById("card-carrot-1");//.src = this.card-ollie; 
        secondDiv.classList.add("ollieC");
        secondDiv.classList.remove("carrotC");

        //access the children of secondDiv
        secondDiv.children.src = "./Images/ollie.png";
        secondDiv.children.classList.add("card-face-ollie");
        secondDiv.children.classList.remove("card-face-carrot");
    }
    else if getRandomNumber = 3 {
        // if # = 3, then highlight card-carrot-2
        document.getElementById(this.card-carrot-2).src = this.card-ollie; 
    }
    else if getRandomNumber = 4 {
        // if # = 4, then highlight card-carrot-3
        document.getElementById(this.card-carrot-3).src = this.card-ollie; 
    }
    else if getRandomNumber = 5 {
        // if # = 5, then highlight card-carrot-4
        document.getElementById(this.card-carrot-4).src = this.card-ollie; 
    }
    else if getRandomNumber = 6 {
        // if # = 6, then highlight card-carrot-5
        document.getElementById(this.card-carrot-5).src = this.card-ollie; 
    }
    else if getRandomNumber = 7 {
        // if # = 7, then highlight card-carrot-6
        document.getElementById(this.card-carrot-6).src = this.card-ollie; 
    }
    else if getRandomNumber = 8 {
        // if # = 8, then highlight card-carrot-7
        document.getElementById(this.card-carrot-7).src = this.card-ollie; 
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

document.getElementById("instructions-text").innerHTML = "You found Ollie! He'll love your cuddles.";

// If clicked incorrectly, replace #"instructions-text" with:

document.getElementById("instructions-text").innerHTML = "Ollie's somewhere else. Keep looking!";