const Testimonial = require('../models/testimonial.model');

/**
 * @desc    Obtener testimonios activos (para la landing page)
 * @route   GET /api/testimonials
 */
const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ isActive: true }).sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      count: testimonials.length,
      data: testimonials,
    });
  } catch (error) {
    console.error('Error al obtener testimonios:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
    });
  }
};

/**
 * @desc    Crear un nuevo testimonio
 * @route   POST /api/testimonials
 */
const createTestimonial = async (req, res) => {
  try {
    const { author, content, rating } = req.body;

    const testimonial = await Testimonial.create({ author, content, rating });

    res.status(201).json({
      success: true,
      message: 'Testimonio creado exitosamente',
      data: testimonial,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        message: 'Error de validación',
        errors: messages,
      });
    }

    console.error('Error al crear testimonio:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
    });
  }
};

module.exports = { getTestimonials, createTestimonial };

