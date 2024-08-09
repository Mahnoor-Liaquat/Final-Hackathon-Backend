const express = require('express');
const { createPaymentIntent } = require('../controllers/stripeController');

const router = express.Router();

router.post('/api/create-payment-intent', async (req, res) => {
  const { amount } = req.body;
  try {
    const clientSecret = await createPaymentIntent(amount);
    res.status(200).send({ clientSecret });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;