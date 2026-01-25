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
    id: "first-agent",
    title: "rabbit",
    description:
      "A rabbit is a herbivorous animal with long ears and strong hind legs, known for its ability to run and jump quickly.It is generally gentle and often eats grass and vegetables.",
    coverImage: {
      src: "/projects/rabbit.jpg",
      alt: "The First Agent",
    },
  },
  {
    id: "second-agent",
    title: "Pomeranian",
    description:
      "A Pomeranian is a small, fluffy dog known for its lively personality and fox-like face. It is intelligent, affectionate, and popular as a companion pet.",
    coverImage: {
      src: "/projects/dog.jpg",
      alt: "The Second Agent",
    },
  },
  {
    id: "third-agent",
    title: "Persian",
    description:
      "A Persian cat is a long-haired cat known for its flat face and calm, gentle nature. It is affectionate and enjoys a quiet, comfortable environment.",
    coverImage: {
      src: "/projects/cat.jpg",
      alt: "The Third Agent",
    },
  },
  {
    id: "fourth-agent",
    title: "Duck",
    description:
      "A duck is a waterfowl with a flat bill and webbed feet, well adapted for swimming. It lives near water and feeds on plants and small animals.",
    coverImage: {
      src: "/projects/duck.png",
      alt: "The fourth Agent",
    },
  },
  {
    id: "fifth-agent",
    title: "Flying squirrel",
    description:
      "A flying squirrel is a small squirrel that can glide between trees using a skin membrane. It is mostly nocturnal and lives in forested areas.",
    coverImage: {
      src: "/projects/squirrel.jpg",
      alt: "The fifth Agent",
    },
  },
  {
    id: "sixth-agent",
    title: "Meerkat",
    description:
      "A meerkat is a small mammal that lives in groups and stands upright to watch for danger.  It is social, alert, and commonly found in desert regions.",
    coverImage: {
      src: "/projects/meerkat.jpg",
      alt: "The sixth Agent",
    },
  },
  {
    id: "seventh-agent",
    title: "Skunk",
    description:
      "A skunk is a small mammal known for its black-and-white fur and its ability to spray a strong-smelling liquid to defend itself from danger.",
    coverImage: {
      src: "/projects/skunk.jpg",
      alt: "The seventh Agent",
    },
  },
  {
    id: "eighth-agent",
    title: "Red panda",
    description:
      "A red panda is a small mammal with reddish-brown fur and a long, bushy tail, known for its shy nature and tree-dwelling lifestyle.",
    coverImage: {
      src: "/projects/panda.jpg",
      alt: "The eighth Agent",
    },
  },
  {
    id: "ninth-agent",
    title: "Capybara",
    description:
      "A capybara is the world’s largest rodent, known for its calm temperament and semi-aquatic lifestyle, often living near rivers and lakes.",
    coverImage: {
      src: "/projects/capybara.jpg",
      alt: "The ninth Agent",
    },
  },
  {
    id: "tenth-agent",
    title: "Arctic fox",
    description:
      "An Arctic fox is a small fox with thick fur that changes color with the seasons, allowing it to survive in extremely cold Arctic environments.",
    coverImage: {
      src: "/projects/fox.jpg",
      alt: "The tenth Agent",
    },
  },
];