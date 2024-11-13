import express from 'express';
import { echoHello } from './echo';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(echoHello('John'));
});

app.listen(port, () => {
    console.log("start listening");
});
