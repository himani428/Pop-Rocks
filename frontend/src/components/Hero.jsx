import { motion } from "framer-motion";
import "../styles/hero.css";

const ribbonText = "HIP HOP • BOLLYWOOD • CONTEMPORARY • KIDS DANCE • WEDDING & SANGEET CHOREO • ";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-ribbon" aria-hidden="true">
        <div className="hero-ribbon-track">
          <span>{ribbonText.repeat(3)}</span>
          <span>{ribbonText.repeat(3)}</span>
        </div>
      </div>

      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="eyebrow hero-eyebrow">Mathura's home for hip hop & choreography</span>
          <h1 className="hero-title">
            EVERY BEAT
            <br />
            IS A STAGE
          </h1>
          <p className="hero-sub">
            Pop Rocks Dance Academy trains kids, teens and adults in hip hop, Bollywood and
            contemporary dance — and choreographs your wedding sangeet, birthday, or big
            performance from the first count to the final pose.
          </p>
          <div className="hero-actions">
            <a href="/#classes" className="btn btn-primary">Find your class</a>
            <a href="/#services" className="btn btn-secondary hero-secondary">Plan an event</a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>6+</strong>
              <span>dance styles taught</span>
            </div>
            <div>
              <strong>4 – 40</strong>
              <span>ages welcome</span>
            </div>
            <div>
              <strong>100+</strong>
              <span>sangeets choreographed</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <div className="hero-photo-frame">
            <img
              src="https://images.pexels.com/photos/2820896/pexels-photo-2820896.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Dancer performing hip hop at an outdoor event"
            />
          </div>
          <div className="hero-badge">
            <span className="hero-badge-line1">EST.</span>
            <span className="hero-badge-line2">2016</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
