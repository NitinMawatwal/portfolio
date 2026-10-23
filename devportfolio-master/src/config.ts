
export const siteConfig = {
  name: "Nitin Mawatwal",
  title: "Full-Stack Developer",
  description:
    "Full-Stack Developer skilled in MERN stack and AI based applications",
  accentColor: "#7c3aed",

  social: {
    email: "nittinmawatwal@gmail.com",
    linkedin: "https://www.linkedin.com/in/nitin-mawatwal/",
    twitter: "",
    github: "https://github.com/NitinMawatwal",
},

  aboutMe:
    "I'm an Information Technology graduate from IIIT Sonipat interested in building full-stack web applications and AI-powered tools. I work with React, Node.js, Express, and MongoDB, and enjoy building REST APIs, integrating AI APIs, and developing reliable, user-friendly applications. I have also worked on AI-generated code evaluation and reusable React components.",

  skills: [
    "C++",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Redux",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "REST APIs",
    "JWT",
    "Gemini API",
    "Git & GitHub",
    "CI/CD",
    "Data Structures & Algorithms",
    "RAG",
    "LangChain",
  ],

  projects: [
    {
      name: "ParseFlow – AI-Powered Invoice Extraction",
      description:
        "A full-stack application that extracts structured data from uploaded invoices using the Gemini API. Includes structured JSON output, extraction quality assessment, file upload handling, and demo mode.",
      link: "https://parseflow-802e.onrender.com/",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "Gemini API",
      ],
    },
    {
      name: "NextHire – Job Portal",
      description:
        "A full-stack MERN job portal with JWT authentication, role-based access control, and a MongoDB database optimized with indexing. The frontend and backend are deployed separately.",
      link: "https://next-hire-lac.vercel.app/",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],
    },
  ],

  experience: [
    {
      company: "Xelron AI",
      title: "SDE Intern",
      dateRange: "Mar 2026 - May 2026",
      bullets: [
        "Designed software engineering tasks from GitHub repositories and pull requests, including edge cases and acceptance criteria.",
        "Evaluated 25+ AI-generated pull request workflows using Git, terminal tools, Postman, and Chrome DevTools.",
        "Reviewed AI-generated code changes and provided structured feedback to improve implementation quality.",
      ],
    },
    {
      company: "Codec Technologies",
      title: "Web Developer Intern",
      dateRange: "May 2025 - Jul 2025",
      bullets: [
        "Developed reusable React components and reduced unnecessary re-renders by 35% using memoization and lazy loading.",
        "Integrated third-party APIs to reduce manual data handling and improve checkout flow reliability.",
        "Identified and resolved 15+ frontend and backend bugs using browser DevTools and Postman.",
      ],
    },
  ],

  education: [
    {
      school: "Indian Institute of Information Technology (IIIT), Sonipat",
      degree: "Bachelor of Technology in Information Technology",
      dateRange: "2022 - 2026",
      achievements: [
        "Solved 450+ Data Structures and Algorithms problems across competitive programming platforms.",
        "Finished among the top 5 teams out of 60 at Code Auction, SANKALAN 2025.",
      ],
    },
  ],
};
