let brojacModul = (function () {
    let brojac = 0;
  
    function dodaj() {
      return brojac += 1;
    }
  
    function resetuj() {
      brojac = 0;
    }
  
    return {
      dodaj: dodaj,
      resetuj: resetuj
    };
  })();
  
  // Korištenje modula
  console.log(brojacModul.dodaj()); // 1
  console.log(brojacModul.dodaj()); // 2
  console.log(brojacModul.dodaj()); // 3
  
  brojacModul.resetuj();
  console.log(brojacModul.dodaj()); // 1
  
