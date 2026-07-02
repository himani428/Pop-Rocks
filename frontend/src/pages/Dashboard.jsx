import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { api } from "../api/client";
import "../styles/dashboard.css";

export default function Dashboard() {
  const { user, token } = useAuth();
  const [enrollments, setEnrollments] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.me(token).then((data) => {
      setEnrollments(data.enrollments || []);
      setBookings(data.bookings || []);
    }).finally(() => setLoading(false));
  }, [token]);

  return (
    <section className="dashboard section">
      <div className="container">
        <div className="dashboard-head">
          <div>
            <span className="eyebrow" style={{ color: "var(--pop-pink-dim)" }}>Your account</span>
            <h1>Hey, {user.name.split(" ")[0]} 👋</h1>
          </div>
          <div className="dashboard-head-actions">
            <Link to="/#classes" className="btn btn-secondary">Browse classes</Link>
            <Link to="/#services" className="btn btn-primary">Book an event</Link>
          </div>
        </div>

        {loading ? (
          <p>Loading your dashboard...</p>
        ) : (
          <div className="dashboard-grid">
            <div className="dashboard-panel">
              <h2>Class enrollments</h2>
              {enrollments.length === 0 ? (
                <p className="dashboard-empty">
                  You haven't enrolled in a class yet. <Link to="/#classes">Pick one to get started.</Link>
                </p>
              ) : (
                <ul className="dashboard-list">
                  {enrollments.map((e) => (
                    <li key={e.id}>
                      <div>
                        <strong>{e.className}</strong>
                        <span>{e.preferredBatch}</span>
                      </div>
                      <span className={`status status-${e.status}`}>{e.status}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="dashboard-panel">
              <h2>Event bookings</h2>
              {bookings.length === 0 ? (
                <p className="dashboard-empty">
                  No choreography requests yet. <Link to="/#services">Plan your sangeet or event.</Link>
                </p>
              ) : (
                <ul className="dashboard-list">
                  {bookings.map((b) => (
                    <li key={b.id}>
                      <div>
                        <strong>{b.eventType}</strong>
                        <span>{b.eventDate} {b.location ? `· ${b.location}` : ""}</span>
                      </div>
                      <span className={`status status-${b.status}`}>{b.status}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
