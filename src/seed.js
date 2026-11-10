/**
 * Script para poblar la base de datos con testimonios iniciales.
 * Ejecutar: node src/seed.js
 */
require('dotenv').config();
const mongoose = require('mongoose');
const Testimonial = require('./models/testimonial.model');

const testimonials = [
  {
    author: 'María García',
    content:
      'Excelente servicio. Me ofrecieron el mejor precio por mis joyas de oro y el pago fue inmediato. 100% recomendados.',
    rating: 5,
    isActive: true,
  },
  {
    author: 'Carlos Rodríguez',
    content:
      'Muy profesionales y transparentes. Me explicaron todo el proceso de avalúo y quedé muy satisfecho con el precio.',
    rating: 5,
    isActive: true,
  },
  {
    author: 'Ana Martínez',
    content:
      'Compré oro de inversión con ellos y el proceso fue muy seguro. La atención al cliente es de primera.',
    rating: 4,
    isActive: true,
  },
  {
    author: 'Roberto Sánchez',
    content:
      'Llevo años trabajando con ellos para la venta de oro. Siempre pagan un precio justo y el trato es muy amable.',
    rating: 5,
    isActive: true,
  },
  {
    author: 'Laura Pérez',
    content:
      'Me dieron confianza desde el primer momento. El avalúo fue preciso y el pago rápido. Los recomiendo ampliamente.',
    rating: 4,
    isActive: true,
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Conectado a MongoDB');

    await Testimonial.deleteMany({});
    console.log('🗑️  Testimonios anteriores eliminados');

    const created = await Testimonial.insertMany(testimonials);
    console.log(`🌱 ${created.length} testimonios creados exitosamente`);

    await mongoose.connection.close();
    console.log('🔌 Conexión cerrada');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error en seed:', error.message);
    process.exit(1);
  }
};

seedDB();

