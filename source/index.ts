import express from 'express';
import { EchoMessages } from './echo'; // 修正箇所
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(EchoMessages.hello('John')); // 修正箇所
});

app.listen(port, () => {
    console.log("start listening");
});
