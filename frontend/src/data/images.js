// ============================================================
// EVERY PHOTO ON THE SITE — ALL IN ONE PLACE
// ============================================================
//
// TO USE YOUR OWN PHOTOS:
//   1. Save your image file into `frontend/public/images/`
//      (create the folder if you don't see it — trainer photos go in
//      `frontend/public/images/trainers/` instead, see bottom of this file).
//      Any filename works — jpg, png or webp, any name you like.
//   2. Update the matching line below to `"/images/your-filename.jpg"`.
//   3. Save. Restart `npm start` (or just redeploy) and it's live.
//
// You never need to touch any component file (Hero.jsx, About.jsx, etc.) —
// they all read from this file.

export const IMAGES = {
  // Hero section — the big photo on the homepage
  hero: "https://images.pexels.com/photos/2820896/pexels-photo-2820896.jpeg?auto=compress&cs=tinysrgb&w=1000",

  // About section — the studio/training photo
  about: "https://images.pexels.com/photos/8853841/pexels-photo-8853841.jpeg?auto=compress&cs=tinysrgb&w=900",

  // "Pop Rocks Dance n Events" wedding planning section
  weddingEvents: "https://images.pexels.com/photos/4714521/pexels-photo-4714521.jpeg?auto=compress&cs=tinysrgb&w=900",

  // Gallery grid — 5 photos, in display order (the 1st and 4th are the large tiles)
  gallery: [
    "https://images.pexels.com/photos/2820896/pexels-photo-2820896.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/8853841/pexels-photo-8853841.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/6715556/pexels-photo-6715556.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4714521/pexels-photo-4714521.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/6719004/pexels-photo-6719004.jpeg?auto=compress&cs=tinysrgb&w=800"
  ]
};

// Trainer photos live in `frontend/public/images/trainers/` and are referenced
// from `backend/db.js` (and mirrored in `frontend/src/data/fallback.js`) since
// trainer info comes from the API. To swap a trainer photo:
//   1. Save the file as `frontend/public/images/trainers/lucky-bhargav.jpg`
//      (or `.../muskan.jpg`) — same filename, so no other change is needed.
//   2. If you use a different filename/extension, update the `photo` field for
//      that trainer in BOTH `backend/db.js` and `frontend/src/data/fallback.js`.