const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all devices
router.get("/", (req, res) => {
  db.query("SELECT * FROM devices", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// Toggle device
router.put("/:id", (req, res) => {
  const { status } = req.body;

  db.query(
    "UPDATE devices SET status=? WHERE device_id=?",
    [status, req.params.id],
    err => {
      if (err) return res.status(500).send(err);
      res.send("Updated");
    }
  );
});

module.exports = router;