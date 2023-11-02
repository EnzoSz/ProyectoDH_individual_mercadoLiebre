const express = require("express"); // Importamos express
const path = require("path"); // Importamos path
const app = express(); // Creamos una instancia de express
const publicPath = path.resolve(__dirname, "../public"); // Obtenemos la ruta absoluta de la carpeta public
app.use(express.static(publicPath)); // Le decimos a express que use la carpeta public para servir archivos estáticos
app.listen(3017, () =>
  console.log("Servidor corriendo en http://localhost:3017")
); // Levantamos el servidor en el puerto 3017

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
});