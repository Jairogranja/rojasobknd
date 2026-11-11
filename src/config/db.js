const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB conectado exitosamente: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error de conexión MongoDB: ${error.message}`);
    if (error.message.includes('whitelist') || error.message.includes('Could not connect')) {
      console.warn(
        `⚠️  ATENCIÓN ATLAS: Asegúrate de habilitar el acceso por IP en MongoDB Atlas:\n` +
        `   1. Ve a MongoDB Atlas -> Network Access\n` +
        `   2. Añade tu dirección IP actual (o 0.0.0.0/0 para desarrollo)\n`
      );
    }
  }
};

module.exports = connectDB;
