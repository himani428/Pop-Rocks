const express = require("express");
const { readDb, writeDb } = require("../db");

const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email and message are required." });
  }

  const db = readDb();
  const entry = {
    id: "msg_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    name,
    email,
    phone: phone || "",
    message,
    createdAt: new Date().toISOString()
  };
  db.messages.push(entry);
  writeDb(db);

  res.status(201).json({ success: true });
});

module.exports = router;
