
import { pedirCarta, crearCartaHtml, valorCarta } from "./index";

export const turnoComputadora = ( puntosMinimos, deck, puntosHTML, divCartasComputadora ) => {

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = puntosComputadora + valorCarta( carta );
        // todo: Arreglar puntosHTML
        puntosHTML[1].innerText = puntosComputadora;
        


        crearCartaHtml(carta, divCartasComputadora);

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}   