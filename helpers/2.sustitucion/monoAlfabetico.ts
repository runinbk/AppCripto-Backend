export function cifradoMonoalfabético(texto: string, clave: string): string {
    const alfabetoOriginal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alfabetoCifrado = clave.toUpperCase();

    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        const letraOriginal = texto[i].toUpperCase();
        const indice = alfabetoOriginal.indexOf(letraOriginal);

        if (indice !== -1) {
            const letraCifrada = alfabetoCifrado[indice];
            resultado += letraCifrada;
        } else {
            resultado += letraOriginal; // Mantener caracteres no alfabéticos sin cambios
        }
    }

    return resultado;
}

export function descifradoMonoalfabético(textoCifrado: string, clave: string): string {
    const alfabetoOriginal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alfabetoCifrado = clave.toUpperCase();

    let resultado = '';

    for (let i = 0; i < textoCifrado.length; i++) {
        const letraCifrada = textoCifrado[i].toUpperCase();
        const indice = alfabetoCifrado.indexOf(letraCifrada);

        if (indice !== -1) {
            const letraOriginal = alfabetoOriginal[indice];
            resultado += letraOriginal;
        } else {
            resultado += letraCifrada; // Mantener caracteres no alfabéticos sin cambios
        }
    }

    return resultado;
}

//   // Ejemplo de uso
//   const mensajeCifrado = "QIWWP";
//   const claveMonoalfabética = "QWERTYUIOPASDFGHJKLZXCVBNM";

//   const mensajeDescifrado = descifradoMonoalfabético(mensajeCifrado, claveMonoalfabética);
//   console.log("Mensaje Cifrado:", mensajeCifrado);
//   console.log("Mensaje Descifrado:", mensajeDescifrado);


//   // Ejemplo de uso
//   const mensajeOriginal = "HELLO";
//   const claveMonoalfabética = "QWERTYUIOPASDFGHJKLZXCVBNM";

//   const mensajeCifrado = cifradoMonoalfabético(mensajeOriginal, claveMonoalfabética);
//   console.log("Mensaje Original:", mensajeOriginal);
//   console.log("Mensaje Cifrado:", mensajeCifrado);

