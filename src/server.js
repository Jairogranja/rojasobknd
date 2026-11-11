require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3000;

// Iniciar servidor inmediatamente y conectar DB en segundo plano
const startServer = () => {
  connectDB();

  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log(`📌 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🏆 API Base: http://localhost:${PORT}/api`);
  });
};

startServer();
