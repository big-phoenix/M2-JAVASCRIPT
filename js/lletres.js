let mapa = new Map();
let nom = ['j','o','s','e','j','a','v','i','e','r'];


console.log(nom);

for(i=0; i < nom.length; i++){

    let num = 0;

    for(vocal of nom){

        if(vocal == nom[i]){
            num++;
        }

    }

    mapa.set(nom[i], num);

}

console.log(mapa);