function calcul () {
    var inicio=new Date(document.getElementById("fechainicio").value);
    var capital=parseInt(document.getElementById("Euros").value);
    var interes=parseInt(document.getElementById("intereses").value);
    var meses=parseInt(document.getElementById("Meses").value);
    var fechafinal=fechafinal(inicio);
    
    
}

//Funció per tractament d'errors. Volem que l'usuari ens introdueixi una data no inferior a la data actual i que el primer dia per al càlcul de la hipoteca sigui dia 1 de cada mes.

function errores () {
    var inicio=new Date(document.getElementById("fechainicio").value);
    var erroresfecha=document.getElementById("fechainicio").value;
    
    if (inicio<new Date()){
        alert("la fecha de inicio no puede ser inferior a la fecha actual");
        return false;
    }
    if (rerroresfecha.substring(8,11)!="01"){
        alert("La data ha de ser el primer dia de cada mes.");
        return false;
    }
    return true;
    
}


//Funció per saber quin dia acabarem de pagar la hipoteca.
function fechafinal() {
    var inicio=new Date(document.getElementById("fechainicio").value);
    var meses=parseInt(document.getElementById("Meses").value);
    var fechafinal=inicio;
    fechafinal.setFullYear(fechafinal.getFullYear()+(meses/12));
    return fechafinal;
}

//Funció per calcular la quota de la hipoteca.
function calculohipoteca () {
    // hem de convertir a integer amb un parseInt
    var capital=parseInt(document.getElementById("Euros").value);
    var interes=parseInt(document.getElementById("intereses").value);
    var meses=parseInt(document.getElementById("Meses").value);
    var fechafinal=fechafinal();
    
    if (errores()) {
        cuota=((capital*interes)/100*(1-Math.pow(1+(interes/100)), (meses/12))/12);
        
        //Aquest és el missatge que apareix quan l'usuari fa clic a "enviar". Es calcula la quota de la hipoteca i quan s'acabarà de pagar. Aquest resultat apareix en un "div" a la pàgina web index.
        
        document.getElementById("resultats").innerHTML = "La data de l'última quota de la teva hipoteca serà el dia "+fechafinal.getDate()+"/"+fechafinal.getMonth()+"/"+fechafinal.getFullYear()+ " i la quota de la teva hipoteca serà de "+cuota.toFixed(2)+ " €.";    
    } 
    return false;
    
    
}