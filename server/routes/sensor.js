const express = require("express");
const router = express.Router();
const db = require("../db");

// Add sensor data
router.post("/", (req, res) => {
  const { device_id, temperature, humidity, energy_usage } = req.body;

  db.query(
    "INSERT INTO sensor_data (device_id, temperature, humidity, energy_usage) VALUES (?, ?, ?, ?)",
    [device_id, temperature, humidity, energy_usage],
    err => {
      if (err) return res.status(500).send(err);
      res.send("Data Added");
    }
  );

  if (temperature > 40) {
    db.query(
      "INSERT INTO alerts (device_id, message) VALUES (?, ?)",
      [device_id, "High Temperature Alert!"]
    );
  }
});

// Get sensor data
router.get("/:id", (req, res) => {
  db.query(
    "SELECT * FROM sensor_data WHERE device_id=?",
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    }
  );
});

module.exports = router;