import express from 'express';
import config from './config.js';
import { fork } from 'child_process';

const app = express();
const PORT = config.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/operacion', (req, res) => {
  const child = fork('./operacionCompleja.js');
  child.send('start');
  child.on('message', (result) => {
    res.json("El resultado de la operación es: " + result);
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
})