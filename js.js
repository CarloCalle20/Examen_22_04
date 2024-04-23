function CalcularTemperatura(){
    //(°F − 32) × 5/9 = °C 
    const temp = document.getElementById("temp").value;

    const res = (parseInt(temp) - 32) * 5/9;

    document.getElementById("temp").value = "";

    var msg = "La temperatura calculada es " + res + "°C.";

    alert(msg);
}