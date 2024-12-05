// import {crearDeck as createBaraja} from "./usecases/crear-deck"; alias
// import crearDeck from "./usecases/crear-deck";

import {crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHtml} from "./usecases";
// import {pedirCarta} from "./usecases/pedir-carta";
// import {valorCarta} from "./usecases/valor-carta";
// import {turnoComputadora} from "./usecases/turno-computadora";

// console.log(miNombre);

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck         = []; 
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

// Esta línea obtiene una referencia a todos los elementos HTML con la etiqueta 'small'
// y los almacena en un arreglo llamado puntosHTML. Estos elementos se usan para 
// mostrar la puntuación del jugador y la computadora en el juego.
/* <small>0</small> */
const puntosHTML = document.querySelectorAll('small');


deck = crearDeck(tipos, especiales);










// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta(deck);
    
    puntosJugador = puntosJugador + valorCarta( carta );    
    // en puntoshtml estan guardados dos elementos, jugador[0], computador[1]
    puntosHTML[0].innerText = puntosJugador;
    
    // <img class="carta" src="assets/cartas/2C.png">
    // const imgCarta = document.createElement('img');
    // imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    // imgCarta.classList.add('carta');
    // divCartasJugador.append( imgCarta );


    
    crearCartaHtml(carta, divCartasJugador);

    if ( puntosJugador > 21 ) {

        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, deck, puntosHTML, divCartasComputadora );

    } else if ( puntosJugador === 21 ) {

        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, deck, puntosHTML, divCartasComputadora );
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador, deck, puntosHTML, divCartasComputadora );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});

