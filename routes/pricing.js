const express = require("express");
const router = express.Router();
const Pricing = require("../models/Pricing");

// Fetch all pricing records
router.get("/", async (req, res) => {
  try {
    const pricingRecords = await Pricing.find();
    res.json(pricingRecords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update pricing record
router.patch("/:id", async (req, res) => {
  try {
    const updatedRecord = await Pricing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
