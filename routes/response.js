const express = require('express');
const router = express.Router();

router.get('/api/payment/response', (req, res) => {
    const response = req.query;
    console.log('Payment Response:', response);
    res.send('Payment response received. Thank you!');
});

module.exports = router;
