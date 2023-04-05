let value;

const now = new Date(); // şu anki zamanı almamızı saglar

const date1 = new Date("1-25-2000 14:14:14");

const date2 = new Date("January 25 2000");

const date3 = new Date("1/25/2000");

value = date1;

value = date1.getMonth(); //kaçıncı ay oldugunu verioy
value = date1.getDate(); // kaçıncı gun oldugunu
value = date1.getDay(); //haftanın kaçıncı gunu onu veriyp

value = date1.getHours(); // saati veryo
value = date1.getMinutes(); // dakika
value = date1.getSeconds(); //saniye
value = date1.getMilliseconds(); // mili saniye

date1.setMonth(4); // yukardaki tarih degerlerini değiştiriyoruz
date1.setDate(19);
date1.setFullYear(1999);
date1.setHours(12);
date1.setMinutes(15);
date1.setSeconds(31);

value = date1;




console.log(value);