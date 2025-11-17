import express from "express";
import {
  obtenerJuegos,
  obtenerJuego,
  crearJuego,
  actualizarJuego,
  eliminarJuego
} from "../controllers/juegosController.js";

const router = express.Router();

router.get("/", obtenerJuegos);
router.get("/:id", obtenerJuego);
router.post("/", crearJuego);
router.put("/:id", actualizarJuego);
router.delete("/:id", eliminarJuego);

export default router;