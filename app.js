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

// todos

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((resp) => resp.json())
  .then((data) => todosHandler(data.slice(0, 10)))
  .then((err) => console.warn(err));

function todosHandler(todosObjArr) {
  const ulEl = document.getElementById("todos");

  console.log(todosObjArr);

  todosObjArr.forEach((todo) => {
    let liEl = `<li>${todo.title}</li>`;
    ulEl.innerHTML += liEl;
  });
}
