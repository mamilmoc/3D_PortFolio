import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  messengerclone,
  webdiary,
  gerichtrestaurant,
  youtubeclone,
  dashboard,
  spotifyclone,
  threejs,
  nextjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Git",
    icon: git,
  },
];

const projects = [
  {
    name: "Gericht Restaurant",
    description:
      "A fully responsive restaurant website crafted using Figma, thoughtfully presenting an array of essential features requisite for a professional business webpage.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: gerichtrestaurant,
    source_code_link1: "https://github.com/mamilmoc/Gericht_restaurant",
    source_code_link2: "https://gericht-restaurant-gamma.vercel.app/",
  },
  {
    name: "Web Diary",
    description:
      "A comprehensive MERN project encompassing streamlined authentication functionality, empowering users to create, modify, and manage their individual diaries.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs + nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: webdiary,
    source_code_link1: "https://github.com/mamilmoc/Diary",
    source_code_link2: "https://diary-s1lv.onrender.com",
  },
  {
    name: "Admin Dashboard",
    description:
      "An adept e-commerce admin dashboard for streamlined business management, enriched with supplementary features for enhanced operational control.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link1: "https://github.com/mamilmoc/Dashboard",
    source_code_link2: "https://dashboard-six-lilac.vercel.app/",
  },
  {
    name: "Youtube Clone",
    description:
      "A user-friendly YouTube emulation enabling effortless video search and playback, leveraging RapidAPI integration for content sourcing.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "materialui",
        color: "green-text-gradient",
      },
      {
        name: "rapidapi",
        color: "pink-text-gradient",
      },
    ],
    image: youtubeclone,
    source_code_link1: "https://github.com/mamilmoc/youtube_clone",
    source_code_link2: "https://youtube-clone-sandy-nine.vercel.app/",
  },
  {
    name: "Messenger Clone",
    description:
      "A fully operational real-time messaging replica with authentication that enables users to engage in conversations with their preferred contacts.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: messengerclone,
    source_code_link1: "https://github.com/mamilmoc/messenger-clone",
    source_code_link2: "https://messenger-clone-gilt-mu.vercel.app/",
  },
  {
    name: "Spotify Clone",
    description:
      "A Spotify clone which allows the users to upload and listen to their favorite music. Stripe has been implemented to imitate the subscription.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: spotifyclone,
    source_code_link1: "https://github.com/mamilmoc/spotify-clone",
    source_code_link2: "https://spotify-clone-theta-lovat.vercel.app/",
  },
];

export { services, technologies, projects };