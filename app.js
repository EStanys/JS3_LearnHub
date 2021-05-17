"use strict";

const header = document.createElement("h4");

header.innerHTML = "1990.03.13";
const bodyEl = document.querySelector("body");

bodyEl.insertAdjacentElement("beforeend", header);
