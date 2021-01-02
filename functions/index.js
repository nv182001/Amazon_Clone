const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51I4OimCCH82VdymCK6F4KzOK2iKdrwX6yzDdpr4I9nl7OBFIx1oh3QgE4HAHMB2TiIIcnlGgjtrIpyOP9idNTvTZ00M7jRxLnK"
);

// API

// -App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes
app.get('/', (req, res) => {
  res.status(200).send('hello, world!')
});

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  console.log('payment request received', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'INR'
  })
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

// -Listen command
exports.api = functions.https.onRequest(app);


//http://localhost:5001/clone1-baf93/us-central1/api