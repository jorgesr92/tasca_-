addEventListener('load',inicio,false);
function inicio()
{
    document.getElementById('termini').addEventListener('change',cambiomeses,false);
}
function cambiomeses()
{    
    document.getElementById('mes').innerHTML=document.getElementById('termini').value;
}


addEventListener('load',inicio1,false);
function inicio1()
{
    document.getElementById('capital').addEventListener('change',cambiocapital,false);
}
function cambiocapital()
{    
    document.getElementById('euro').innerHTML=document.getElementById('capital').value;
}

function errors () {
    var datainici=new Date(document.getElementById("datainici").value);
    var datainicierrors=document.getElementById("datainici").value;
    
    if (datainici<new Date()){
        alert("La fecha de la primera cuota no puede ser inferior a la de hoy.");
        return false;
    }
    if (datainicierrors.substring(8,11)!="01"){
        alert("el dia de la fecha tiene que se el primero de cada mes.");
        return false;
    }
    return true;
    
}



function datafi () {
    var datainici=new Date(document.getElementById("datainici").value);
    var termini=parseInt(document.getElementById("termini").value);
    var datafi=datainici;
    datafi.setFullYear(datafi.getFullYear()+termini);
    return datafi;
}


function calculHipoteca () {
    
    var capital=document.getElementById("capital").value;
    var interes=document.getElementById("interes").value;
    var termini=parseInt(document.getElementById("termini").value);
    var datafinal=datafi();
    var capital1=inicio1();
    var termini1=inicio();
    
    if (errors()) {

       

        quota=((capital*(interes/12))/(100*(1-Math.pow(1+(interes/(12*100)), (termini*12)*-1))));
        
       
        
        document.getElementById("resultat").innerHTML = "La data de l'última quota de la teva hipoteca serà el dia "+datafinal.getDate()+"/"+datafinal.getMonth()+"/"+datafinal.getFullYear()+ " i la quota de la teva hipoteca serà de "+quota.toFixed(2)+ " € con un interes del "+interes;    
    } 
    return false;
    
    
}