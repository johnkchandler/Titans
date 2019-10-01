let titans = ["Robin", "Raven", "Starfire", "Beastboy", "Cyborg", "Bumblebee"];
//generate random number between 0 and 5
let rand = Math.floor(Math.random() * 6);
//use random number to select random titan by index
let titan = titans[rand];

//select elements from the DOM
let Robin = document.getElementById("Robin"),
  Raven = document.getElementById("Raven"),
  Starfire = document.getElementById("Starfire"),
  Beastboy = document.getElementById("Beastboy"),
  Cyborg = document.getElementById("Cyborg"),
  Bumblebee = document.getElementById("Bumblebee"),
  header = document.getElementById("header"),
  footer = document.getElementById("footer");

//function for when user makes a selection

function getClicked(element, character, success, failure) {
  if (titan == character) {
    header.innerHTML = "<h1>" + success + "</h1>";
    footer.innerHTML = "<a href='./index.html'>play again</a>";
    element.parentElement.classList.add("correct");
	var correct_audio = new Audio('./audio/correct.mp3');
    correct_audio.play();
  } else {
    element.classList.add("selected");
    element.parentElement.classList.add("selected");
    header.innerHTML = "<h1>" + failure + "</h1>";
    var incorrect_audio = new Audio('./audio/incorrect.mp3');
    incorrect_audio.play();
  }
}

//run onClick function when user makes a selection

Robin.onclick = function() {
  getClicked(Robin, "Robin", "Excellent!", "Guess again.");
};
Raven.onclick = function() {
  getClicked(Raven, "Raven", "Ah, you got me.", "Nope.");
};
Starfire.onclick = function() {
  getClicked(Starfire, "Starfire", "Shamalama-moo-moo!", "You are the wrong.");
};
Beastboy.onclick = function() {
  getClicked(Beastboy, "Beastboy", "You gots it, yo!", "Guess again, fool!");
};
Cyborg.onclick = function() {
  getClicked(Cyborg, "Cyborg", "Booya-ka-shah!!!", "No way.");
};
Bumblebee.onclick = function() {
  getClicked(Bumblebee, "Bumblebee", "That's what's up!", "Nuh-uh.");
};
