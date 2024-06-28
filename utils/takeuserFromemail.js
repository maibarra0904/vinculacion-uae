export function userFromEmail(texto) {
    let indiceArroba = texto.indexOf('@');
    if (indiceArroba !== -1) {
      return texto.slice(0, indiceArroba);
    } else {
      return '';
    }
  }