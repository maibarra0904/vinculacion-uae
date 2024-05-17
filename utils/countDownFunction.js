export const countdown = (seconds) => {
  
    const interval = setInterval(() => {
      if (seconds >= 0) {
        console.log(seconds);
        seconds--;
      } else {
        clearInterval(interval);
        console.log("¡Tiempo agotado!");
      }
    }, 1000);
  }
  
  