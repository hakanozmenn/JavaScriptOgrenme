// While döngüleri

// let i = 0;

// while(i < 10){

//     console.log(i);
//     i++;

// }

// let i = 10;

// while(i > 0){

//     console.log(i);

//     //i--; // birer azaltı
//     i -=2; // 2şer azaldı

// }


// Break ve continue

// let i = 0;

// while(i < 10){
//     console.log(i);
//     if(i==5){
//         break; // i nin degeri 5 olunca break ile durdurduk dönuguyu
//     }
//     i++;
// }

// while(i < 10){
//     if(i == 3 || i == 5){
//         continue;        // Burada döngüler 0,1,2de kalıyo
//     }
//     console.log(i);
//     i++;
// }

// while(i < 10){
//     if(i == 3 || i == 5){
//         i++;
//         continue;   //0,1,2,4,6,7,8,9
//     }
//     console.log(i);
//     i++;
// }


// Do While

// let i = 0;

// do {
//     console.log(i);
//     i++;

// }while(i < 10);


// For 
  
//while ile yaptık 
const langs = ["Pyhton","Javascript","Java"];

// let index = 0;

// while(index < langs.length){
//     console.log(langs[index]);

//     index++;
// }

// for ile yaptık

// for (let index =0;index < langs.length;index++){

//     console.log(langs[index]);
// }

//foreach

// langs.forEach(function(lang,index){
//     console.log(lang,index);
// });


 // map fonksiyonu
// const users = [
//     {name:"Hakan",age:25},
//     {name:"zeynep",age:24},
//     {name:"ayşe",age:41}
// ];

// const names = users.map(function(user){
//     return user.name;
// });

// const ages = users.map(function(user){
//     return user.age;
// });

// console.log(names);
// console.log(ages);

const user = {
    name:"Mustafa",
    age:25
};

for (let key in user){
    console.log(key,user[key]);
}

