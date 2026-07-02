import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { api } from "../api/client";

export default function EnrollModal({ danceClass, onClose }) {
  const { user, token } = useAuth();
  const [preferredBatch, setPreferredBatch] = useState(danceClass.schedule[0]);
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  if (!user) {
    return (
      <Modal title="Log in to enroll" onClose={onClose}>
        <p style={{ marginBottom: 20, color: "var(--text-on-cream-dim)" }}>
          Create a free account or log in so we can save your enrollment in <strong>{danceClass.title}</strong> and
          keep you posted on batch timings.
        </p>
        <div style={{ display: "flex", gap: 12 }}>
          <Link to="/login" className="btn btn-secondary btn-block" onClick={onClose}>Log in</Link>
          <Link to="/register" className="btn btn-primary btn-block" onClick={onClose}>Sign up</Link>
        </div>
      </Modal>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await api.enroll({ classId: danceClass.id, preferredBatch, notes }, token);
      setDone(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal title={`Enroll — ${danceClass.title}`} onClose={onClose}>
      {done ? (
        <p className="form-success">
          You're on the list for {danceClass.title}! We'll reach out on the number attached to your account to confirm your batch.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <p className="form-error">{error}</p>}
          <div className="form-field">
            <label htmlFor="batch">Preferred batch</label>
            <select id="batch" value={preferredBatch} onChange={(e) => setPreferredBatch(e.target.value)}>
              {danceClass.schedule.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="notes">Anything we should know? (optional)</label>
            <textarea
              id="notes"
              placeholder="Prior experience, injuries, questions..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
            {submitting ? "Enrolling..." : "Confirm enrollment"}
          </button>
        </form>
      )}
    </Modal>
  );
}
