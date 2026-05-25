export const profile = {
  initials: "MCD",
  firstName: "Mamadou",
  lastName: "Cherif Diallo",
  role: "Developpeur Full Stack & IA",
  availability: "Disponible pour stage",
  email: "mcd2020etude@gmail.com",
  phone: "+33 7 49 73 75 12",
  phoneHref: "tel:+33749737512",
  location: "Clermont-Ferrand, France",
  mobility: "Toute la France",
  linkedin: "https://www.linkedin.com/in/mamadou-cherif-diallo-1981612b4/",
  cvPath: "/cv/CV_Mamadou_Cherif_Diallo.pdf",
  photo: "/images/Gemini_Generated_Image_b8chyjb8chyjb8ch.png",
}

export const menu = ["home", "about", "experience", "skills", "contact"]

export const heroFacts = [
  "3+ ans d'etudes",
  "5+ projets realises",
  "Stage web/mobile",
  "Mobilite France",
]

export const metrics = [
  { value: "3+", label: "Annees d'etudes" },
  { value: "5+", label: "Projets", className: "border-x border-slate-800" },
  { value: "2026", label: "Stage recherche" },
]

export const education = [
  {
    degree: "Master 2 Informatique",
    school: "Universite Clermont Auvergne",
    period: "2025 - 2026",
    detail:
      "Administration base de donnees, technologies web et mobile, big data analyse, IA generative, architectures orientees services.",
  },
  {
    degree: "Master 1 Informatique",
    school: "Universite Clermont Auvergne",
    period: "2024 - 2025",
    detail: "Genie logiciel avance, DevOps, intelligence artificielle et gestion de projet.",
  },
  {
    degree: "Licence 3 Informatique",
    school: "Universite Clermont Auvergne",
    period: "2023 - 2024",
    detail: "Genie logiciel, algorithmique et apprentissage artificiel.",
  },
]

export const languages = [
  { label: "Francais", level: "Deuxieme langue maternelle", value: "90%" },
  { label: "Anglais", level: "Vocabulaire technique", value: "70%" }
]

export const experiences = [
  {
    title: "SAS GNAD - Stage developpement web et mobile",
    period: "2025",
    type: "Stage de 3 mois",
    points: [
      "Developpement des applications mobiles du jeu Morpyam et de Visitor Infos.",
      "Conception, developpement et gestion des interfaces mobiles en Flutter.",
      "Implementation des fonctionnalites essentielles et de la logique metier avec Node.js.",
    ],
  },
  {
    title: "Chatbot intelligent base sur un RAG",
    period: "2025",
    type: "Projet IA generative",
    points: [
      "Developpement d'un chatbot Streamlit sur l'IA generative a partir d'une base documentaire Wikipedia.",
      "Pipeline RAG complet: decoupage, embeddings, indexation Chroma et recherche semantique.",
      "Generation de reponses contextuelles avec modele GPT, streaming et affichage des sources.",
    ],
  },
  {
    title: "Plateforme de dons d'objets",
    period: "2025",
    type: "Projet Java / Spring Boot",
    points: [
      "Developpement d'une application web permettant a des utilisateurs de faire des dons d'objets.",
      "Conception du modele de donnees, implementation des fonctionnalites principales et deploiement du serveur web.",
      "Realisation de tests unitaires et generation de scripts automatises de compilation et d'execution.",
      "Outils: Java, Spring Boot, Gradle, H2 Database.",
    ],
  },
  {
    title: "Plateforme de streaming video",
    period: "2025",
    type: "Projet backend",
    points: [
      "API backend pour la diffusion et l'achat de contenus video.",
      "Gestion utilisateurs, authentification JWT, portefeuille virtuel et achats integres.",
      "Upload cloud, traitement HLS/FFmpeg et streaming securise.",
    ],
  },
  {
    title: "RPG Player Manager",
    period: "2024",
    type: "Projet Java / Qualite",
    points: [
      "Refactoring du code pour ameliorer la structure et reduire la complexite.",
      "Ecriture de tests unitaires avec JUnit et Jacoco pour obtenir une couverture de code elevee.",
      "Verification de la robustesse du code avec Pitest.",
      "Outils: Java, JUnit, Jacoco, Pitest.",
    ],
  },
  {
    title: "Application de gestion d'une ecole",
    period: "2024",
    type: "Projet personnel PHP / Laravel",
    points: [
      "Developpement complet d'une application web de gestion scolaire.",
      "Implementation des fonctionnalites CRUD pour les etudiants, les inscriptions et les classes.",
      "Structuration des donnees et des interfaces pour faciliter le suivi administratif.",
    ],
  },
]

export const skills = [
  {
    title: "Langages",
    color: "border-yellow-500 text-yellow-500",
    items: ["Java", "PHP", "JavaScript", "Python", "C / C++", "Go"],
  },
  {
    title: "Mobile et Web",
    color: "border-cyan-500 text-cyan-500",
    items: ["React.js", "Flutter / Dart", "Laravel", "Spring Boot", "Node.js", "Tailwind CSS", "Streamlit"],
  },
  {
    title: "Data et IA",
    color: "border-purple-500 text-purple-400",
    items: ["SQL / NoSQL", "PostgreSQL", "MongoDB", "MySQL", "Oracle", "NLP", "LLM", "FAISS / ChromaDB"],
  },
  {
    title: "DevOps",
    color: "border-emerald-500 text-emerald-400",
    items: ["Git", "CI/CD", "Docker", "Kubernetes", "Grafana", "Ansible", "Terraform"],
  },
  {
    title: "Backend & API",
    color: "border-orange-500 text-orange-400",
    items: ["REST API", "Express.js", "FastAPI", "SQLAlchemy", "Alembic", "JWT", "H2 Database"],
  },
  {
    title: "Outils",
    color: "border-pink-500 text-pink-400",
    items: ["GitHub", "Postman", "Gradle", "FFmpeg", "Cloudflare R2", "Figma"],
  },
]
