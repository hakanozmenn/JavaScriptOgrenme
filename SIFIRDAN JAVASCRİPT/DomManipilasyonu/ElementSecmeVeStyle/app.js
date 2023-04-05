const element = document.querySelector("#clear-todos");

// Element özellikleri


// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
//console.log(element.style);

// style ve element özelliklerini değiştirme

// element.className = "btn btn-primary";
// element.style.color = "#000";
// element.style.marginleft = "66px";
// element.href = "https://www.google.com.tr/?hl=tr";
// element.target = "_blank";

// element.textContent = "sil kank";
// element.innerHTML = "<span style = 'color:green'>Silin</span>";


let element2 =  document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelectorAll("li:nth-child(odd)");

element2.forEach(function(e){
    e.style.background = "green";
});

// const elements = document.querySelectorAll(".list-group-item");
// elements.forEach(function(a){
//     a.style.color = "red";
//     a.style.background = "#eee";
// });

console.log(element2);




// console.log(element);