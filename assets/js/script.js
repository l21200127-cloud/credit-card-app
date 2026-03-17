const number = document.getElementById("number");
const name = document.getElementById("name");
const month = document.getElementById("month");
const year = document.getElementById("year");

// Número
number.addEventListener("input", () => {
    let value = number.value.replace(/\D/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();

    document.getElementById("card-number").innerText = value || "#### #### #### ####";

    if(value.startsWith("4")){
        document.getElementById("card-type").innerText = "VISA";
    } else if(value.startsWith("5")){
        document.getElementById("card-type").innerText = "MASTERCARD";
    } else {
        document.getElementById("card-type").innerText = "CARD";
    }
});

// Nombre
name.addEventListener("input", () => {
    document.getElementById("card-name").innerText =
        name.value.toUpperCase() || "FULL NAME";
});

// Fecha (selects)
function updateDate(){
    const m = month.value;
    const y = year.value;

    document.getElementById("card-exp").innerText =
        (m && y) ? `${m}/${y}` : "MM/YY";
}

month.addEventListener("change", updateDate);
year.addEventListener("change", updateDate);

// Botón
document.querySelector("button").addEventListener("click", () => {
    if(number.value.length < 16){
        alert("Número de tarjeta inválido");
    } else if(name.value === ""){
        alert("Ingresa el nombre");
    } else {
        alert("Pago procesado (simulación)");
    }
});