import express from "express";
import compression from "express-compression";
const app = express();

const server = app.listen(3000, () => {
  console.log("Server up");
});

app.use(
  compression({
    brotli: { enable: true, zlib: {} },
  })
);

app.get("/stringlargo", (req, res) => {
  let string = "Hola coders soy un string extremadamente largo";
  for (let i = 0; i < 10e2; i++) {
    string += "Hola coders soy un string extremadamente largo";
  }
  res.send(string);
});
