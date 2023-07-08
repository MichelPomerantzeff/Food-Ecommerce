const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const env = require("dotenv").config({ path: "./.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.static("public"));
app.use(express.json());

// API routes

app.get('/', (request, response) => response.status(200).send("hello world!!!!"))

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request received for this amount: ", total);
  
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "eur",
      amount: total,
      automatic_payment_methods: { enabled: true },
    });
    // OK - Created
    response.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    // ERROR - Failed to create
    console.log(e)
  } 
});

// Listen command
exports.api = functions.https.onRequest(app);
