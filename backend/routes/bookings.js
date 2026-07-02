const express = require("express");
const { readDb, writeDb } = require("../db");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

// Booking a choreography service (wedding/sangeet, birthday, corporate, workshop)
// Login is required so a customer can track their request from their dashboard.
router.post("/", requireAuth, (req, res) => {
  const { serviceId, eventType, eventDate, location, guestCount, message } = req.body;

  if (!eventType || !eventDate) {
    return res.status(400).json({ error: "Event type and date are required." });
  }

  const db = readDb();
  const service = db.services.find((s) => s.id === serviceId) || null;

  const booking = {
    id: "bk_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    userId: req.user.id,
    serviceId: service ? service.id : "custom",
    serviceTitle: service ? service.title : "Custom Choreography Request",
    eventType,
    eventDate,
    location: location || "",
    guestCount: guestCount || "",
    message: message || "",
    status: "requested",
    createdAt: new Date().toISOString()
  };

  db.bookings.push(booking);
  writeDb(db);

  res.status(201).json({ booking });
});

router.get("/mine", requireAuth, (req, res) => {
  const db = readDb();
  const bookings = db.bookings.filter((b) => b.userId === req.user.id);
  res.json({ bookings });
});

module.exports = router;
