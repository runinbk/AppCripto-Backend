export function cifradoPorBloques(mensaje: string, longitudBloque: number): string {
    const bloques: string[] = [];
    const cantidadBloques = Math.ceil(mensaje.length / longitudBloque);

    // Paso 1: Dividir el mensaje en bloques
    for (let i = 0; i < cantidadBloques; i++) {
        bloques.push(mensaje.slice(i * longitudBloque, (i + 1) * longitudBloque));
    }

    // Paso 2: Aplicar una permutación a cada bloque (en este caso, transposición)
    const bloquesPermutados: string[] = bloques.map(bloque => permutarBloque(bloque));

    // Paso 3: Concatenar los bloques permutados para obtener el mensaje cifrado
    const mensajeCifrado: string = bloquesPermutados.join('');

    return mensajeCifrado;
}

function permutarBloque(bloque: string): string {
    // En este ejemplo, se realiza una transposición simple invirtiendo el orden de los caracteres
    return bloque.split('').reverse().join('');
}

/**
 * El cifrado por sustitución polialfabética periódico es autoreversible
 */

// Ejemplo de uso
//   const mensajeOriginal: string = "ESTEESUNMENSAJE";
//   const longitudBloque: number = 4;

//   const mensajeCifrado: string = cifradoPorBloques(mensajeOriginal, longitudBloque);
//   console.log("Mensaje Original:", mensajeOriginal);
//   console.log("Mensaje Cifrado:", mensajeCifrado);
