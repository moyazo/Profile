
// ANIMACIÓN 1
window.addEventListener("scroll", () =>{

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");

console.log(window.scrollY);
if(window.scrollY >= 400){
img1.setAttribute("class","visible");
img2.setAttribute("class","visible");
img3.setAttribute("class","visible");
}else{
    img1.setAttribute("class","hidden");
    img2.setAttribute("class","hidden");
    img3.setAttribute("class","hidden");
}

if(window.scrollY >= 1261){
        img1.setAttribute("class","hidden");
        img2.setAttribute("class","hidden");
        img3.setAttribute("class","hidden");
        img4.setAttribute("class","visible");
        img5.setAttribute("class","visible");
        img6.setAttribute("class","visible");
    }else{
        img4.setAttribute("class","hidden");
        img5.setAttribute("class","hidden")
        img6.setAttribute("class","hidden");
    }


})

