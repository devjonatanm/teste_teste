const fatorial = (numero) => {
  
    if (numero < 0) {
      return false;
    }
    console.log(numero)
    return numero === 0 ? 1 : numero * fatorial(numero - 1);
  };
  
  fatorial(3)