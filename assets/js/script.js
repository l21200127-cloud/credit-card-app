const number = document.getElementById("number");
const name = document.getElementById("name");
const exp = document.getElementById("exp");

number.addEventListener("input", () => {
    let value = number.value.replace(/\D/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
    document.getElementById("card-number").innerText = value || "#### #### #### ####";
});

name.addEventListener("input", () => {
    document.getElementById("card-name").innerText = name.value.toUpperCase() || "FULL NAME";
});

exp.addEventListener("input", () => {
    document.getElementById("card-exp").innerText = exp.value || "MM/YY";
});