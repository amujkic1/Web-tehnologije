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


app.put('/zadatak/:id', function(req, res){
    // Read the CSV file
    fs.readFile('zadaci.csv', 'utf-8', function(err, data){
        if(err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        // Parse existing tasks from the CSV file
        const existingTasks = data.trim().split('\n').map(line => {
            const [id, naziv, opis] = line.split(',');
            return { id, naziv, opis };
        });

        // Find the task with the specified ID
        const taskId = req.params.id;
        const existingTaskIndex = existingTasks.findIndex(task => task.id === taskId);

        if (existingTaskIndex === -1) {
            // If the task with the specified ID doesn't exist, return an error
            return res.json({ status: 'Id ne postoji!' });
        }

        // Update the existing task with new data from the request body
        existingTasks[existingTaskIndex] = {
            id: taskId,
            naziv: req.body.naziv,
            opis: req.body.opis
        };

        // Write the updated tasks back to the CSV file
        const updatedTasksString = existingTasks.map(task => `${task.id},${task.naziv},${task.opis}`).join('\n');

        fs.writeFile('zadaci.csv', updatedTasksString, 'utf-8', function(err){
            if(err) {
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            
            res.json({ status: 'Zadatak je uspješno ažuriran!' });
        });
    });
});

app.listen(8085);
