import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
 res.json({
   message: "Hola desde Express en Codespaces + Docker"
 });
});

app.listen(PORT, () => {
 console.log(`Servidor escuchando en puerto ${PORT}`);
});