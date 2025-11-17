import mongoose from "mongoose";

const juegoSchema = mongoose.Schema({
  titulo: { type: String, required: true },
  genero: String,
  plataforma: String,
  añoLanzamiento: Number,
  desarrollador: String,
  imagenPortada: String,
  descripcion: String,
  completado: { type: Boolean, default: false },
  fechaCreacion: { type: Date, default: Date.now }
});

export default mongoose.model("Juego", juegoSchema);