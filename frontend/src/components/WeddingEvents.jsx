import { useState } from "react";
import { MapPin, UtensilsCrossed, ClipboardCheck, Music2 } from "lucide-react";
import { IMAGES } from "../data/images";
import BookEventModal from "./BookEventModal.jsx";
import "../styles/wedding-events.css";

const OFFERINGS = [
  { icon: MapPin, text: "Venue sourcing & decor" },
  { icon: UtensilsCrossed, text: "Catering coordination" },
  { icon: ClipboardCheck, text: "Full day-of event management" },
  { icon: Music2, text: "Paired with our own choreography" }
];

const WEDDING_EVENTS_SERVICE = {
  id: "wedding-planning",
  title: "Wedding Planning — Pop Rocks Dance n Events"
};

export default function WeddingEvents() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="wedding-events" className="section wedding-events">
      <div className="container we-grid">
        <div className="we-photo">
          <img src={IMAGES.weddingEvents} alt="Colorful celebration at an Indian wedding event" />
          <div className="we-photo-badge">SISTER CO.</div>
        </div>

        <div className="we-copy">
          <span className="eyebrow we-eyebrow">Beyond dance</span>
          <h2>
            Planning the whole wedding?
            <br />
            That's us too.
          </h2>
          <p className="we-lead">
            <strong>Pop Rocks Dance n Events</strong> is our sister company for complete wedding
            planning — venues, decor, catering coordination and on-ground event management,
            alongside the choreography you already know Pop Rocks for. One team, one wedding,
            start to finish.
          </p>

          <ul className="we-offerings">
            {OFFERINGS.map((o) => (
              <li key={o.text}>
                <o.icon size={18} strokeWidth={1.8} />
                <span>{o.text}</span>
              </li>
            ))}
          </ul>

          <div className="we-actions">
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
              Enquire about wedding planning
            </button>
            <a
              href="https://www.instagram.com/p.r.events_7/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary we-instagram"
            >
              @p.r.events_7 on Instagram
            </a>
          </div>
        </div>
      </div>

      {showModal && <BookEventModal service={WEDDING_EVENTS_SERVICE} onClose={() => setShowModal(false)} />}
    </section>
  );
}