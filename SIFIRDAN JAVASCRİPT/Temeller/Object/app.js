let value;

const programmer = {
    name : "Hakan Özmen",
    age : 25,
    email : "hakanozmen@gmail.com",
    langs : ["java","c++","javascript"],

    address: {
        city : "ankara",
        street : "gölbaşı"
    },

    work : function(){
        console.log("programcı çalışıyor...");
    }

}

value = programmer; // tüm bilgilerini console yazar
value = programmer.email; // email bilgisini console yazar

value = programmer.langs; // langs ı yazar

value = programmer.address.city; // ankarayı yazar

programmer.work();

const programmers = [
    {name:"ahmet faruk",age:25},
    {name:"mehmet salam",age:24}
];

value = programmers[0].name; // ahmet faruk u adını yazar



console.log(value);