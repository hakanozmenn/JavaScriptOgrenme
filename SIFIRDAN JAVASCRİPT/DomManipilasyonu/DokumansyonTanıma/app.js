// // Window Object

// let value;

// value = document; //documnete ulaştık
// value = document.all; //documentin içinde ki herşeye ulaştık
// value = document.all.length; // documnet uzunluğuna baktık
// value = document.all[0]; //indekse göre elemnete baktık
// value = document.all[6];
// value = document.all[document.all.length - 1];

// //  const elements = document.all;
// // for(let i =0; i<elements.length;i++){
// //     console.log(elements[i]);
// // } //document icındeki elementleri sırayla verdi

// // elements.forEach(function(element){
// //     console.log(element);
// // }); //geçersiz olmaz html objeleri  foreach de olmaz

// // const collections = Array.from(document.all);

// // console.log(typeof collections); //object türünde oldugunu bulduk

// // collections.forEach(function(collection){
// //   console.log(collections);
// // });

value = document.all[8]; //body e ulaştık
value = document.body; //body nesnesi ile ualşatık
value = document.head; // head etkiketi ulastık
value = document.location;
value = document.location.hostname;
value = document.location.port;

value = document.URL;

console.log(value);