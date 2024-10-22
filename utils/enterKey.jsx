export const enterKey = (event, botonId) => {
    if (event.key === 'Enter') {
        console.log(event.key)
        console.log(botonId)
      event.preventDefault(); // Evita el envío del formulario por defecto
      document.getElementById(botonId).click(); // Simula el clic en el botón de submit
    }
};