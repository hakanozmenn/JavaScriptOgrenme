const name = "hakan özmen falan";
const deparment = "bilişim";
const salary = 4000;

// const a = "Adı: " + name + "\n" + "Departmanı: " + deparment + "\n" + "Maaşı: " + salary + "\n";

// const a = `İsim:${name}\nDepartman:${deparment}\nMaaş:${salary}`; // yukarıdakının kısa hali

const html = `
 <ul>
<li>${name}</li>
<li>${deparment}</li>
<li>${salary}</li>
</ul>
`;

document.body.innerHTML = html;



console.log(a);