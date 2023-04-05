// Fonksiyon tanımlama

// function merhaba(name = "Bilgi yok",age = "Bilgi yok"){

//     // if(typeof name === "undefined") name = "Bilgi Yok";

//     // if(typeof age === "undefined") age =  "Bilgi Yok";


//     console.log(`İsim: ${name} Yaş: ${age}`);
// }
// merhaba(); // Fonksiyon cagrısı (function call)

// merhaba("Murat",25); // Fonksiyon cagrısı (function call)

// merhaba("Ayşe",35);

// merhaba("Kadir"); // Kadir Bilgi yok diye çıkar

// function square(x){
//     return x*x;
// }
// function cube(x){
//     return x*x*x;
// }

// // let a = square(12);
// // a = cube(a);

// let a = cube(square(12)); // biöncekinin aynısı 

// console.log(a);

// function merhaba(){
//     return "Merhaba";
// }

// console.log(merhaba());

// Function expression

// const merhaba = function(name){
//     console.log("Merhaba" + name);
// }

// merhaba("Murat");

// Immediately Invoked Function Expression (IIFE)

// (function(name){
//     console.log("Merhaba: " + name);
// })("Murat");

// bir objenin içinde fonksion varsa bunlara metot deniyo , objenin dışında varsa fonksyion

const database = {
    host: "localhost",
    add: function(){
        console.log("Eklendi");
    },
    get: function(){
        console.log("Elde edildi");
    },
    update: function(id){
        console.log(`Id: ${id} Güncellendi`);
    },
    delete: function(id){
        console.log(`Id: ${id} Silindi`);
    },
}

console.log(database.host);

database.add();

database.delete(10);

database.update(77);

