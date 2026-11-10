const { Router } = require('express');
const { createLead, getLeads } = require('../controllers/lead.controller');

const router = Router();

// POST /api/leads → Crear nuevo lead (formulario de contacto)
router.post('/', createLead);

// GET /api/leads → Listar todos los leads
router.get('/', getLeads);

module.exports = router;

