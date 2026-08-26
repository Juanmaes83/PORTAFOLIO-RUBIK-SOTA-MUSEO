export type LandingChapter = {
  id: string;
  index: string;
  eyebrow: string;
  headline: string;
  body: string;
  side: "left" | "right";
};

export const landingChapters: LandingChapter[] = [
  {
    id: "practice",
    index: "01",
    eyebrow: "Rubik Sota / Practice",
    headline: "Ideas become places you can enter.",
    body: "The portfolio is not a catalogue. Each project is framed as an experience with its own rhythm, image and point of view.",
    side: "left",
  },
  {
    id: "work",
    index: "02",
    eyebrow: "Selected work / Curated",
    headline: "Six projects. Six rooms. One authored journey.",
    body: "The landing prepares the visitor for the museum: work is introduced as a collection, not as a grid of interchangeable cards.",
    side: "right",
  },
  {
    id: "system",
    index: "03",
    eyebrow: "Design / Direction / Motion",
    headline: "Visual systems with memory, movement and consequence.",
    body: "Identity, digital experience and motion are treated as one system. The final museum makes those relationships spatial.",
    side: "left",
  },
];

export const disciplines = [
  "Creative Direction",
  "Brand Systems",
  "Digital Experiences",
  "Motion & Film",
  "Interactive Worlds",
  "Experimental Work",
];
