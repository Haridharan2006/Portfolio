export const projects = [
  {
    id: 1,

    title: "AI Medical Prescription Generator",

    images: [
      "/project-images/prescription/1.jpeg",
      "/project-images/prescription/2.png",
      "/project-images/prescription/3.png",
    ],

    description:
      "An AI-powered healthcare platform that transforms doctor-patient conversations into structured, editable prescriptions using speech recognition, artificial intelligence, and automated PDF generation.",

    features: [
      "Real-time speech-to-text transcription",
      "AI-generated editable medical prescriptions",
      "Professional PDF export with hospital branding",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AI",
    ],

    github: "https://github.com/Haridharan2006/ai-prescription-app",

    demo: "",
  },

  {
    id: 2,

    title: "ICD Query Chatbot",

    images: [
      "/project-images/chatbot/1.png",
    ],

    description:
      "An intelligent document chatbot capable of answering questions from ICD-10 and ICD-11 medical documents using semantic search, embeddings, and LLM-powered retrieval.",

    features: [
      "Semantic search across ICD-10 & ICD-11 documents",
      "LLM-powered contextual question answering",
      "Multiple PDF upload and document management",
    ],

    technologies: [
      "React",
      "LangChain",
      "Node.js",
      "LLM",
      "Embeddings",
    ],

    github: "https://github.com/Haridharan2006/icd-document-chatbot",

    demo: "",
  },

  {
    id: 3,

    title: "OAuth2 Authentication System",

    images: [
      "/project-images/oauth/1.png",
      "/project-images/oauth/2.jpeg",
      "/project-images/oauth/3.jpeg",
    ],

    description:
      "An enterprise-grade authentication platform featuring secure JWT authentication, OpenID Connect integration, PostgreSQL, Dockerized services, KrakenD API Gateway, and Nginx reverse proxy.",

    features: [
      "JWT authentication and role-based authorization",
      "Keycloak OpenID Connect integration",
      "Dockerized microservices with KrakenD API Gateway",
    ],

    technologies: [
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Keycloak",
      "JWT",
    ],

    github: "https://github.com/Haridharan2006/auth-system",

    demo: "",
  },

  {
    id: 4,

    title: "Resume Sorter with Background Check",

    images: [
      "/project-images/resume/1.jpeg",
      "/project-images/resume/2.jpeg",
    ],

    description:
      "An AI-powered recruitment platform that ranks candidates by combining semantic resume matching with NLP-based social media behavior analysis for smarter hiring decisions.",

    features: [
      "Semantic resume-job matching using SBERT",
      "Background toxicity analysis with Detoxify",
      "AI-based candidate ranking and screening",
    ],

    technologies: [
      "Python",
      "Flask",
      "Sentence Transformers",
      "Detoxify",
      "SBERT",
    ],

    github: "https://github.com/Haridharan2006/Resume-sorter",

    demo: "",
  },
];