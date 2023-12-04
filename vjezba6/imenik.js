const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {

    fs.readFile('imenik.txt', 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
      return;
    }

    const rows = data.split('\n');
    const result = rows.map((row) => {
      const [ime, prezime, adresa, broj_telefona] = row.split(',');
      return {
        ime,
        prezime,
        adresa,
        broj_telefona,
      };
    });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result, null, 2));
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
