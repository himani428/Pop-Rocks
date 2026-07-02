import "../styles/testimonials.css";

const QUOTES = [
  {
    name: "Ritika, parent of a 6-year-old",
    role: "Kids Dance",
    text: "My daughter used to be shy about performing. Six months into Kids Dance and she asks to practice every single day."
  },
  {
    name: "Aman",
    role: "Hip Hop, 2 years",
    text: "The classes are tough in the best way. I went from not knowing a single move to performing at two college fests."
  },
  {
    name: "The Sharma family",
    role: "Sangeet choreography",
    text: "They choreographed our whole sangeet — three generations on one stage — and made every rehearsal genuinely fun."
  }
];

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Word on the floor</span>
          <h2>What dancers & families say</h2>
        </div>

        <div className="pass-grid">
          {QUOTES.map((q) => (
            <div className="pass-card" key={q.name}>
              <div className="pass-hole" aria-hidden="true" />
              <p className="pass-quote">“{q.text}”</p>
              <div className="pass-footer">
                <span className="pass-name">{q.name}</span>
                <span className="pass-role">{q.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
