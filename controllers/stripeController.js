
const stripe = require('stripe')('sk_test_51Pg5eaRunlLVaZ2Qz31ndkSbxMlj66WYait44gI1xE5HHuEU6UCCxqUhSSqg956BL97pGKMjJbIjG1nK7aKCyyZD00lKHFIqiL');

const createPaymentIntent = async (amount) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });
    return paymentIntent.client_secret;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createPaymentIntent,
};



