function izracunaj(){
    
    var radiusInput = document.getElementById("radius");

    var radius = parseFloat(radiusInput.value);

    if(isNaN(radius)){
        alert("Molimo unesite ispravnu vrijednost poluprecnika");
    }else{
        var volume = (4/3) * Math.PI * Math.pow(radius, 3);
        var volumeOutput = document.getElementById("volume");
        volumeOutput.value = volume.toFixed(4);
    }




}
