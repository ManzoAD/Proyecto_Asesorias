/* const canvasLogo = document.getElementById('canLogo');
const canvasRedes= document.getElementById('can_Network');

const lienzoCL= canvasLogo.getContext("2d");
const lienzoRd = canvasRedes.getContext("2d");

function dibujarLinea(color,Xinicial,Yinicial,Xfinal,Yfinal,lienzo){
    lienzo.beginPath(); //Comenzamos el dibujo
    lienzo.strokeStyle = color; //Decidimos el color de la linea
    lienzo.moveTo(Xinicial,Yinicial); // Posicionamos el punto
    lienzo.lineTo(Xfinal,Yfinal); // Creamos una linea diagonal
    lienzo.stroke(); //Trazamos la linea
    lienzo.closePath(); // Terminamos de dibujar
}
function dibujarCirculo(color,Xinicial,Yinicial,Xfinal,Yfinal,lienzo){

} */

//Mostrar el menu
const menuHamburger = document.getElementById("menuh");
const menuNot = document.getElementById("menunotif");

const notifiAside = document.querySelector('.avisado');
const linknotifi = document.querySelector('.lknotifi');
const borra = document.querySelector("#borra");
borra.addEventListener("click", function(){
    notifiAside.classList.toggle('inactive');
})
linknotifi.addEventListener("click" ,function(){
notifiAside.classList.toggle('inactive')
console.log("click")
});
const menu =document.querySelector(".menu_mobile");
const notifi= document.querySelector(".notificaciones");
const main = document.querySelector(".myMain");

const asideM = document.querySelector("#asideMenu");


menuHamburger.addEventListener("click",mostrarMenu);
menuNot.addEventListener("click",mostrarNotificaciones);
main.addEventListener("click",ocultarMenus);

function mostrarNotificaciones(){
    notifi.classList.toggle('inactive');
    main.classList.toggle('opacar');
    console.log("presionado");
    if(!menu.classList.contains('inactive')){
         menu.classList.toggle('inactive');
         main.classList.toggle('opacar');
    }
}
function mostrarMenu(){
     menu.classList.toggle('inactive');
     main.classList.toggle('opacar');
    console.log("Boton Presionado");
    if(!notifi.classList.contains('inactive')){
         notifi.classList.toggle('inactive');
         main.classList.toggle('opacar');
    }
}

function ocultarMenus(){
    if(!menu.classList.contains('inactive')){
        menu.classList.toggle('inactive');
         main.classList.toggle('opacar'); 
    }
    if(!notifi.classList.contains('inactive')){
        notifi.classList.toggle('inactive');
        main.classList.toggle('opacar'); 
    }
}



