function fun(){
      var odgovor = prompt("Kako se zoves?", "Imenom i prezimenom(default)");
      if (odgovor!=null && odgovor!="")
      {
      var r=confirm("Pritisnite OK da prikazete ime u alertboxu a Cancel za prikaz direktno na stranici");
      if (r==true)  // ili if(r)
            alert(reverseString(odgovor));
      else
            document.write(odgovor);
      }
}
function reverseString(str){
      let splitString=str.split("");
      let reverseArray=splitString.reverse();
      let joinArray=reverseArray.join("");
      return joinArray;
}
