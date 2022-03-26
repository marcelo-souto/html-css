const btnopen = document.querySelector("#btnopen");
const btnclose = document.querySelector("#btnclose");
const nav = document.querySelector("#nav");
const overlay = document.getElementById('overlay');

function abrirmenu() {
  nav.classList.add("active");
  overlay.style.backgroundColor = '#00000050';
  overlay.style.zIndex = '1';
}

function fecharmenu() {
  nav.classList.remove("active");
  overlay.style.backgroundColor = 'transparent';
  overlay.style.zIndex = '-1';
}

overlay.addEventListener('click', fecharmenu)
btnopen.addEventListener("click", abrirmenu);
btnclose.addEventListener("click", fecharmenu);

