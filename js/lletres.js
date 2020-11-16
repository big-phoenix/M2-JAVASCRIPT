let nom = ['j','o','s','e','j','a','v','i','e','r'];
let cognom = ['b','e','n','i','t','o'];

nom.push(' ');
console.log(nom.concat(cognom));
document.getElementById("respueta").innerHTML += nom.concat(cognom);