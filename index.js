// numer entered
function start(){
    let num = 0
    // take value from input
    num = document.getElementById("numberin").value ;
    // insert value from input to html 
    document.getElementById("numberchange").innerHTML = num ;
    let fet = 0 ;
    let met = 0 ;
    let liter = 0 ;
    let galon = 0 ;
    let kilo = 0 ;
    let pound = 0 ;
    // formula
    fet = num * 3.2808399 ;
    met = num * 0.3048 ; 
    liter = num * 0.264172052 ;
    galon = num * 3.78541178 ;
    kilo = num * 2.20462262 ;
    pound = num * 0.45359237 ;
    // decimal points
    fet = fet.toFixed(3);
    met = met.toFixed(3);
    liter = liter.toFixed(3);
    galon = galon.toFixed(3);
    kilo = kilo.toFixed(3);
    pound = pound.toFixed(3);
    // result 
    conlen.textContent = document.getElementById("numberchange").textContent +" meters = "+ fet + " feet | " + document.getElementById("numberchange").textContent + " feet = "+ met + " meters"
    convol.textContent = document.querySelector("#numberchange").textContent +" liters = "+ liter + " galon | " + document.getElementById("numberchange").textContent + " galon = "+ galon + " liters"
    conkilo.textContent = document.getElementById("numberchange").textContent +" kilos = "+ kilo + " pounds | " + document.getElementById("numberchange").textContent + " pound = "+ pound + " kilos"

}

  