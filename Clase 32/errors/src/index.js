import express from "express";
const app = express();
import router from "./router/index.js";
import errorHandler from "./middlewares/errors/index.js";

app.use(express.json());

router(app);

app.use(errorHandler);

app.listen(8080, () => {
  console.log("Server up on port 8080");
});
