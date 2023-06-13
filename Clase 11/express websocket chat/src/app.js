import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./routes/views.router.js";
import { Server } from "socket.io";

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

app.use("/", viewsRouter);

const httpServer = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const io = new Server(httpServer);
const messages = [];
io.on("connection", (socket) => {
  console.log("New client connected");
  io.emit("messageLogs", messages);
  socket.broadcast.emit("messageConected", "Un nuevo usuario se ha conectado");

  socket.on("message", (data) => {
    messages.push(data);
    io.emit("messageLogs", messages);
  });
});
