document.getElementById("pg-2-play-button").addEventListener("click", startShuffle);

function startShuffle() {
    Math.floor((Math.random() * 8) + 1);
    return()
    if {
         // # = 1, then highlight card-ollie
        document.getElementById("card-ollie").src = "card-ollie";   
    }
    else {
        // if # = 2, then highlight card-carrot-1
        document.getElementById("card-carrot-1").src = "card-ollie";
    }
    else {
        // if # = 3, then highlight card-carrot-2
        document.getElementById("card-carrot-2").src = "card-ollie";
    }
    else {
        // if # = 4, then highlight card-carrot-3
        document.getElementById("card-carrot-3").src = "card-ollie";
    }
    else {
        // if # = 5, then highlight card-carrot-4
        document.getElementById("card-carrot-4").src = "card-ollie";
    }
    else {
        // if # = 6, then highlight card-carrot-5
        document.getElementById("card-carrot-5").src = "card-ollie";
    }
    else {
        // if # = 7, then highlight card-carrot-6
        document.getElementById("card-carrot-6").src = "card-ollie";
    }
    else {
        // if # = 8, then highlight card-carrot-7
        document.getElementById("card-carrot-7").src = "card-ollie";
    }

    
}

document.getElementById("pg-2-pause-button").addEventListener("click", pauseShuffle);

function pauseShuffle() {
    
}


//if clicked correctly, replace #"instructions-text" with:

document.getElementById("instructions-text").innerHTML = "You found Ollie! He'll love your cuddles.";

// If clicked incorrectly, replace #"instructions-text" with:

document.getElementById("instructions-text").innerHTML = "Ollie's somewhere else. Keep looking!";