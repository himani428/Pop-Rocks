const express = require("express");
const { readDb } = require("../db");

const router = express.Router();

router.get("/classes", (req, res) => {
  const db = readDb();
  res.json({ classes: db.classes });
});

router.get("/services", (req, res) => {
  const db = readDb();
  res.json({ services: db.services });
});

router.get("/trainers", (req, res) => {
  const db = readDb();
  res.json({ trainers: db.trainers });
});

router.get("/pricing", (req, res) => {
  const db = readDb();
  res.json({ pricing: db.pricing });
});

module.exports = router;
