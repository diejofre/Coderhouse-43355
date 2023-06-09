import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./routes/views.router.js";
import productsRouter from "./routes/products.router.js";
import { Server } from "socket.io";

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

app.use("/", viewsRouter);
app.use("/api", productsRouter);

const httpServer = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const sockerServer = new Server(httpServer);

sockerServer.on("connection", (socket) => {
  console.log("Un cliente se ha conectado");

  socket.on("message", (data) => {
    console.log(data);
  });
});
