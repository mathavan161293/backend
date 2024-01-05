const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const pricingRoutes = require("./routes/pricing");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/pricingApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use("/pricing", pricingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
