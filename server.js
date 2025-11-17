import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import juegosRoutes from "./routes/juegosRoutes.js";
import reseñasRoutes from "./routes/reseñasRoutes.js";

dotenv.config();
conectarDB();

const app = express();

app.use(cors());
app.use(express.json());

// Rutas principales
app.use("/api/juegos", juegosRoutes);
app.use("/api/reseñas", reseñasRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});