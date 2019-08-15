let titans = ["Robin", "Raven", "Starfire", "Beastboy", "Cyborg", "Bumblebee"];
//generate random number between 0 and 5
let rand = Math.floor(Math.random() * 6);
//use random number to select random titan by index
let titan = titans[rand];

let Robin = document.getElementById("Robin"),
  Raven = document.getElementById("Raven"),
  Starfire = document.getElementById("Starfire"),
  Beastboy = document.getElementById("Beastboy"),
  Cyborg = document.getElementById("Cyborg"),
  Bumblebee = document.getElementById("Bumblebee"),
  header = document.getElementById("header"),
  footer = document.getElementById("footer");

//run onClick function when user makes a selection
Robin.onclick = function() {
  if (titan == "Robin") {
    header.innerHTML = "<h1>Excellent!</h1>";
    footer.innerHTML = "<a href='./index.html'>play again</a>";
    Robin.parentElement.classList.add("correct");
  } else {
    Robin.classList.add("selected");
    Robin.parentElement.classList.add("selected");
    guesses++;
    header.innerHTML = "<h1>Guess again</h1>";
  }
};

Raven.onclick = function() {
  if (titan == "Raven") {
    header.innerHTML = "<h1>Ah, you got me.</h1>";
    footer.innerHTML = "<a href='./index.html'>play again</a>";
    Raven.parentElement.classList.add("correct");
  } else {
    Raven.classList.add("selected");
    Raven.parentElement.classList.add("selected");
    guesses++;
    header.innerHTML = "<h1>Nope</h1>";
  }
};

Starfire.onclick = function() {
  if (titan == "Starfire") {
    header.innerHTML = "<h1>Shamalama-moo-moo</h1>";
    footer.innerHTML = "<a href='./index.html'>play again</a>";
    Starfire.parentElement.classList.add("correct");
  } else {
    Starfire.classList.add("selected");
    Starfire.parentElement.classList.add("selected");
    guesses++;
    header.innerHTML = "<h1>You are the wrong.</h1>";
  }
};

Beastboy.onclick = function() {
  if (titan == "Beastboy") {
    header.innerHTML = "<h1>You gots it, yo!</h1>";
    footer.innerHTML = "<a href='./index.html'>play again</a>";
    Beastboy.parentElement.classList.add("correct");
  } else {
    Beastboy.classList.add("selected");
    Beastboy.parentElement.classList.add("selected");
    guesses++;
    header.innerHTML = "<h1>Guess again, fool!</h1>";
  }
};

Cyborg.onclick = function() {
  if (titan == "Cyborg") {
    header.innerHTML = "<h1>Booya-ka-shah!!</h1>";
    footer.innerHTML = "<a href='./index.html'>play again</a>";
    Cyborg.parentElement.classList.add("correct");
  } else {
    Cyborg.classList.add("selected");
    Cyborg.parentElement.classList.add("selected");
    guesses++;
    header.innerHTML = "<h1>No way</h1>";
  }
};

Bumblebee.onclick = function() {
  if (titan == "Bumblebee") {
    header.innerHTML = "<h1>That's whats up!</h1>";
    footer.innerHTML = "<a href='./index.html'>play again</a>";
    Bumblebee.parentElement.classList.add("correct");
  } else {
    Bumblebee.classList.add("selected");
    Bumblebee.parentElement.classList.add("selected");
    guesses++;
    header.innerHTML = "<h1>Nuh uh</h1>";
  }
};
