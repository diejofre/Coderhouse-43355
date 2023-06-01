import express from "express";
const app = express();
import usuarios from "./routes/usuarios.router.js";
import pets from "./routes/pets.router.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("public"));

app.use(function (req, res, next) {
  console.log("Time:", Date.now());
  next();
});

app.use("/api/pets", pets);
app.use("/api/usuarios", usuarios);

app.get("/saludo", (req, res) => {
  res.send("Hola a todos, pero ahora desde express!");
});

app.get("/", (req, res) => {
  res.send("<h1 style='color: blue'>Bienvenido/a</h1>");
});

app.get("/ejemploQuery", (req, res) => {
  const { nombre, apellido } = req.query;
  res.send(
    `<h2 style="color: red">Nombre: ${nombre} Apellido: ${apellido}</h2>`
  );
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
