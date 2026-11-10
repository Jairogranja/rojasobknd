/**
 * Middleware genérico para validar campos requeridos en el body.
 * @param  {...string} fields - Nombres de los campos requeridos
 * @returns {Function} Middleware de Express
 *
 * Uso: router.post('/', validateFields('name', 'email', 'phone'), controller);
 */
const validateFields = (...fields) => {
  return (req, res, next) => {
    const missing = fields.filter(
      (field) =>
        req.body[field] === undefined ||
        req.body[field] === null ||
        req.body[field].toString().trim() === ''
    );

    if (missing.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Campos obligatorios faltantes',
        errors: missing.map((field) => `El campo '${field}' es obligatorio`),
      });
    }

    next();
  };
};

module.exports = { validateFields };

