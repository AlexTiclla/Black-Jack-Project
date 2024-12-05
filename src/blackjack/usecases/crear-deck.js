import _ from 'underscore';
// export const miNombre = 'Alex';

// Esta función crea un nuevo deck

/**
 * Funcion que crea un deck
 * @param {Array<string>} tipos ['C','D','H','S']
 * @param {Array<string>} especiales ['A','J','Q','K']
 * @returns {Array<string>} Retorna una baraja, ya mezclada
 */
export const crearDeck = (tipos, especiales) => {
    if (!tipos || !Array.isArray(tipos) || tipos.length === 0) {
        throw new Error('tipos debe ser un arreglo de strings no vacío');
    }

    if (!especiales || !Array.isArray(especiales) || especiales.length === 0) {
        throw new Error('especiales debe ser un arreglo de strings no vacío');
    }

    if (!tipos.every(tipo => typeof tipo === 'string')) {
        throw new Error('todos los elementos en tipos deben ser strings');
    }

    if (!especiales.every(esp => typeof esp === 'string')) {
        throw new Error('todos los elementos en especiales deben ser strings');
    }

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    // console.log( deck );
    return deck;
}

// export default crearDeck;
