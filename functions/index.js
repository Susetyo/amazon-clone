const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51HRhSXBtRU7ZYeOSw3TRhIvDHVbqn3VSwJ0dMMKxq2nTUOrTdzoDHFHF0eO5gxNXp9TJycAIfy4ug1wPOf4ze7VV00jLXpdbKm"
);

//API

// - App config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment Request Received BOOOM !!", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    // Ok - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listens command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/challange-8d56e/us-central1/api
