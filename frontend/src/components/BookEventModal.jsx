import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { api } from "../api/client";

export default function BookEventModal({ service, onClose }) {
  const { user, token } = useAuth();
  const [form, setForm] = useState({
    eventType: service ? service.title : "",
    eventDate: "",
    location: "",
    guestCount: "",
    message: ""
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  if (!user) {
    return (
      <Modal title="Log in to request a booking" onClose={onClose}>
        <p style={{ marginBottom: 20, color: "var(--text-on-cream-dim)" }}>
          Create a free account or log in so our choreography team can follow up with you directly.
        </p>
        <div style={{ display: "flex", gap: 12 }}>
          <Link to="/login" className="btn btn-secondary btn-block" onClick={onClose}>Log in</Link>
          <Link to="/register" className="btn btn-primary btn-block" onClick={onClose}>Sign up</Link>
        </div>
      </Modal>
    );
  }

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await api.book({ serviceId: service?.id, ...form }, token);
      setDone(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal title={service ? `Book — ${service.title}` : "Book a choreography event"} onClose={onClose}>
      {done ? (
        <p className="form-success">
          Got it! Your choreography request is in. We'll contact you within 1–2 days to talk concept, dates and rehearsal plan.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <p className="form-error">{error}</p>}
          <div className="form-field">
            <label htmlFor="eventType">Event type</label>
            <input id="eventType" required value={form.eventType} onChange={update("eventType")} placeholder="e.g. Sangeet, birthday, corporate event" />
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="eventDate">Event date</label>
              <input id="eventDate" type="date" required value={form.eventDate} onChange={update("eventDate")} />
            </div>
            <div className="form-field">
              <label htmlFor="guestCount">Dancers involved</label>
              <input id="guestCount" value={form.guestCount} onChange={update("guestCount")} placeholder="e.g. 8 family members" />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="location">Venue / location</label>
            <input id="location" value={form.location} onChange={update("location")} placeholder="Venue name or city" />
          </div>
          <div className="form-field">
            <label htmlFor="message">Tell us about the event</label>
            <textarea id="message" value={form.message} onChange={update("message")} placeholder="Song preferences, theme, timeline..." />
          </div>
          <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
            {submitting ? "Sending..." : "Request booking"}
          </button>
        </form>
      )}
    </Modal>
  );
}
