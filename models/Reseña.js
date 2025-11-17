import mongoose from "mongoose";

const reseñaSchema = mongoose.Schema({
  juegoId: { type: mongoose.Schema.Types.ObjectId, ref: "Juego", required: true },
  puntuacion: Number,
  textoReseña: String,
  horasJugadas: Number,
  dificultad: String,
  recomendaria: Boolean,
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now }
});

export default mongoose.model("Reseña", reseñaSchema);