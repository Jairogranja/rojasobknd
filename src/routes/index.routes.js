const { Router } = require('express');
const router = Router();

// Health check
router.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'rojasobknd API is running',
    timestamp: new Date().toISOString()
  });
});

// Add more route files here
// router.use('/users', require('./user.routes'));

module.exports = router;
