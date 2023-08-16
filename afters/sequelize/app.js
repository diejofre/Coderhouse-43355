import express from "express";
import morgan from "morgan";
import routes from "./routes/index.js";
import db from "./db/index.js";
import "./models/index.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/api", routes);

db.sync({ force: true })
  .then(function () {
    // Recién ahora estamos seguros que la conexión fue exitosa
    app.listen(3000, () =>
      console.log("Servidor escuchando en el puerto 3000")
    );
  })
  .catch(console.error);
