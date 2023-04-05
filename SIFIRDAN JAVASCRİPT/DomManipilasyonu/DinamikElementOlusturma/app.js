// Yeni element olusturma

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn-btn-danger";
newLink.href = "http://www.google.com.tr";
newLink.target = "_blank";

newLink.appendChild(document.createTextNode("farklı sayfaya git"));

cardbody.appendChild(newLink);


// Text content
// newLink.textContent = "Farklı sayfaya git"; //her zaman kullanmak mantıklı değil textcontenti

// // Text Node - elementin cıcugu seklinde ekliyo
// const text = document.createTextNode("Naber");
// cardbody.appendChild(text);



console.log(newLink);