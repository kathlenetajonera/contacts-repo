const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const corsConfig = {};

app.use(express.json());
app.use(cors(corsConfig));

// routes
const contactsRoute = require("./routes/contacts");

app.use("/contacts", contactsRoute);

app.listen(PORT, () => {
    console.log("Listening on port ", PORT);
});
