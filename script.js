'use strict';

/**
 * ICS3UC Final Project S1 2023-24
 * 
 * Author: Noah Kerrigan
 * Description:
 * 
 */

let title = getTitle(3);
title = title.toLowerCase()
let user_input = [];
let invisible = ""
let character = ""
let hockey_team = ""
let answer = ""
let guess_attempt = 0
console.log(title)

document.getElementById("button_begin").addEventListener("click", button_dissapear)
document.getElementById("guesses").addEventListener("keypress", letter_finder)

function button_dissapear() {
  document.getElementById("button_begin").hidden = true
  //After pressing Start, box to enter letter appears
  document.getElementById("enter_letter").hidden = false
  document.getElementById("guesses").hidden = false
}

function start() {
  guess_attempt = 0
  document.getElementById("underline").addEventListener("button_begin", start)
  //Adding number of underlines for each letter of the hockey team
  for (let number = 0; number < title.length; number++) {
    // Making either an underline or a space when necessary
    if (title[number] == " ") {
      invisible += " "
    } else
      invisible += "_"
  }
  //Sajeen did this step before me and he told me to add someting called .split. I researched it and essentially what it does is that it changes a string into an array and each letter in the given word goes into a seperate array. 
  document.getElementById("underline").innerHTML = "" + invisible.split()
  invisible = invisible.split("")
  console.log(invisible)
}

//Allows the user to press enter after guessing letter. Also finds letters present in the word, if letter is correct, will make new array. 
function letter_finder(event) {
  if (event.key === "Enter") {
    character = document.getElementById("guesses").value
    let value = false
    for (let x = 0; x < title.length; x++) {
      if (title[x] == character) {
        user_input.push(character)
        console.log(user_input)
        invisible[x] = character
        for (let w = 0; w < invisible.length; w++) {
          hockey_team += invisible[w]
        }
        hockey_team = invisible;
        document.getElementById("underline").innerHTML = "" + invisible.join("")
        console.log(invisible)
        value = true
      }
    }
    //When user guesses a letter not present in the team, man will appear. 
    if (value == false) {
      guess_attempt++;
    }
    if (guess_attempt == 1) {
      document.getElementById("hangman_frame").src = "images/hangman_head.png"
    }
    else if (guess_attempt == 2) {
      document.getElementById("hangman_frame").src = "images/hangman_body.png"
    }
    else if (guess_attempt == 3) {
      document.getElementById("hangman_frame").src = "images/hangman_arm.png"
    }
    else if (guess_attempt == 4) {
      document.getElementById("hangman_frame").src = "images/hangman_arms.png"
    }
    else if (guess_attempt == 5) {
      document.getElementById("hangman_frame").src = "images/hangman_leg.png"
    }
    else if (guess_attempt == 6) {
      document.getElementById("hangman_frame").src = "images/hangman_legs.png"
    }
    //I searched up what the alert function does and essentially after the user loses the game, it will alert them on the screen with a message
    if (guess_attempt == 6) {
      alert("Unfortunately, you were not succesful in guessing the NHL team, the correct team was the " + title + ", click the Restart button to play again. If you would like to go back to the home screen, click the Main Menu button.")
    }
  }
}
// This function is responsible for letting the user know if their final guess was right or not. 
function guess() {
  answer = prompt("Type your final guess. Make sure to put a space in between words. ").toLowerCase()
  if (answer == title) {
    alert("Congratulations, you won, click the Restart button to play again. If you would like to go back to the home screen, click the Main Menu button.")

  } else if (answer != title) {
    document.getElementById("hangman_frame").src = "images/hangman_legs.png"

    alert("Unfortunately, you were not succesful in guessing the NHL team, the correct team was the " + title + ", click the Restart button to play again. If you would like to go back to the home screen, click the Main Menu button.")
  }
}
