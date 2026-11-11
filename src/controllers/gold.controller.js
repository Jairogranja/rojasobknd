/**
 * @desc    Obtener precio actual y referencial del oro
 * @route   GET /api/gold-price
 */
const getGoldPrice = async (req, res) => {
  try {
    // Valores base referenciales del mercado internacional (USD)
    // En producción se puede conectar a APIs como metals-api o goldapi.io
    const baseOunceUSD = 2648.50;
    const gramUSD = +(baseOunceUSD / 31.1035).toFixed(2);
    
    // Estimación para diferentes quilates comunes
    const pricesByKarat = {
      '24k': gramUSD,
      '18k': +(gramUSD * 0.75).toFixed(2),
      '14k': +(gramUSD * 0.585).toFixed(2),
      '10k': +(gramUSD * 0.417).toFixed(2)
    };

    res.json({
      success: true,
      currency: 'USD',
      updatedAt: new Date().toISOString(),
      data: {
        pricePerOunce: baseOunceUSD,
        pricePerGram: gramUSD,
        change24h: '+0.45%',
        karats: pricesByKarat
      }
    });
  } catch (error) {
    console.error('Error al obtener precio del oro:', error);
    res.status(500).json({
      success: false,
      message: 'Error al consultar precio del oro'
    });
  }
};

module.exports = { getGoldPrice };

