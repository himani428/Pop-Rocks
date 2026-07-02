import "../styles/gallery.css";

const PHOTOS = [
  {
    src: "https://images.pexels.com/photos/2820896/pexels-photo-2820896.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Breakdance performance at an outdoor street event",
    big: true
  },
  {
    src: "https://images.pexels.com/photos/8853841/pexels-photo-8853841.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Dancer stretching in the studio mirror"
  },
  {
    src: "https://images.pexels.com/photos/6715556/pexels-photo-6715556.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Children in a dance class with their instructor"
  },
  {
    src: "https://images.pexels.com/photos/4714521/pexels-photo-4714521.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Group performing a colorful celebration dance",
    big: true
  },
  {
    src: "https://images.pexels.com/photos/6719004/pexels-photo-6719004.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Kids practicing choreography together"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">On the floor</span>
          <h2>Straight from the studio</h2>
          <p>A peek at classes, rehearsals and performances. Real photos of your batch — and your event — coming soon.</p>
        </div>

        <div className="gallery-grid">
          {PHOTOS.map((p) => (
            <div className={`gallery-item ${p.big ? "is-big" : ""}`} key={p.src}>
              <img src={p.src} alt={p.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
