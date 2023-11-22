export function cifradoSustitucionPolialfabética(texto: string, clave: string): string {
  let resultado = '';

  for (let i = 0; i < texto.length; i++) {
    const letraOriginal = texto[i];
    const letraClave = clave[i % clave.length].toUpperCase();

    if (letraOriginal.match(/[A-Za-z]/)) {
      const desplazamiento = letraClave.charCodeAt(0) - 'A'.charCodeAt(0);
      const letraCifrada = cifrarLetra(letraOriginal, desplazamiento);
      resultado += letraCifrada;
    } else {
      resultado += letraOriginal; // Mantener caracteres no alfabéticos sin cambios
    }
  }

  return resultado;
}

function cifrarLetra(letra: string, desplazamiento: number): string {
  const esMayuscula = letra === letra.toUpperCase();
  const base = esMayuscula ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
  const letraCifrada = String.fromCharCode((letra.charCodeAt(0) + desplazamiento - base + 26) % 26 + base);
  return esMayuscula ? letraCifrada : letraCifrada.toLowerCase();
}

/**
 * El cifrado de sustitución polialfabética es reversible siempre que conozcas la clave utilizada para cifrar el mensaje.
 */

// Ejemplo de uso
//   const mensajeOriginal = "HELLO";
//   const clave = "KEY";

//   const mensajeCifrado = cifradoSustitucionPolialfabética(mensajeOriginal, clave);
//   console.log("Mensaje Original:", mensajeOriginal);
//   console.log("Mensaje Cifrado:", mensajeCifrado);

