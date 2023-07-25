import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hola");
});

app.get("/saludar", (req: Request, res: Response) => {
  res.send("Hola");
});

app.listen(3000, () => {
  console.log("Server up");
});

// interface IPersona {
//   nombre: string;
//   edad: string | number;
//   email: string;
// }

// const persona1: IPersona = {
//   nombre: "Pepe",
//   edad: 35,
//   email: "pepe@mail",
// };

// const persona2: IPersona = {
//   nombre: "Hugo",
//   edad: "30",
//   email: "hugo@mail.com",
// };

// const personas: Array<IPersona> = [
//   persona1,
//   persona2,
//   { nombre: "Ana", edad: 23, email: "ana@mail" },
//   { nombre: "Carlos", edad: 33, email: "carlos@mail" },
// ];

// console.log(personas);

// interface IAlumno extends IPersona {
//   apellido: string;
//   cursoAsignado: string;
// }

// const alumno: IAlumno = {
//   nombre: "Javier",
//   edad: 15,
//   email: "javi@mail.com",
//   apellido: "",
//   cursoAsignado: "Node",
// };
