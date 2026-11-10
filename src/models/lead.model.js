const { Schema, model } = require('mongoose');

const leadSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      trim: true,
      maxlength: [100, 'El nombre no puede exceder 100 caracteres'],
    },
    email: {
      type: String,
      required: [true, 'El correo es obligatorio'],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Por favor ingrese un correo válido',
      ],
    },
    phone: {
      type: String,
      required: [true, 'El teléfono es obligatorio'],
      trim: true,
      maxlength: [20, 'El teléfono no puede exceder 20 caracteres'],
    },
    service: {
      type: String,
      required: [true, 'El servicio es obligatorio'],
      enum: {
        values: ['compra', 'venta', 'avaluo', 'fundicion'],
        message: 'El servicio debe ser: compra, venta, avaluo o fundicion',
      },
    },
    message: {
      type: String,
      trim: true,
      maxlength: [500, 'El mensaje no puede exceder 500 caracteres'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model('Lead', leadSchema);

