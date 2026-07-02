import { useEffect, useState } from "react";
import { api } from "../api/client";
import { FALLBACK_CLASSES } from "../data/fallback";
import EnrollModal from "./EnrollModal.jsx";
import "../styles/classes.css";

const STUB_COLORS = ["var(--pop-yellow)", "var(--pop-cyan)", "var(--pop-pink)"];

export default function Classes() {
  const [classes, setClasses] = useState(FALLBACK_CLASSES);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    api.getClasses().then((data) => {
      if (data?.classes?.length) setClasses(data.classes);
    }).catch(() => {
      /* keep fallback data */
    });
  }, []);

  return (
    <section id="classes" className="section classes">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Your ticket in</span>
          <h2>Pick your class</h2>
          <p>
            Every batch is small, coached and built around a real performance goal — walk in as a beginner,
            leave rehearsal-ready.
          </p>
        </div>

        <div className="ticket-grid">
          {classes.map((c, i) => (
            <article className="ticket-card" key={c.id}>
              <div className="ticket-main">
                <span className="eyebrow ticket-level">{c.level} · Age {c.ageGroup}</span>
                <h3>{c.title}</h3>
                <p className="ticket-tagline">{c.tagline}</p>
                <ul className="ticket-schedule">
                  {c.schedule.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="ticket-divider" aria-hidden="true" />
              <div className="ticket-stub" style={{ background: STUB_COLORS[i % STUB_COLORS.length] }}>
                <span className="ticket-stub-label">Trainer</span>
                <span className="ticket-stub-trainer">{c.trainer}</span>
                <a href="/#pricing" className="ticket-stub-price-link">See pricing →</a>
                <button className="btn btn-secondary ticket-stub-btn" onClick={() => setSelected(c)}>
                  Enroll
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && <EnrollModal danceClass={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
