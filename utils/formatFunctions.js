export const formatNumber = (value) => {
    var numberString = value.toString();
    while (numberString.length < 4) {
      numberString = "0" + numberString;
    }
    return numberString;
}

export const formatDate = (date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
}