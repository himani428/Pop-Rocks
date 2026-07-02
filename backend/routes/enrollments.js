const express = require("express");
const { readDb, writeDb } = require("../db");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

router.post("/", requireAuth, (req, res) => {
  const { classId, preferredBatch, notes } = req.body;
  if (!classId) {
    return res.status(400).json({ error: "Please choose a class to enroll in." });
  }

  const db = readDb();
  const danceClass = db.classes.find((c) => c.id === classId);
  if (!danceClass) {
    return res.status(404).json({ error: "That class could not be found." });
  }

  const enrollment = {
    id: "en_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    userId: req.user.id,
    classId,
    className: danceClass.title,
    preferredBatch: preferredBatch || danceClass.schedule[0],
    notes: notes || "",
    status: "pending",
    createdAt: new Date().toISOString()
  };

  db.enrollments.push(enrollment);
  writeDb(db);

  res.status(201).json({ enrollment });
});

router.get("/mine", requireAuth, (req, res) => {
  const db = readDb();
  const enrollments = db.enrollments.filter((e) => e.userId === req.user.id);
  res.json({ enrollments });
});

module.exports = router;
