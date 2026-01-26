export type Project = {
  id: string;
  title: string;
  description: string;
  coverImage: {
    src: string;
    alt: string;
  };
};

export const projects: Project[] = [
  {
    id: "cute otter",
    title: "Outter",
    description:
      "An otter is a creature that floats on the water, resting its head on its belly.They're cute whether they're wearing glasses, holding a clam, or doing absolutely anything.",
    coverImage: {
      src: "/projects/Otter.png",
      alt: "cute otter",
    },
  },
  {
    id: "cute pingu",
    title: "Pingu",
    description:
      "Pingu is cute even just walking around, and his signature noot noot sound is adorable. He is so cute and widely popular, so there are many adorable merchandise items featuring him.",
    coverImage: {
      src: "/projects/pingu.png",
      alt: "cute pingu",
    },
  },
  {
    id: "cute raccoon",
    title: "Raccoon",
    description:
      "Raccoons are especially cute because they carefully hold things with their tiny hands. Their curious expressions and playful behavior make people smile.",
    coverImage: {
      src: "/projects/raccoon.png",
      alt: "cute raccoon",
    },
  },
];