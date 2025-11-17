import express from "express";
import {
  obtenerReseñas,
  obtenerReseña,
  obtenerReseñasPorJuego,
  crearReseña,
  actualizarReseña,
  eliminarReseña
} from "../controllers/reseñasController.js";

const router = express.Router();

router.get("/", obtenerReseñas);
router.get("/juego/:juegoId", obtenerReseñasPorJuego);
router.get("/:id", obtenerReseña);
router.post("/", crearReseña);
router.put("/:id", actualizarReseña);
router.delete("/:id", eliminarReseña);

export default router;