"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
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
