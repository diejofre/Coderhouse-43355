import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./routes/views.router.js";
import productsRouter from "./routes/products.router.js";

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

app.use("/", viewsRouter);
app.use("/api", productsRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
