const btnopen = document.querySelector("#btnopen");
const btnclose = document.querySelector("#btnclose");
const nav = document.querySelector("#nav");

function abrirmenu() {
  nav.classList.add("active");
}

function fecharmenu() {
  nav.classList.remove("active");
}

btnopen.addEventListener("click", abrirmenu);
btnclose.addEventListener("click", fecharmenu);

