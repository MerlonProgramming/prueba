const list = document.getElementById("list");
const grid = document.getElementById("grid");
const change = document.getElementById("change");
const avatar = document.getElementById("avatar");
const cards1 = document.getElementById("cards1");
const cards2 = document.getElementById("cards2");
const cards3 = document.getElementById("cards3");
const cards4 = document.getElementById("cards4");
const cards5 = document.getElementById("cards5");
const cards6 = document.getElementById("cards6");

list.addEventListener("click", () => {
     change.classList.remove("grid-cols-3");
     change.classList.add("grid-cols-1");
     //---------------------
     cards1.classList.remove("w-5/6");
     cards1.classList.add("w-1/3");
     //---------------------
     cards2.classList.remove("w-5/6");
     cards2.classList.add("w-1/3");
     //---------------------
     cards3.classList.remove("w-5/6");
     cards3.classList.add("w-1/3");
     //---------------------
     cards4.classList.remove("w-5/6");
     cards4.classList.add("w-1/3");
     //---------------------
     cards5.classList.remove("w-5/6");
     cards5.classList.add("w-1/3");
     //---------------------
     cards6.classList.remove("w-5/6");
     cards6.classList.add("w-1/3");
});

grid.addEventListener("click", () => {
     change.classList.remove("grid-cols-1");
     change.classList.add("grid-cols-3");
     //---------------------
     cards1.classList.add("w-5/6");
     cards1.classList.remove("w-1/3");
     //---------------------
     cards2.classList.add("w-5/6");
     cards2.classList.remove("w-1/3");
     //---------------------
     cards3.classList.add("w-5/6");
     cards3.classList.remove("w-1/3");
     //---------------------
     cards4.classList.add("w-5/6");
     cards4.classList.remove("w-1/3");
     //---------------------
     cards5.classList.add("w-5/6");
     cards5.classList.remove("w-1/3");
     //---------------------
     cards6.classList.add("w-5/6");
     cards6.classList.remove("w-1/3");
});
