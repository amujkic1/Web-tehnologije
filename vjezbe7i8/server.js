const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // You can change this port if needed

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


var userisLoggedIn = true;
// Set up a route to handle index.html
app.get('/', (req, res) => {
    if(userisLoggedIn){
        res.sendFile(path.join(__dirname, 'public', 'index1.html'));
    } else{
        res.sendFile(path.join(__dirname, 'public', 'index2.html'));        
    }
    });
    
    

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
