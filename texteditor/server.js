const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;


app.use(express.json());


app.use(express.static('public'));


app.get('/read', (req, res) => {
    fs.readFile(path.join(__dirname, 'text.txt'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Hiba a fájl olvasása közben' });
        }
        res.json({ text: data });
    });
});


app.post('/save', (req, res) => {
    const newText = req.body.text;
    fs.writeFile(path.join(__dirname, 'text.txt'), newText, 'utf8', (err) => {
        if (err) {
            return res.status(500).json({ error: 'Hiba a fájl írása közben' });
        }
        res.json({ message: 'Sikeres mentés' });
    });
});


app.listen(PORT, () => {
    console.log(`Szerver fut a http://localhost:${PORT} címen`);
});