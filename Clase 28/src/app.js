import express from "express";
import morgan from "morgan";
import router from "./router/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

router(app);

export default app;
