let nom = ['j','o','s','e','j','a','v','i','e','r'];
let vocales = ["a","e","i","o","u"];
let vocal = false;

for(i=0; i < nom.length; i++){

    let contador = 0;
    while(contador != vocales.length ){

        if(nom[i] == vocales[contador]){
            document.getElementById("respueta").innerHTML += "VOCAL: " +nom[i]+ "<br>";
            vocal=true;
            contador = vocales.length;
        } else {
            contador++;
        }

    }

    if(vocal != true){
        document.getElementById("respueta").innerHTML += "CONSONTANT <br>";
    }

    vocal=false;
    conatador = 0;

}