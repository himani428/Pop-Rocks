import "../styles/about.css";

const PILLARS = [
  {
    title: "Every non-dancer becomes a dancer",
    text: "Our mission is simple: anyone who walks in without a dance background should walk out as one — trained, confident and ready to perform."
  },
  {
    title: "Every dancer reaches their goal",
    text: "For students who already dance, our job is to get you to your goal — through consistent, dedicated coaching, one class at a time."
  },
  {
    title: "Built for performance",
    text: "Every level, from the Fitness Batch to Master Class, is preparing for something real: a showcase, a stage or a celebration."
  }
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-photo">
          <img
            src="https://images.pexels.com/photos/8853841/pexels-photo-8853841.jpeg?auto=compress&cs=tinysrgb&w=900"
            alt="Dancer training in the studio"
          />
          <div className="about-photo-tag">
            <span>FOUNDER-LED</span>
            <span>HIP HOP TRAINING</span>
          </div>
        </div>

        <div className="about-copy">
          <span className="eyebrow about-eyebrow">Who we are</span>
          <h2>
            Started on the street.
            <br />
            Built for the stage.
          </h2>
          <p className="about-lead">
            Pop Rocks Dance Academy was founded by Lucky Bhargav, a trainer with 15 years of
            experience trained under Nritya Shakti, Melvin Louis, Team Naach, Kiran J and Arunima
            De. Our mission is simple: we want every non-dancer who joins us to leave as a dancer
            — and every dancer who's already here to reach their goal, through our dedication and
            effort. Today we teach Fitness, Ladies, Kids and Couple batches, and take that same
            training onto wedding stages and sangeets across the city.
          </p>

          <div className="about-pillars">
            {PILLARS.map((p) => (
              <div className="about-pillar" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
