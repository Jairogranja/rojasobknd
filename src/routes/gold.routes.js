const { Router } = require('express');
const { getGoldPrice } = require('../controllers/gold.controller');

const router = Router();

// GET /api/gold-price
router.get('/', getGoldPrice);

module.exports = router;

