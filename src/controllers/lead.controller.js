const Lead = require('../models/lead.model');

/**
 * @desc    Crear un nuevo lead (formulario de contacto)
 * @route   POST /api/leads
 */
const createLead = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    const lead = await Lead.create({ name, email, phone, service, message });

    res.status(201).json({
      success: true,
      message: '¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto.',
      data: lead,
    });
  } catch (error) {
    // Errores de validación de Mongoose
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        message: 'Error de validación',
        errors: messages,
      });
    }

    console.error('Error al crear lead:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
    });
  }
};

/**
 * @desc    Obtener todos los leads (para panel de administración)
 * @route   GET /api/leads
 */
const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: leads.length,
      data: leads,
    });
  } catch (error) {
    console.error('Error al obtener leads:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
    });
  }
};

module.exports = { createLead, getLeads };

