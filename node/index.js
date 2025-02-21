import express from 'express';
import adminRoutes from './admin.js'
import bodyParser from 'body-parser';

const app = express();
app.use((req, res, next) => {
    res.send('<h1>Szia!</h1>')
    console.log("GET lefutott.")
});


app.listen(3000, ()=> (console.log('A szerver fut')));