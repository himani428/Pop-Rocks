import { useState } from "react";
import { api } from "../api/client";
import "../styles/contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await api.contact(form);
      setDone(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact on-ink">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow" style={{ color: "var(--pop-cyan)" }}>Let's talk</span>
          <h2 className="contact-title">Questions before you join?</h2>
          <p className="contact-lead">
            Ask about trial classes, batch timings, or get a quote for your event. We usually reply
            within a day.
          </p>
          <div className="contact-details">
            <a href="https://www.instagram.com/poprocks_dance_academy/" target="_blank" rel="noreferrer">
              Instagram: @poprocks_dance_academy
            </a>
            <a href="mailto:hello@poprocksdance.com">hello@poprocksdance.com</a>
            <span>Mathura, Uttar Pradesh</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {error && <p className="form-error">{error}</p>}
          {done && <p className="form-success">Thanks! Your message is in — we'll get back to you soon.</p>}
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="c-name">Name</label>
              <input id="c-name" required value={form.name} onChange={update("name")} />
            </div>
            <div className="form-field">
              <label htmlFor="c-phone">Phone (optional)</label>
              <input id="c-phone" value={form.phone} onChange={update("phone")} />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="c-email">Email</label>
            <input id="c-email" type="email" required value={form.email} onChange={update("email")} />
          </div>
          <div className="form-field">
            <label htmlFor="c-message">Message</label>
            <textarea id="c-message" required value={form.message} onChange={update("message")} placeholder="I'd like to know more about..." />
          </div>
          <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
            {submitting ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
