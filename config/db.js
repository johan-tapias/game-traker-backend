import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado: " + conn.connection.host);
  } catch (error) {
    console.log("Error en la conexión a MongoDB");
    process.exit(1);
  }
};

export default conectarDB;