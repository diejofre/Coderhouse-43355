import express from "express";
import session from "express-session";

const app = express();

app.use(
  session({
    secret: "codersecret",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 100000 },
  })
);

function auth(req, res, next) {
  if (req.session?.user === "pepe" && req.session?.admin) {
    return next();
  }
  return res.status(401).send("error de autorización!");
}

app.get("/", (req, res) => {
  res.send("Hola");
});

app.get("/session", (req, res) => {
  if (req.session.counter) {
    req.session.counter++;
    res.send(`Usted visitó este sitio ${req.session.counter} veces`);
  } else {
    req.session.counter = 1;
    res.send("Bienvenidos");
  }
});

app.get("/login", (req, res) => {
  const { username, password } = req.query;
  if (username !== "pepe" || password !== "pepepass") {
    return res.send("login failed");
  }
  req.session.user = username;
  req.session.admin = true;
  res.send("login success!");
});

app.get("/privada", auth, (req, res) => {
  res.send("si estas viendo esto es porque ya te logueaste!");
});

app.get("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) return res.send({ status: "Error", error });
    res.send("Logout ok");
  });
});

app.listen(3000, () => {
  console.log("Server up");
});
