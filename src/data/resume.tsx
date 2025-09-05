import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Andrei Jianu",
  initials: "AJ",
  url: "https://www.github.com/meloniouss", // Update with your actual domain
  location: "Montreal, Quebec, CA",
  locationLink: "https://www.google.com/maps/place/montreal",
  description:
    "I like building things from scratch and making them run fast.",
  summary:
    "I'm a systems programmer focused on distributed systems, backend infrastructure, and performance. I enjoy building things from scratch.",
  avatarUrl: "/pfp.jpg", // Update with your actual avatar path
  skills: {
    languages: [
      "C++",
      "C",
      "Java",
      "C#",
      "Python",
      "JavaScript",
      "TypeScript",
    ],
    frameworks: [
      "OpenGL",
      "OpenXR",
      "MetaXR",
      "React",
      "Spring Boot",
      "Node.js",
      ".NET",
    ],
    tools: [
      "Docker",
      "Git",
      "Postman",
      "PostgreSQL",
      "Unreal Engine 5",
      "Unity Engine"
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "", // Update with your actual email
    tel: "", // Update with your actual phone
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/meloniouss", // Update with your GitHub
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/andreijianu", // Update with your LinkedIn
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "", // Update with your X/Twitter
        icon: Icons.x,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Amazon",
      href: "https://amazon.com",
      badges: [],
      location: "Vancouver, BC",
      title: "Software Development Engineer Intern",
      logoUrl: "/zon.png", // Add your logo file
      start: "September 2025",
      end: "December 2025",
      description:
        "Working in the PXT org.",
    },
    {
      company: "Bombardier",
      href: "https://bombardier.com",
      badges: [],
      location: "Montreal, QC",
      title: "Software Engineering Intern",
      logoUrl: "/bombardier3.png", // Add your logo file
      start: "June 2025",
      end: "September 2025",
      description:
      "Sole developer of an AR/VR CAD application for Meta Quest 3 in C#, capable of handling 5M+ polygons with optimized spatial tracking and stable frame rates via OpenXR. Designed and implemented a custom low-latency networking stack supporting 25 concurrent users, multi-user synchronization, deterministic replay, and session persistence. Engineered modular subsystems for headset state serialization, session recovery, and time-aligned replay to ensure deterministic behavior across devices."
    },
    {
      company: "CAE",
      href: "https://cae.com",
      badges: [],
      location: "Montreal, QC",
      title: "Software Development Intern",
      logoUrl: "/cae.png", // Add your logo file
      start: "September 2024",
      end: "December 2024",
      description:
        "Designed and deployed custom SharePoint plugins using TypeScript and React, integrated across 11,000+ internal company sites. Developed Python tools using pandas and NumPy to streamline data workflows, cutting manual analysis time by 10×. Built automated pipelines and visualization utilities with Matplotlib, boosting reporting efficiency by 15×.",
    },
  ],

  education: [
    {
      school: "Concordia University",
      href: "https://concordia.ca",
      degree: "Bachelor of Engineering in Software Engineering (BEng.)",
      logoUrl: "/concordia.png",
      start: "2023",
      end: "2027 (Expected)",
      gpa: "3.98",
    },
  ],

  projects: [
    {
      title: "Distributed File System",
      href: "", // Update with actual link if available
      dates: "2025",
      active: true,
      description:
        "A distributed file system inspired by HDFS and GFS, designed to provide scalable, fault-tolerant storage across multiple nodes. It supports data replication, block-level storage, and master-worker architecture for efficient file distribution and metadata management.",
      technologies: [
        "C++",
        "Sockets",
        "Distributed Systems",
        "File Systems",
        "Networking",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/meloniouss/DistributedFileSystem", // Update with your GitHub repo
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dfs.png",
      video: "",
    },
    {
      title: "Redis Clone",
      href: "#", // Update with actual link if available
      dates: "2025",
      active: true,
      description:
        "Built a fault-tolerant Redis clone in C++, implementing core Redis features like database snapshots, replication, and support for redis-cli. The system is designed with robust fault tolerance mechanisms to ensure reliability, mimicking Redis' behavior in production environments.",
      technologies: [
        "C++",
        "Sockets",
        "Database Systems",
        "Networking",
        "System Programming",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/meloniouss/RedisClone", // Update with your GitHub repo
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/redis.png",
      video: "",
    },
    {
      title: "3D Model Editing Software",
      href: "#", // Update with actual link if available
      dates: "2025",
      active: true,
      description:
        "A real-time 3D model editor built using OpenGL, supporting user-controlled transformations and efficient rendering. Features normal mapping for visual detail, lighting models for realistic shading, and full support for OBJ model import.",
      technologies: [
        "C++",
        "OpenGL",
        "Computer Graphics",
        "3D Rendering",
        "Matrix Operations",
      ],
      links: [
        {
          type: "Source",
          href: "#", // Update with your GitHub repo
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/3dmodel.gif",
      video: "",
    },
    {
      title: "ChatHaven",
      href: "#", // Update with actual link if available
      dates: "2025",
      active: true,
      description:
        "A real-time chat application built with modern web technologies, featuring WebSocket connections for instant messaging, advanced features such as voice messages, user authentication with JWT, and a clean Material UI interface.",
      technologies: [
        "C#",
        ".NET",
        "TypeScript",
        "React",
        "Material UI",
        "PostgreSQL",
        "JWT",
        "WebSockets",
        "Vitest",
      ],
      links: [
        {
          type: "Website",
          href: "https://chathavenzero.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SOEN-341-Team-Zero/Team_Zero-SOEN341_Project_W25",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/chathaven.png",
      video: "",
    },
    {
      title: "ClipMaster",
      href: "#", // Update with actual link if available
      dates: "2024",
      active: true,
      description:
        "Designed and developed ClipMaster, a browser-based video editor inspired by tools like Clipchamp. It allows users to edit and export video clips directly in the browser with no need for external software.",
      technologies: [
        "React",
        "TypeScript",
        "MediaRecorder API",
        "ffmpeg",
        "Material UI",
        "Web APIs",
      ],
      links: [
        {
          type: "Website",
          href: "https://clipmaster.vercel.app/", // Update with your deployed app
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/meloniouss/clipmaster", // Update with your GitHub repo
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/clipmaster.mp4",
    },
    {
      title: "Taskly",
      href: "#", // Update with actual link if available
      dates: "2024",
      active: true,
      description:
        "Developed an advanced course tracker and productivity full-stack web application that empowers users to efficiently manage and track their learning progress. Backend currently inactive.",
      technologies: [
        "TypeScript",
        "React",
        "PostgreSQL",
        "Java",
        "Spring Boot",
        "OAuth2.0",
        "Material UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://taskly-frontend-app.vercel.app/", // Update with your deployed app
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/meloniouss/taskly", // Update with your GitHub repo
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/meloniouss/taskly-backend", // Update with your GitHub repo
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/taskly.mp4",
    },
    {
      title: "CHIP-8 Emulator",
      href: "#", // Update with actual link if available
      dates: "2025",
      active: true,
      description:
        "A functional CHIP-8 emulator written in C++, designed to emulate the classic 8-bit virtual machine. It supports the full set of instructions, input handling, and graphics, providing a simple yet effective way to run CHIP-8 games.",
      technologies: [
        "C++",
        "SDL2",
        "Emulation",
        "System Programming",
      ],
      links: [
        {
          type: "Source",
          href: "#", // Update with your GitHub repo
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/chip8.mp4",
    },
    {
      title: "Conway's Game of Life",
      href: "#", // Update with actual link if available
      dates: "2023",
      active: true,
      description:
        "Conway's Game of Life is a zero-player cellular automaton that simulates how cells evolve over time based on simple rules. This implementation visualizes grid-based life cycles in real time, showcasing emergent behavior from basic logic.",
      technologies: [
        "C++",
        "Raylib",
        "Computer Graphics",
        "Algorithm Visualization",
        "Simulation",
      ],
      links: [
        {
          type: "Source",
          href: "#", // Update with your GitHub repo
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/conways.mp4",
    },
  ],

  hackathons: [
    // Add any hackathons you've participated in here
    // Format similar to the projects but with hackathon-specific fields
  ],
} as const;