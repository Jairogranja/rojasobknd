const { Router } = require('express');
const router = Router();

// Health check
router.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Rojaso Gold API is running 🏆',
    timestamp: new Date().toISOString(),
  });
});

// Rutas de recursos
router.use('/leads', require('./lead.routes'));
router.use('/testimonials', require('./testimonial.routes'));

module.exports = router;
