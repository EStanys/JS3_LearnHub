"use strict";

const header = document.createElement("h4");

header.innerHTML = "1990.03.13";
const bodyEl = document.querySelector("body");

bodyEl.insertAdjacentElement("beforeend", header);

fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => response.json())
  .then((data) => jokeHandler(data))
  .catch((err) => console.warn(err));

function jokeHandler(data) {
  const jokeEl = document.getElementById("chuck-header");
  console.log(data);

  const joke = data.value;
  jokeEl.after(joke);
}
