export const IMG_URL = "/sajjad.png";

// Gradient per tech for pretty chips
export const gradientFor = (t) => {
  const map = {
    HTML5: "from-orange-500 to-red-500",
    CSS3: "from-sky-500 to-indigo-500",
    "Tailwind CSS": "from-sky-400 to-cyan-500",
    JavaScript: "from-yellow-400 to-orange-500",
    TypeScript: "from-blue-400 to-indigo-600",
    "React.js": "from-cyan-500 to-blue-600",
    "React Router DOM": "from-rose-500 to-pink-600",
    "React Query": "from-red-400 to-rose-500",
    Redux: "from-purple-500 to-pink-500",
    "React Hook Form": "from-fuchsia-500 to-pink-600",
    "Express.js": "from-stone-500 to-neutral-700",
    MongoDB: "from-emerald-500 to-green-700",
    Mongoose: "from-lime-500 to-emerald-600",
    MUI: "from-blue-500 to-indigo-500",
    "Next.js": "from-zinc-700 to-neutral-900",
    "Prisma ORM": "from-emerald-400 to-teal-600",
    "Postgres SQL": "from-sky-500 to-blue-700",
    "Ant Design": "from-red-500 to-rose-600",
    GraphQL: "from-pink-500 to-rose-500",
    GitHub: "from-zinc-600 to-neutral-800",
    "VS Code": "from-sky-500 to-blue-600",
    Firebase: "from-amber-400 to-orange-500",
    Netlify: "from-teal-400 to-cyan-600",
    "Chrome DevTools": "from-amber-500 to-red-500",
  };
  return map[t] || "from-violet-500 to-fuchsia-600";
};

// Featured projects (covers + repos + live)
export const PROJECTS = [
  {
    id: "foundit",
    title: "FoundIt (Lost & Found Management)",
    description:
      "End-to-end platform for reporting, searching, and claiming lost/found items with role-based dashboards, advanced search, and admin oversight.",
    image: "https://i.ibb.co.com/zhNmntNS/Screenshot-1.png",
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Postgres SQL",
      "Prisma ORM",
      "Express.js",
      "JWT",
      "Redux",
      "Zod",
      "React Hook Form",
    ],
    frontend: "https://github.com/sajid1545/FoundIt-client",
    backend: "https://github.com/sajid1545/FoundIt-server",
    live: "https://assignment-9-client.vercel.app/",
  },
  {
    id: "laptop-city",
    title: "Laptop City",
    description:
      "Reseller platform with buyer/seller roles, JWT-secured dashboards, Stripe payments, and admin tools.",
    image: "https://i.ibb.co/5R4PYgk/Laptop-city.jpg",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Stripe",
      "JWT",
    ],
    frontend: "https://github.com/sajid1545/laptop-city-cllient",
    backend: "https://github.com/sajid1545/laptop-city-server",
    live: "https://whimsical-pavlova-5e8a87.netlify.app/",
  },
  {
    id: "nikah-photo",
    title: "Nikah Photography",
    description:
      "Personal service app for event bookings and reviews with secure login and CRUD flows.",
    image: "https://i.ibb.co/DkC0Q04/Nikah-photography.jpg",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Firebase",
      "JWT",
    ],
    frontend: "https://github.com/sajid1545/Nikah-photography_client",
    backend: "https://github.com/sajid1545/Nikah-photography_server",
    live: "https://assignment-11-cf2b9.web.app/",
  },
];

// entry animation helper
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16, filter: "blur(2px)" },
  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay },
  },
  viewport: { once: true, amount: 0.55 },
});
