const express = require('express');
const path = require('path');
const app = express();


// Serve static files from the 'public' directory
const publicDir = '/../client';
const htmlDir = publicDir + '/html';


// Define a route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, htmlDir, 'index.html'));
});

async function startServer() {

    const PORT = process.env.PORT || 5002;

    app.listen(PORT, () => {
        console.log(`HTTP Server running on port ${PORT}`);
    });


}

startServer();

