export const FALLBACK_CLASSES = [
  {
    id: "fitness-batch",
    title: "Fitness Batch",
    level: "All levels",
    ageGroup: "16+",
    trainer: "Lucky Bhargav",
    tagline: "Zumba, cardio, yoga, dumbbell work and stretching in one sweaty hour.",
    description:
      "A full-body fitness batch built around dance-based cardio. Mixes Zumba, yoga, light dumbbell work and stretching so you build strength and stamina while having fun.",
    schedule: ["Morning · 6:00 AM – 8:00 AM", "Evening · 6:00 PM – 7:00 PM"]
  },
  {
    id: "ladies-batch",
    title: "Girls & Ladies Batch",
    level: "Basic & Advanced",
    ageGroup: "12+",
    trainer: "Lucky Bhargav & Muskan",
    tagline: "Bollywood, Punjabi, semi-classical, hip hop and contemporary — pick your pace.",
    description:
      "Our most popular batch. Learn Bollywood, Punjabi, semi-classical, hip hop and contemporary styles in a supportive, all-women space, from first steps to performance-ready choreography.",
    schedule: [
      "Basic · 9:00 AM – 10:00 AM",
      "Basic · 5:00 PM – 6:00 PM",
      "Advanced · 7:00 PM – 8:00 PM"
    ]
  },
  {
    id: "kids-batch",
    title: "Kids Batch",
    level: "Pre-teens · Level 1 · Level 2",
    ageGroup: "4 – 12",
    trainer: "Muskan",
    tagline: "A playful, structured path from a dancer's first class to their first stage.",
    description:
      "A leveled program that builds rhythm, coordination and confidence in a safe, encouraging environment — with a batch for every stage, from pre-teens to Level 2.",
    schedule: [
      "Pre-teens · 5:00 PM – 6:00 PM",
      "Level 2 · 6:00 PM – 7:00 PM",
      "Level 1 · 7:00 PM – 8:00 PM"
    ]
  },
  {
    id: "couple-choreography",
    title: "Couple Choreography",
    level: "All levels",
    ageGroup: "16+",
    trainer: "Lucky Bhargav & Muskan",
    tagline: "A fun, guided routine designed for two — perfect for your sangeet or anniversary.",
    description:
      "Learn a routine built just for you and your partner, whether you're prepping for a wedding stage or just want a fun new way to spend time together.",
    schedule: ["Daily · 8:00 PM – 9:00 PM"]
  },
  {
    id: "master-class",
    title: "Master Class",
    level: "Intermediate – Advanced",
    ageGroup: "14+",
    trainer: "Lucky Bhargav & Muskan",
    tagline: "Weekend intensives for dancers ready to push their technique further.",
    description:
      "A focused weekend session for dancers who already have the basics down and want to train harder, learn faster and sharpen performance-level technique.",
    schedule: ["Sat & Sun · 5:00 PM – 7:00 PM"]
  },
  {
    id: "personal-training",
    title: "Personal Training",
    level: "One-on-one",
    ageGroup: "All ages",
    trainer: "Lucky Bhargav",
    tagline: "One-on-one coaching built entirely around your goals and schedule.",
    description:
      "Private, one-on-one sessions for dancers who want individual attention — whether you're preparing for an audition, a performance, or just want to progress faster.",
    schedule: ["By appointment"]
  }
];

export const FALLBACK_TRAINERS = [
  {
    id: "lucky-bhargav",
    name: "Lucky Bhargav",
    role: "Founder & Lead Trainer",
    experience: "15 years of experience",
    trainedBy: "Trained by Nritya Shakti, Melvin Louis, Team Naach, Kiran J and Arunima De",
    bio: "Leads the Fitness Batch, Girls & Ladies Batch and Couple Choreography, bringing 15 years of training and performance experience to every class.",
    photo: "https://images.pexels.com/photos/2820896/pexels-photo-2820896.jpeg?auto=compress&cs=tinysrgb&w=700"
  },
  {
    id: "muskan",
    name: "Muskan",
    role: "Trainer",
    experience: "Kids & Ladies Batch specialist",
    trainedBy: "Trained by Team Naach and Kiran J",
    bio: "Leads the Kids Batch and co-teaches the Girls & Ladies Batch, known for making technique fun and approachable for the youngest dancers.",
    photo: "https://images.pexels.com/photos/5150419/pexels-photo-5150419.jpeg?auto=compress&cs=tinysrgb&w=700"
  }
];

export const FALLBACK_PRICING = {
  regular: [
    { batch: "Fitness Batch", detail: "20 classes", price: 1500 },
    { batch: "Kids Batch", detail: "24 classes", price: 1500 },
    { batch: "Ladies Batch — Basic", detail: "20 classes", price: 1500 },
    { batch: "Ladies Batch — Advance", detail: "20 classes", price: 2000 },
    { batch: "Master Class", detail: "8 classes", price: 2000 },
    { batch: "Couple Batch", detail: "20 classes", price: 4000 },
    { batch: "Personal Training", detail: "20 classes", price: 5000 }
  ],
  package3month: [
    { batch: "Kids Batch", detail: "3-month package", price: 4000 },
    { batch: "Ladies Batch — Basic", detail: "3-month package", price: 4000 },
    { batch: "Ladies Batch — Advance", detail: "3-month package", price: 5500 },
    { batch: "Master Class", detail: "3-month package", price: 6000 },
    { batch: "Couple Batch", detail: "3-month package", price: 10000 }
  ]
};

export const FALLBACK_SERVICES = [
  {
    id: "wedding-sangeet",
    title: "Wedding & Sangeet Choreography",
    description:
      "From the couple's first dance to a full baraat entry and sangeet showstopper, we script, choreograph and rehearse every performance with your family — for every age and every comfort level with dance.",
    icon: "sparkle"
  },
  {
    id: "wedding-planning",
    title: "Full Wedding Planning",
    description:
      "Planning the whole wedding, not just the dance floor? Our sister company, Pop Rocks Dance n Events, handles venues, decor, catering coordination and full event planning — alongside the choreography you already know us for.",
    icon: "heart",
    instagram: "https://www.instagram.com/p.r.events_7/",
    instagramHandle: "@p.r.events_7"
  },
  {
    id: "birthday-events",
    title: "Birthdays & Private Parties",
    description:
      "Custom routines and dance-based entertainment for birthdays, anniversaries and milestone celebrations.",
    icon: "confetti"
  },
  {
    id: "corporate",
    title: "Corporate & College Events",
    description:
      "Flash mobs, curtain-raisers and team performances choreographed and rehearsed on your timeline.",
    icon: "briefcase"
  },
  {
    id: "workshops",
    title: "Workshops & Masterclasses",
    description:
      "One-off intensives on hip hop fundamentals, freestyle and choreography for schools, colleges and groups.",
    icon: "mic"
  }
];