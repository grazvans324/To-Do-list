const form = document.querySelector(".add");
const ul = document.querySelector("ul");
const input = document.querySelector(".input");
const ii = document.querySelector("i");
const li = document.querySelector("li");
const search = document.querySelector(".search input");
const list = document.querySelector(".todos");

//CREARE LISTA

form.addEventListener("submit", (e) => {
  e.preventDefault();
  ul.innerHTML += `<li class=" text-light list-group-item d-flex justify-content-between align-items-center">${input.value} <i class=" cls text-light far fa-trash-alt delete"></i></li>`;
});

//STERGERE LSTA

ul.addEventListener("click", function (event) {
  // verifica daca elementul pe care utilizatorul a facut clic este un element <i> cu clasa "delete"
  if (event.target.classList.contains("delete")) {
    // gasim elementul <li> parinte si il stergem din DOM
    const listItem = event.target.parentNode;
    listItem.parentNode.removeChild(listItem);
  }
});

//SEARCH BAR

// const filterTodos = (term) => {
//   Array.from(list.children).filter((todo) => {
//     !todo.textContent.includes(term).forEach((todo) => {
//       todo.classList.add("hidden");
//     });

//     Array.from(list.children).filter((todo) => {
//       !todo.textContent.includes(term).forEach((todo) => {
//         todo.classList.remove("hidden");
//       });
//     });

// search.addEventListener("keyup", (e) => {
//   e.preventDefault();
//   const term = search.value.trim();
//   filterTodos(term);
// });
