import { Router } from "express";

const router = Router();

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

router
  .route("/")
  .get((req, res) => {
    res.json(usuarios);
  })
  .post((req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    res.status(201).json(usuario);
  });

router
  .route("/:userId")
  .put((req, res) => {
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
  })
  .delete((req, res) => {
    const { userId } = req.params;
    const usuario = usuarios.find((usuario) => usuario.id == userId);
    if (usuario) {
      const index = usuarios.indexOf(usuario);
      usuarios.splice(index, 1);
      return res.sendStatus(204);
    }
    res.json({ error: "Usuario no encontrado" });
  })
  .get((req, res) => {
    const { userId } = req.params;
    const usuario = usuarios.find((usuario) => usuario.id == userId);
    if (usuario) return res.json(usuario);
    res.json({ error: "Usuario no encontrado" });
  });

export default router;
