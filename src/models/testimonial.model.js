const { Schema, model } = require('mongoose');

const testimonialSchema = new Schema(
  {
    author: {
      type: String,
      required: [true, 'El nombre del autor es obligatorio'],
      trim: true,
      maxlength: [100, 'El nombre no puede exceder 100 caracteres'],
    },
    content: {
      type: String,
      required: [true, 'El contenido del testimonio es obligatorio'],
      trim: true,
      maxlength: [500, 'El testimonio no puede exceder 500 caracteres'],
    },
    rating: {
      type: Number,
      required: [true, 'La calificación es obligatoria'],
      min: [1, 'La calificación mínima es 1'],
      max: [5, 'La calificación máxima es 5'],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model('Testimonial', testimonialSchema);

