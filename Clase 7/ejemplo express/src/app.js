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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/saludo", (req, res) => {
  res.send("Hola a todos, pero ahora desde express!");
});

app.get("/bienvenida", (req, res) => {
  res.send("<h1 style='color: blue'>Bienvenido/a</h1>");
});

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.post("/usuarios", (req, res) => {
  const usuario = req.body;
  usuarios.push(usuario);
  res.status(201).json(usuario);
});

app.put("/usuarios/:userId", (req, res) => {
  const { userId } = req.params;
  const { nombre, apellido, edad } = req.body;
  const usuario = usuarios.find((usuario) => usuario.id == userId);
  if (usuario) {
    usuario.nombre = nombre;
    usuario.apellido = apellido;
    usuario.edad = edad;
    return res.json(usuario);
  }
  res.json({ error: "Usuario no encontrado" });
});

app.delete("/usuarios/:userId", (req, res) => {
  const { userId } = req.params;
  const usuario = usuarios.find((usuario) => usuario.id == userId);
  if (usuario) {
    const index = usuarios.indexOf(usuario);
    usuarios.splice(index, 1);
    return res.sendStatus(204);
  }
  res.json({ error: "Usuario no encontrado" });
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
  console.log("Server is running on port 8080");
});
