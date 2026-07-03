import { useEffect, useState } from "react";
import { PartyPopper, Sparkles, Briefcase, Mic2, Heart, AtSign } from "lucide-react";
import { api } from "../api/client";
import { FALLBACK_SERVICES } from "../data/fallback";
import BookEventModal from "./BookEventModal.jsx";
import "../styles/services.css";

const ICONS = {
  sparkle: Sparkles,
  confetti: PartyPopper,
  briefcase: Briefcase,
  mic: Mic2,
  heart: Heart
};

export default function Services() {
  const [services, setServices] = useState(FALLBACK_SERVICES);
  const [selected, setSelected] = useState(null);
  const [showGeneric, setShowGeneric] = useState(false);

  useEffect(() => {
    api.getServices().then((data) => {
      if (data?.services?.length) setServices(data.services);
    }).catch(() => {});
  }, []);

  return (
    <section id="services" className="section services on-ink">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Beyond the classroom</span>
          <h2>We choreograph your big day</h2>
          <p>
            Planning a sangeet, a birthday showcase or a college fest? Our team scripts, teaches
            and rehearses the whole performance with you — no dance background required.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => {
            const Icon = ICONS[s.icon] || Sparkles;
            return (
              <div className="service-card" key={s.id}>
                <Icon size={28} strokeWidth={1.8} />
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                {s.instagram && (
                  <a href={s.instagram} target="_blank" rel="noreferrer" className="service-instagram">
                    <AtSign size={14} /> {s.instagramHandle}
                  </a>
                )}
                <button className="btn-ghost service-cta" onClick={() => setSelected(s)}>
                  Request this →
                </button>
              </div>
            );
          })}
        </div>

        <div className="services-footer">
          <p>Have something else in mind? We build custom choreography for almost any occasion.</p>
          <button className="btn btn-yellow" onClick={() => setShowGeneric(true)}>Plan a custom event</button>
        </div>
      </div>

      {selected && <BookEventModal service={selected} onClose={() => setSelected(null)} />}
      {showGeneric && <BookEventModal service={null} onClose={() => setShowGeneric(false)} />}
    </section>
  );
}