import ProjectCard from "./ProjectCard";
import Section from "./Section";

import assets from "../assets/index";

export const projects = [
  {
    _id: "1",
    title: "FoundIt (Lost & Found Management)",
    description:
      "Centralized platform for reporting, finding, and claiming lost or found items, with role-based access and advanced filtering.",
    image: "https://i.ibb.co/zhNmntNS/Screenshot-1.png",
    images: [
      "https://i.ibb.co/zhNmntNS/Screenshot-1.png",
      "https://i.ibb.co.com/twgzL6Zj/claim-page.png",
      "https://i.ibb.co.com/cKrwk08K/found-Items.png",
      "https://i.ibb.co.com/b5qwnddS/foundit-profile.png",
      "https://i.ibb.co.com/QjMYmYSc/lost-items.png",
      "https://i.ibb.co.com/jjTRHBx/lost-details.png ",
    ],
    tech: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Redux Toolkit",
      "Axios",
      "JWT",
      "Zod",
      "React Hook Form",
      "Postgres SQL",
      "Prisma",
    ],
    details: [
      "Users can report lost or found items, search with keywords and filters, and claim items through a secure request process.",
      "Role-based features: Admins manage users, approve/reject claims, and view dashboard analytics; regular users manage their own reports and claims.",
      "Secure authentication with JWT, stored in both local storage and cookies, with inactive accounts restricted from login.",
      "Profile management including password updates, profile edits, and real-time status changes for lost/found items.",
      "Advanced filtering and pagination for large datasets; confirmation modals for critical actions like deletions.",
    ],
    challenges: [
      "Designing a flexible search and filter system capable of handling multiple query parameters and pagination.",
      "Ensuring consistent role-based access control with secure session handling.",
      "Balancing UI complexity with usability in the claim request and approval process.",
    ],
    learnings: [
      "Gained deep experience in building admin dashboards with analytics for real-world applications.",
      "Improved skills in secure form handling and validation with React Hook Form + Zod.",
      "Refined approach to handling JWT authentication across client and server with token expiry handling.",
    ],
    frontend: "https://github.com/sajid1545/FoundIt-client",
    backend: "https://github.com/sajid1545/FoundIt-server",
    live: "https://assignment-9-client.vercel.app/",
  },
  {
    _id: "2",
    title: "Laptop City",
    description:
      "Global marketplace for refurbished laptops with role-based dashboards, secure payments, and administrative moderation.",
    image: "https://i.ibb.co/5R4PYgk/Laptop-city.jpg",
    images: [
      assets.projects.laptopCity.laptopCity1,
      assets.projects.laptopCity.laptopCity2,
      assets.projects.laptopCity.laptopCity3,
      assets.projects.laptopCity.laptopCity4,
      assets.projects.laptopCity.laptopCity5,
      assets.projects.laptopCity.laptopCity6,
      assets.projects.laptopCity.laptopCity7,
    ],
    tech: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Stripe",
      "JWT",
    ],
    details: [
      "Three user roles — Buyer, Seller, and Admin — each with distinct dashboard routes and capabilities.",
      "Buyers can book laptops, pay securely with Stripe, and manage orders; purchased items are automatically removed from listings.",
      "Sellers can list, advertise, and delete products; advertised items are shown on the home page until sold.",
      "Admins oversee all users, manage reported products, and can downgrade seller accounts to buyers.",
      "Dark/light mode toggle for accessibility; automatic role-based routing after login.",
    ],
    challenges: [
      "Integrating Stripe payments with real-time updates to product availability and order status.",
      "Implementing secure, role-based route protection across dashboard views.",
      "Ensuring smooth UX when updating or removing products from multiple views.",
    ],
    learnings: [
      "Improved ability to manage role-based state and routing in React applications.",
      "Enhanced experience with payment gateway integration and secure transaction flows.",
      "Learned to implement effective product moderation workflows for admin users.",
    ],
    frontend: "https://github.com/sajid1545/laptop-city-cllient",
    backend: "https://github.com/sajid1545/laptop-city-server",
    live: "https://whimsical-pavlova-5e8a87.netlify.app/",
  },
  {
    _id: "3",
    title: "Nikah Photography",
    description:
      "A photography service platform allowing users to explore services, leave reviews, and manage listings with secure authentication.",
    image: "https://i.ibb.co/DkC0Q04/Nikah-photography.jpg",
    images: [
      "https://i.ibb.co/G5zv55x/1.jpg",
      "https://i.ibb.co/f12g860/3.png",
      "https://i.ibb.co/KNbHfJx/2.jpg",
    ],
    tech: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "JWT",
    ],
    details: [
      "Protected routes for My Services and Add Review pages, accessible only to signed-in users.",
      "Authentication via Google or email/password with JWT tokens expiring in one day for security.",
      "Logged-in users can add new services, review existing services, and manage their reviews (edit/delete).",
      "Home page highlights three most recent services, while service details page features chronologically sorted reviews.",
      "Pagination implemented for service listings to optimize performance and browsing experience.",
    ],
    challenges: [
      "Implementing secure review editing/deletion with user-specific permissions.",
      "Ensuring consistent sorting logic for services and reviews while maintaining performance.",
    ],
    learnings: [
      "Enhanced ability to build user-friendly CRUD flows with secure API endpoints.",
      "Gained experience in implementing pagination and sorted queries for better UX and scalability.",
    ],
    frontend: "https://github.com/sajid1545/Nikah-photography_client",
    backend: "https://github.com/sajid1545/Nikah-photography_server",
    live: "https://assignment-11-cf2b9.firebaseapp.com/",
  },
  {
    _id: "4",
    title: "Epic Coding",
    description:
      "Online coding education platform offering courses with instructor info and ratings.",
    image: "https://i.ibb.co/2y9Kjp1/Epic-coding.jpg",
    images: [
      "https://i.ibb.co/2y9Kjp1/Epic-coding.jpg",
      "https://i.ibb.co/VWmcNg6/1.jpg",
      "https://i.ibb.co/NWVJdDQ/2.png",
      "https://i.ibb.co.com/1tXxww28/epic-code-purchase.png",
      "https://i.ibb.co.com/Y4m9SRkn/epic-success-enroll.png",
      "https://i.ibb.co.com/0RF8FBpm/epic-user-profile.png",
    ],
    tech: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "JWT",
    ],
    details: [
      "Course listing with filters (difficulty, topic, rating).",
      "Instructor profiles and student reviews with moderation.",
      "Enrollment flow with protected content and progress save.",
      "REST API with JWT; rate limits and input sanitization.",
      "Micro-interactions and motion for perceived quality.",
    ],
    frontend: "https://github.com/sajid1545/epic-coding_client",
    backend: "https://github.com/sajid1545/epic-coding_server",
    live: "https://assignment-10-epic-coding.web.app/",
  },
  {
    _id: "5",
    title: "Donation - X",
    description:
      "Donation-X is a web platform that enables users to host, manage, and participate in charity events with an intuitive donor and organizer experience.",
    image: "https://i.ibb.co/ZgSnGdx/title.png",
    images: [
      "https://i.ibb.co/F7C9tPf/1.png",
      "https://i.ibb.co/9TyyKxH/2.png",
      "https://i.ibb.co/zhCG32v/3.png",
    ],
    tech: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React.js",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],
    details: [
      "Event discovery with category/date filters and featured highlights.",
      "Donation flow with pledge receipts, progress tracking, and real-time updates.",
      "Organizer dashboard to create, update, and manage event details and media.",
      "Role-based access for organizers and administrators with content moderation.",
      "Event analytics for organizers, including view counts, donation totals, and conversion rates.",
    ],
    frontend: "https://github.com/sajid1545/Donation---X",
    backend: "",
    live: "https://donation-x-3ea9c.firebaseapp.com/",
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured work"
      title="Projects"
      kicker="A few things I’ve designed and built recently."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  );
}
