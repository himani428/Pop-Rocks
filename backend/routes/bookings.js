const express = require("express");
const { readDb, writeDb } = require("../db");
const { requireAuth } = require("../middleware/auth");
const { notifyOwner } = require("../mail");

const router = express.Router();

// Booking a choreography service (wedding/sangeet, birthday, corporate, workshop,
// or a wedding-planning enquiry for our sister company Pop Rocks Dance n Events)
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

  const user = db.users.find((u) => u.id === req.user.id);
  notifyOwner({
    subject: `New booking request — ${booking.serviceTitle}`,
    replyTo: user?.email,
    lines: [
      `${user?.name || "Someone"} just requested a booking: ${booking.serviceTitle}.`,
      "",
      `Name: ${user?.name || "-"}`,
      `Email: ${user?.email || "-"}`,
      `Phone: ${user?.phone || "-"}`,
      `Event type: ${booking.eventType}`,
      `Event date: ${booking.eventDate}`,
      `Location: ${booking.location || "-"}`,
      `Dancers/guests involved: ${booking.guestCount || "-"}`,
      `Message: ${booking.message || "-"}`
    ]
  });

  res.status(201).json({ booking });
});

router.get("/mine", requireAuth, (req, res) => {
  const db = readDb();
  const bookings = db.bookings.filter((b) => b.userId === req.user.id);
  res.json({ bookings });
});

module.exports = router;