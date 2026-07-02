require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { ensureDb } = require("./db");
const authRoutes = require("./routes/auth");
const classesRoutes = require("./routes/classes");
const enrollmentsRoutes = require("./routes/enrollments");
const bookingsRoutes = require("./routes/bookings");
const contactRoutes = require("./routes/contact");

ensureDb();

const app = express();
const PORT = process.env.PORT || 5000;

// CLIENT_ORIGIN can be a comma-separated list, e.g.
// "http://localhost:5173,https://poprocks.vercel.app"
const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((o) => o.trim());

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    }
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", service: "Pop Rocks Dance Academy API" });
});
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/auth", authRoutes);
app.use("/api", classesRoutes); // /api/classes, /api/services
app.use("/api/enrollments", enrollmentsRoutes);
app.use("/api/bookings", bookingsRoutes);
app.use("/api/contact", contactRoutes);

// Fallback error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Something went wrong. Please try again." });
});

app.listen(PORT, () => {
  console.log(`Pop Rocks API running on port ${PORT}`);
});
