// -------------------------------------
// Gestión de pestañas (NO MODIFICAR)
// -------------------------------------

const tabButtons = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll(".panel");

for (const button of tabButtons) {
    button.addEventListener("click", function () {
        const targetId = button.dataset.tab;

        for (const tabButton of tabButtons) {
            tabButton.classList.remove("active");
        }

        for (const panel of panels) {
            panel.classList.remove("active");
        }

        button.classList.add("active");
        document.getElementById(targetId).classList.add("active");
    });
}

// -------------------------------------
// 1. Adivina el número
// -------------------------------------

// TODO: Variables del juego
const inputNumero= document.querySelector("#inputNumero");
const btnComprobarNumero= document.querySelector("#btnComprobarNumero");
const btnReiniciarNumero= document.querySelector("#btnReiniciarNumero");
const intentosNumero= document.querySelector("#intentosNumero");
const mensajeNumero= document.querySelector("#mensajeNumero");

let numeroRandom;
let contadorIntentos= 0;
let numerosUsados= [];

// TODO: Funciones del juego
function generarNumero() {
    return Math.floor(Math.random() * 100) + 1;
}

function imprimirMensajeTemporal(mensaje) {
    mensajeNumero.textContent= mensaje;
    setTimeout(() => mensajeNumero.textContent= "", 3000);
}

function leerNumero() {
    const valorIntento= Number(inputNumero.value.trim());

    if(valorIntento < 1 || valorIntento > 100 || valorIntento === "") {
        imprimirMensajeTemporal("Introduce un numero entre 1 y 100");
        return;

    } else if(buscarRepetido(valorIntento)){
        imprimirMensajeTemporal("Ese numero ya ha sido introducido antes");
        return;

    } else {
        numerosUsados.push(valorIntento);
        contadorIntentos++;
        intentosNumero.textContent= contadorIntentos;
        return valorIntento;
    }
}

function buscarRepetido(valorIntento) {
    for(let i=0; i< numerosUsados.length; i++) {
        if(valorIntento === numerosUsados[i]) {
            return true;
        }
    }
    return false; 
}

function comprobarNumero() {
    //SRG - Avisa si el numero Random es mayor o menor que el numero del usuario
    let numero= leerNumero();
    let diferenciaMayor= numeroRandom - numero;
    let diferenciaMenor= numero - numeroRandom;

    if(numeroRandom > numero) {
        //El numero Random es mayor
        if(diferenciaMayor > 20 ) {
            imprimirMensajeTemporal("Frio, Frio. El numero es Mayor");

        } else if(diferenciaMayor > 10 && diferenciaMayor < 20){
            imprimirMensajeTemporal("Caliente, Caliente. El numero es mayor");

        } else if(diferenciaMayor < 10){
            imprimirMensajeTemporal("Caliente, Caliente. El numero es mayor");

        }

    } else if(numeroRandom < numero) {
        //El numero Random es menor
        if(diferenciaMenor > 20 ) {
            imprimirMensajeTemporal("Frio, Frio. El numero es menor");

        } else if(diferenciaMenor > 10 && diferenciaMenor < 20){
            imprimirMensajeTemporal("Caliente, Caliente. El numero es menor");

        } else if(diferenciaMenor < 10){
            imprimirMensajeTemporal("¡Cuidado que te quemas!. El numero es menor");
        }

    } else if(numeroRandom === numero){
        mensajeNumero.textContent= "¡HAS GANADO!";
    } 

    inputNumero.value= "";
    inputNumero.focus();
}

// TODO: Eventos del juego
btnComprobarNumero.addEventListener("click", comprobarNumero);

inputNumero.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
      comprobarNumero();
    }
  });

btnReiniciarNumero.addEventListener("click", () => {
    contadorIntentos= 0;
    intentosNumero.textContent= "0"
    numerosUsados= [];
    mensajeNumero.textContent= "";
    inputNumero.value= "";
    inputNumero.focus();
    numeroRandom= generarNumero();
});

numeroRandom= generarNumero();

// -------------------------------------
// 2. Siete y medio
// -------------------------------------

// TODO: Variables del juego

// TODO: Funciones del juego

// TODO: Eventos del juego


// -------------------------------------
// 3. Piedra, papel o tijera
// -------------------------------------

// TODO: Variables del juego

// TODO: Funciones del juego

// TODO: Eventos del juego