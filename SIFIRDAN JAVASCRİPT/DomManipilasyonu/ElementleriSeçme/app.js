// elementi ıd e göre seçme

let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

// element class a göre secme

element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("list-group-item")[0];
element = document.getElementsByClassName("container");

// element tag e  göre secme

element = document.getElementsByTagName("li");

// query selector - css selector - tek bir element 

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group-item");

element = document.querySelector("li");
element = document.querySelector("div");

// queryselectorAll - tüm elementleri seç
element = document.querySelectorAll(".list-group-item"); // node list

element.forEach(function(el){
    console.log(el);
});



//console.log(element);