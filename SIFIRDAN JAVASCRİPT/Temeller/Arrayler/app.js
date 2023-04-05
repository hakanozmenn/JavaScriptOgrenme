let value;

const numbers = [43,55,87,99,21,7];

// const numbers2 = new Array(1,2,3,4,5,6,7); // yukardakı ile aynı

const langs = ["Pyhton","Java","C++","Javascript"];

const a = ["Merhaba", 22,null,undefined,3.14];

// uzunluk
value = numbers.length;
// Indekslenme
value = numbers.indexOf(55); //55 kacınıc indekste onu buldu
value = numbers[3];
value = numbers[numbers.length - 1]; //sonuncu terimi verir 7

// Herhangi bir indeksteki değeri değiştirme
numbers[2] = 1000;
value = numbers;

// ındex of
value = numbers.indexOf(1000);

// arrayin sonuna değer ekleme -push
numbers.push(2000);
value = numbers;

// arrayin başına değer ekleme
numbers.unshift(147);
value = numbers;

// sonundan değer atma
numbers.pop();
value= numbers;

// başından değer atma
numbers.shift();
value = numbers;

// belli bir indkesten belli bir indekse
numbers.splice(0,2); //0,1 indekstekini attı
value = numbers;

// reverse tam terse cevirme
numbers.reverse();
value = numbers;

// sıralama
value = numbers.sort();

value = numbers.sort(function(x,y){ //kücükten buyuge
 return x - y;
});

value = numbers.sort(function(x,y){ //büyükten kucuge
    return y - x;
   });


console.log(value);