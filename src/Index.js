import './css/styles.css';
import Age from "./Space-age.js";

let age = new Age();

let handlerFunction = (event) => {
  event.preventDefault();

  let orgAge = document.querySelector("#orgAge").value;
  let ageDelta = document.querySelector("#ageDelta").value;
  
  age.age = parseInt(orgAge);
  age.ageDelta = parseInt(ageDelta);

  displayAnswers();
};

let displayAnswers = () => {

  let earth = document.querySelector("#earth");
  let mercury = document.querySelector("#mercury");
  let venus = document.querySelector("#venus");
  let mars = document.querySelector("#mars");
  let jupiter = document.querySelector("#jupiter");

  if (age.ageDelta < age.age) {
    earth.innerText = (age.age - age.ageDelta) + "  years has passed since you were " + age.ageDelta + " years old on Earth.";

    mercury.innerText = "You are " + age.mercury() + " years old on Mercury. " + age.ageDeltaPast + " years on Mercury have passed since you were " + age.ageDelta;

    venus.innerText = "You are " + age.venus() + " years old on Venus. " + age.ageDeltaPast + " years on Venus have passed since you were " + age.ageDelta;

    mars.innerText = "You are " + age.mars() + " years old on Mars. " + age.ageDeltaPast + " years on Mars have passed since you were " + age.ageDelta;

    jupiter.innerText = "You are " + age.jupiter() + " years old on Jupiter. " + age.ageDeltaPast + " years on Jupiter have passed since you were " + age.ageDelta;
    
  } else if (age.age < age.ageDelta) {
    earth.innerText = (age.ageDelta - age.age) + " more years on Earth until you are " + age.ageDelta + " years old.";

    mercury.innerText = "You are " + age.mercury() + " years old on Mercury. " + age.ageDeltaFuture + " years must pass on Mercury to be " + age.ageDelta + " on Earth.";

    venus.innerText = "You are " + age.venus() + " years old on Venus. " + age.ageDeltaFuture + " years must pass on Venus to be " + age.ageDelta + " on Earth.";

    mars.innerText = "You are " + age.mars() + " years old on Mars. " + age.ageDeltaFuture + " years must pass on Mars to be " + age.ageDelta + " on Earth.";

    jupiter.innerText = "You are " + age.jupiter() + " years old on Jupiter. " + age.ageDeltaFuture + " years must pass on Jupiter to be " + age.ageDelta + " on Earth.";

    mars.innerText = "You are " + age.mars() + " years old on Mars. " + age.ageDeltaPast + " years on Mars have passed since you were " + age.ageDelta;

  }
};

window.addEventListener("load", function() {
  let submit = document.querySelector("#submit");
  submit.addEventListener("click", handlerFunction);
});