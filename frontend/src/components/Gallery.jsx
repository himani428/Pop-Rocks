import { IMAGES } from "../data/images";
import "../styles/gallery.css";

const PHOTOS = [
  {
    src: IMAGES.gallery[0],
    alt: "Breakdance performance at an outdoor street event",
    big: true
  },
  {
    src: IMAGES.gallery[1],
    alt: "Dancer stretching in the studio mirror"
  },
  {
    src: IMAGES.gallery[2],
    alt: "Children in a dance class with their instructor"
  },
  {
    src: IMAGES.gallery[3],
    alt: "Group performing a colorful celebration dance",
    big: true
  },
  {
    src: IMAGES.gallery[4],
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