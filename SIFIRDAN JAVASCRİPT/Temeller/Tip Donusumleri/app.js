let value;

// veritiplerini string e cevirme

// value = 123; > böyle veritipi number
value = String(123); // böyle ise stringe döndürdük

value = String(3.14);
value = String(true);

value = (10).toString(); // farklı yazım stringe çevirme


// veritiplerini sayılara cevirme
value = Number("123");
value = Number(null);
value = Number(undefined); // tipi numbera döner boş zaten
value = Number("Hello World"); // NaN döndürür boş ama tipi number olur
value = Number([1,2,3,4]);


value = Number("3.14"); // döner
value = parseFloat("3.14");


value  = parseInt("3");


console.log(value);
console.log(typeof value);

const a = "Hello" + "34"; // Hello34 olur ve tipi string

console.log(a);
console.log(typeof a);

const b = "34" + 54 ; // 3454 yazar 

console.log(b);
console.log(typeof b);

const c = Number("34") + 54 ; // 88 yazar 

console.log(c);
console.log(typeof c);