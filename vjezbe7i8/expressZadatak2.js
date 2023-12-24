const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const csv = require('csv-parser');
const fs = require('fs');
const result = [];


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/zadaci', function(req,res){
    //citanje csv dokumenta
    //instalirati paket: npm install csv-parser
    //sljedeca naredba cita csv i smjesta podatke u niz rezultat
    fs.createReadStream('zadaci.csv')
        .pipe(csv({}))
        .on('data', (data) => result.push(data))
        //smjestimo u res povratnu vrijednost, izvrsava se ako je sve ok
        .on('end', () => {
            res.json(result);
        })
        //definisemo sta ce se desiti u slucaju greske
        .on('error', () => {
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

app.post('/zadaci', function(req,res){
    
    let tijelo = req.body;
    
    let novaLinija = "\n"+tijelo['id']+","+tijelo['naziv']+","+tijelo['opis'];
    
    const postojećiZadaci = data.trim().split('\n').map(line => JSON.parse(line));
    const zadatakSaIstimId = postojećiZadaci.find(zadatak => zadatak.id === noviZadatak.id);

    if (zadatakSaIstimId) {
        return res.json({ status: 'Id već postoji!' });
    }

    fs.appendFile('zadaci.csv',novaLinija,function(err){
        if(err) throw err;
        res.json({message:"Zadatak je uspjesno dodan!",data:novaLinija});
    });
 
});

app.listen(8085);
