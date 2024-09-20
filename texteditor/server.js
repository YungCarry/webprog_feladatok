const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware a JSON adatok kezelésére
app.use(express.json());

// Statikus fájlok kiszolgálása
app.use(express.static('public'));

// Olvasási végpont
app.get('/read', (req, res) => {
    fs.readFile(path.join(__dirname, 'text.txt'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Hiba a fájl olvasása közben' });
        }
        res.json({ text: data });
    });
});

// Mentési végpont
app.post('/save', (req, res) => {
    const newText = req.body.text;
    fs.writeFile(path.join(__dirname, 'text.txt'), newText, 'utf8', (err) => {
        if (err) {
            return res.status(500).json({ error: 'Hiba a fájl írása közben' });
        }
        res.json({ message: 'Sikeres mentés' });
    });
});

// Szerver indítása
app.listen(PORT, () => {
    console.log(`Szerver fut a http://localhost:${PORT} címen`);
});