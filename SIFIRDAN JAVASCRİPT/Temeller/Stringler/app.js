let value;

const firstName = "Louis";
const lastName = "Armstorng";

const langs = "java,pyhton,c++";

value = firstName + lastName; //arada boşluk olmadan 

value = firstName + " " + lastName; // arada boşluk var

value = "mustafa murat";

value = value + "çoskun"; // mustafa muratçoşkun çıktııs
value += "Çoskun"; // yukarıdaki ile aynı

value = firstName.length;

value = firstName.concat(" ",lastName," ","caz"); // louis armstrong caz çıktııs bu

value = firstName.toLowerCase(); //kucuk harfe döndürür

value = firstName.toUpperCase(); // büyük harfe döndür

value = firstName[0]; // kelimenin 0ncı indeksini alır L
value = firstName[firstName.length - 5]; // gene L yi verir

// index of
value = firstName.indexOf("L"); // harfin kaçıncı indexte oldugunu sçyluyo

// char at
value = firstName.charAt(0); //indekse göre ne varsa verir

// split
value = langs.split(","); // virgüle göre parcalıyor 

// replace
value = langs.replace("pyhton","css"); //pyhtonu çıkarıp css yazar

// ıncludes
value = langs.includes("java"); //içinde java varsa true döner
value = langs.includes("hakan"); // false döndürür

console.log(value);