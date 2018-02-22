var fecini=document.getElementById("fechaInicio").value;
var capital=document.getElementById("Euros").value;
var meses=document.getElementById("Meses").value;
var interesas=document.getElementById("intereses").value;
var resultat=100;
function calulohipoteca() {
    
    return "Pagaràs una hipoteca de "+resultat+"€ mensuals ";

    

    document.getElementById("resultats").innerHTML="Pagaràs una hipoteca de 1000€ mensuals ";

} 
function comprovarcapital(capital) {
    if (capital>1000000) {
        alert("no se puede superar el millón de euros de hipoteca");
    }
}

