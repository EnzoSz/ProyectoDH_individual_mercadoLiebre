const express = require("express"); // Importamos express
const path = require("path"); // Importamos path
const app = express(); // Creamos una instancia de express
const publicPath = path.resolve(__dirname, "../public"); // Obtenemos la ruta absoluta de la carpeta public
app.use(express.static(publicPath)); // Le decimos a express que use la carpeta public para servir archivos estáticos
 // Levantamos el servidor en el puerto 3017
const port = process.env.PORT || 3017;
app.listen(port, () =>
  console.log(`Servidor corriendo en el puerto http://localhost:${port}` )
);

// Definimos la ruta raíz
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

// Definimos la ruta /register

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"));
});

// Definimos el post de la ruta /register
app.post("/register", (req, res) => {
  res.redirect("/");
});

// Definimos la ruta /login
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"));
});

// Definimos el post de la ruta /login
app.post("/login", (req, res) => {
  res.redirect("/");
});