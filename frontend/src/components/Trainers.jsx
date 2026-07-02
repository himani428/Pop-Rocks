import { useEffect, useState } from "react";
import { api } from "../api/client";
import { FALLBACK_TRAINERS } from "../data/fallback";
import "../styles/trainers.css";

export default function Trainers() {
  const [trainers, setTrainers] = useState(FALLBACK_TRAINERS);

  useEffect(() => {
    api.getTrainers().then((data) => {
      if (data?.trainers?.length) setTrainers(data.trainers);
    }).catch(() => {});
  }, []);

  return (
    <section id="trainers" className="section trainers">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Who's teaching</span>
          <h2>Meet your trainers</h2>
          <p>Every class is led by trainers who still perform and choreograph professionally — not just teach from a syllabus.</p>
        </div>

        <div className="trainers-grid">
          {trainers.map((t) => (
            <div className="trainer-card" key={t.id}>
              <div className="trainer-photo">
                <img src={t.photo} alt={t.name} />
              </div>
              <div className="trainer-info">
                <span className="eyebrow trainer-role">{t.role}</span>
                <h3>{t.name}</h3>
                <p className="trainer-experience">{t.experience}</p>
                <p className="trainer-trained">{t.trainedBy}</p>
                <p className="trainer-bio">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
