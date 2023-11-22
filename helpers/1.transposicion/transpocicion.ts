export function cifradoPorGrupos(mensaje: string, tamañoGrupo: number): string {
    let resultado = '';
    for (let i = 0; i < mensaje.length; i += tamañoGrupo) {
        resultado += mensaje.substr(i, tamañoGrupo).split('').reverse().join('');
    }
    return resultado;
}

// Ejemplo de uso
//   const mensajeOriginalPorGrupos = 'CIFRADOPOREQUIPOS';
//   const tamañoGrupo = 4;
//   const mensajeCifradoPorGrupos = cifradoPorGrupos(mensajeOriginalPorGrupos, tamañoGrupo);
//   console.log("Mensaje Original por Grupos:", mensajeOriginalPorGrupos);
//   console.log("Mensaje Cifrado por Grupos:", mensajeCifradoPorGrupos);

export function cifradoPorSeries(mensaje: string, serie: number[]): string {
    const mensajeArray = mensaje.split('');
    const resultado = serie.map(i => mensajeArray[i - 1]).join('');
    return resultado;
}

// Ejemplo de uso
//   const mensajeOriginalPorSeries = 'CIFRADO';
//   const serie = [3, 1, 4, 2, 6, 5];
//   const mensajeCifradoPorSeries = cifradoPorSeries(mensajeOriginalPorSeries, serie);
//   console.log("Mensaje Original por Series:", mensajeOriginalPorSeries);
//   console.log("Mensaje Cifrado por Series:", mensajeCifradoPorSeries);

export function cifradoZigZag(mensaje: string, líneas: number): string {
    const matriz: string[][] = Array.from({ length: líneas }, () => []);

    let fila = 0;
    let dirección = 1;

    for (const letra of mensaje) {
        matriz[fila].push(letra);
        fila += dirección;

        if (fila === líneas - 1 || fila === 0) {
            dirección *= -1;
        }
    }

    const resultado = matriz.flatMap(fila => fila).join('');
    return resultado;
}

// Ejemplo de uso
//   const mensajeOriginalZigZag = 'CIFRADOZIGZAG';
//   const líneasZigZag = 4;
//   const mensajeCifradoZigZag = cifradoZigZag(mensajeOriginalZigZag, líneasZigZag);
//   console.log("Mensaje Original Zig-Zag:", mensajeOriginalZigZag);
//   console.log("Mensaje Cifrado Zig-Zag:", mensajeCifradoZigZag);


/**
 * ESTOS ALGORITMOS SON AUTOREVERSIBLES PARA EL DESCIFRADO
 */
