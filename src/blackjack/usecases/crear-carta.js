export const crearCartaHtml = (carta, divCartas) => {


            // <img class="carta" src="assets/cartas/2C.png">
        
        // Crear elemento de imagen para la carta
        const imgCarta = document.createElement('img');
        // Establecer la ruta de la imagen usando el valor de la carta (ej: 3H.png, JD.png)
        imgCarta.src = `assets/cartas/${ carta }.png`;
        // Agregar la clase CSS 'carta' para darle estilo
        imgCarta.classList.add('carta');
        // Agregar la imagen de la carta al contenedor de cartas de la computadora
        divCartas.append( imgCarta );

}