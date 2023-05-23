import express from "express";
const app = express();

const usuarios = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
  },
  {
    id: 2,
    nombre: "Ana",
    apellido: "Fernandez",
    edad: 30,
  },
  {
    id: 3,
    nombre: "Pedro",
    apellido: "Mármol",
    edad: 15,
  },
];

app.use(express.urlencoded({ extended: true }));

app.get("/saludo", (req, res) => {
  res.send("Hola a todos, pero ahora desde express!");
});

app.get("/bienvenida", (req, res) => {
  res.send("<h1 style='color: blue'>Bienvenido/a</h1>");
});

app.get("/", (req, res) => {
  res.json(usuarios);
});

app.get("/usuarios/:userId", (req, res) => {
  const { userId } = req.params;
  const usuario = usuarios.find((usuario) => usuario.id == userId);
  if (usuario) return res.json(usuario);
  res.json({ error: "Usuario no encontrado" });
});

app.get("/ejemploQuery", (req, res) => {
  const { nombre, apellido } = req.query;
  res.send(
    `<h2 style="color: red">Nombre: ${nombre} Apellido: ${apellido}</h2>`
  );
});

app.listen(8080, () => {
  console.log("Server is running on port 3000");
});
