const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/unos', function(req, res) {
    const indexPath = path.join(__dirname, 'forma.html');
    res.sendFile(indexPath);
});

app.post('/unos',function(req,res){

    let tijelo = req.body;

    let novaLinija = "\n"+tijelo['ime']+","+tijelo['prezime']+","+tijelo['adresa']+","+tijelo['broj_telefona'];

       fs.appendFile('imenik.txt',novaLinija,function(err){
       if(err) throw err;
       res.json({message:"Uspješno dodan red",data:novaLinija});
    
    });

});

app.listen(8085);
