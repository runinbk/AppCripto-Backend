export function cifradoPolialfabéticoPeriódico(texto: string, claves: string[]): string {
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        const letraOriginal = texto[i];
        const claveActual = claves[i % claves.length];
        const indiceClave = letraOriginal.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);

        if (letraOriginal.match(/[A-Za-z]/)) {
            const letraCifrada = cifrarLetraMono(letraOriginal, claveActual[indiceClave % claveActual.length]);
            resultado += letraCifrada;
        } else {
            resultado += letraOriginal; // Mantener caracteres no alfabéticos sin cambios
        }
    }

    return resultado;
}

function cifrarLetraMono(letraOriginal: string, clave: string): string {
    const esMayuscula = letraOriginal === letraOriginal.toUpperCase();
    const base = esMayuscula ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);

    const desplazamiento = clave.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
    const letraCifrada = String.fromCharCode((letraOriginal.charCodeAt(0) + desplazamiento - base) % 26 + base);

    return esMayuscula ? letraCifrada : letraCifrada.toLowerCase();
}

// Ejemplo de uso
//   const mensajeOriginal = "HELLO";
//   const claves = ["KEY1", "KEY2", "KEY3"];

//   const mensajeCifrado = cifradoPolialfabéticoPeriódico(mensajeOriginal, claves);
//   console.log("Mensaje Original:", mensajeOriginal);
//   console.log("Mensaje Cifrado:", mensajeCifrado);


export function descifradoPolialfabéticoPeriódico(textoCifrado: string, claves: string[]): string {
    let resultado = '';

    for (let i = 0; i < textoCifrado.length; i++) {
        const letraCifrada = textoCifrado[i];
        const claveActual = claves[i % claves.length];
        const indiceClave = letraCifrada.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);

        if (letraCifrada.match(/[A-Za-z]/)) {
            const letraDescifrada = descifrarLetra(letraCifrada, claveActual[indiceClave % claveActual.length]);
            resultado += letraDescifrada;
        } else {
            resultado += letraCifrada; // Mantener caracteres no alfabéticos sin cambios
        }
    }

    return resultado;
}

function descifrarLetra(letraCifrada: string, clave: string): string {
    const esMayuscula = letraCifrada === letraCifrada.toUpperCase();
    const base = esMayuscula ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);

    const desplazamiento = clave.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
    const letraDescifrada = String.fromCharCode((letraCifrada.charCodeAt(0) - desplazamiento - base + 26) % 26 + base);

    return esMayuscula ? letraDescifrada : letraDescifrada.toLowerCase();
}

// Ejemplo de uso
//   const mensajeCifrado = "RIJVSUYVJN";
//   const claves = ["KEY1", "KEY2", "KEY3"];

//   const mensajeDescifrado = descifradoPolialfabéticoPeriódico(mensajeCifrado, claves);
//   console.log("Mensaje Cifrado:", mensajeCifrado);
//   console.log("Mensaje Descifrado:", mensajeDescifrado);
