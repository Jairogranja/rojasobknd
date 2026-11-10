const { Router } = require('express');
const {
  getTestimonials,
  createTestimonial,
} = require('../controllers/testimonial.controller');

const router = Router();

// GET /api/testimonials → Obtener testimonios activos
router.get('/', getTestimonials);

// POST /api/testimonials → Crear nuevo testimonio
router.post('/', createTestimonial);

module.exports = router;

