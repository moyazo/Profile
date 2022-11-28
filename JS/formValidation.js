"use strict"

let name = "Manuel";
let email = "manuel.moyavadillo@gmail.com";
let ps = "ilerna1234";



document.addEventListener("submit", () => {
    const nameDOM = document.getElementById("name").value;
    const emailDOM = document.getElementById("email").value;
    const psDOM = document.getElementById("ps").value;

    console.log(nameDOM);

})