console.log("Empecemos a romper chicos!! ");

const bBurger = document.querySelector("#bBurger");
const links = document.querySelector("#links");

bBurger.addEventListener("click", (e) => {
  links.classList.toggle("collapse");
})