import Reseña from "../models/Reseña.js";

export const obtenerReseñas = async (req, res) => {
  res.json(await Reseña.find());
};

export const obtenerReseñasPorJuego = async (req, res) => {
  res.json(await Reseña.find({ juegoId: req.params.juegoId }));
};

export const obtenerReseña = async (req, res) => {
  res.json(await Reseña.findById(req.params.id));
};

export const crearReseña = async (req, res) => {
  res.json(await Reseña.create(req.body));
};

export const actualizarReseña = async (req, res) => {
  res.json(
    await Reseña.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
};

export const eliminarReseña = async (req, res) => {
  await Reseña.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Reseña eliminada" });
};