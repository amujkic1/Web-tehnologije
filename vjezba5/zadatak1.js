// Prva funkcija - dodajDva
function dodajDva(x) {
    return x + 2;
  }
  
  console.log(dodajDva(1)); // treba vratiti 3
  console.log(dodajDva(2)); // treba vratiti 4
  console.log(dodajDva(10)); // treba vratiti 12
  
  // Druga funkcija - jednom
  function jednom(callback) {
    let alreadyCalled = false;
    let result;
  
    return function (x) {
      if (!alreadyCalled) {
        result = callback(x);
        alreadyCalled = true;
      }
      return result;
    };
  }
  
  const jednomFunkcija = jednom(dodajDva);
  console.log(jednomFunkcija(4)); // treba ispisati 6
  console.log(jednomFunkcija(10)); // treba ispisati 6
  console.log(jednomFunkcija(9001)); // treba ispisati 6
  
