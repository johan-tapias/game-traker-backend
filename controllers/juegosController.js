import Juego from "../models/Juego.js";

export const obtenerJuegos = async (req, res) => {
  res.json(await Juego.find());
};

export const obtenerJuego = async (req, res) => {
  res.json(await Juego.findById(req.params.id));
};

export const crearJuego = async (req, res) => {
  res.json(await Juego.create(req.body));
};

export const actualizarJuego = async (req, res) => {
  res.json(
    await Juego.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
};

export const eliminarJuego = async (req, res) => {
  await Juego.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Juego eliminado" });
};