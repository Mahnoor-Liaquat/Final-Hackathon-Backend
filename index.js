const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const stripePayment = require("./routes/stripePaymentRoutes");
const jazzcashPayment = require('./routes/payment');
const easypaisaPayment = require("./routes/qrcodeRoutes");

const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use('/api/create-payment-intent', stripePayment); //stripe payment
app.use('/api/jazzcash', jazzcashPayment); //jazzcash payment
app.use('/api/qrcode/generate',easypaisaPayment); //easypaisa payment

app.get('/api/test', (req, res) => {
  res.send('Test endpoint is working!');
});

app.get('/', (req, res) => {
  res.send('Backend is working properly!');
});

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Specify the allowed headers
}));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});








