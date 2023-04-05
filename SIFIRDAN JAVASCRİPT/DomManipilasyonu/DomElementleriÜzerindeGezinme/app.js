let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");


value = todoList;
value = todo;
value = cardrow;

// Child Nodes

value = todoList.childNodes;
value = todoList.childNodes[0];

// Children - Element

value = todoList.children;
value = todoList.children[0];
value = todoList.children[1].textContent = "Hakan";

value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "BURASI DEĞİŞTİ";

value = todoList;
value = todoList.firstElementChild; //ilk cocugua
value = todoList.lastElementChild; // son cocuga
value = todoList.children.length; //kaç cocuklu oldugu
value = todoList.childElementCount; //bu da kaç cocuklu oldugu

value = cardrow;
value = cardrow.parentElement; // bir üst üyesi 
value = cardrow.parentElement.parentElement;

// Element kardeşleri

value = todo;

value = todo.previousElementSibling; //bir önceki kardeşe git
value = todo.nextElementSibling; // bir sonraki kardeşe git



console.log(value);