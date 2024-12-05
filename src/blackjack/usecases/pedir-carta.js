

/**
 * Pedir Carta de un deck dado
 * @param {Array<String>} deck es el mazo del cual se obtendra la ultima carta 
 * @returns Retorna una carta
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}