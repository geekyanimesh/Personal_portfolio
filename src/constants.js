// Skills Section Logo's (NO IMPORTS — use absolute URLs)
const htmlLogo = "/assets/tech_logo/htmlLogo.png";
const cssLogo = "/assets/tech_logo/css.png";
const sassLogo = "/assets/tech_logo/sass.png";
const javascriptLogo = "/assets/tech_logo/javascript.png";
const reactjsLogo = "/assets/tech_logo/reactjs.png";
const angularLogo = "/assets/tech_logo/angular.png";
const reduxLogo = "/assets/tech_logo/redux.png";
const nextjsLogo = "/assets/tech_logo/nextjs.png";
const tailwindcssLogo = "/assets/tech_logo/tailwindcss.png";
const gsapLogo = "/assets/tech_logo/gsap.png";
const materialuiLogo = "/assets/tech_logo/materialui.png";
const bootstrapLogo = "/assets/tech_logo/bootstrap.png";
const springbootLogo = "/assets/tech_logo/springboot.png";
const nodejsLogo = "/assets/tech_logo/nodejs.png";
const expressjsLogo = "/assets/tech_logo/express.png";
const mysqlLogo = "/assets/tech_logo/mysql.png";
const mongodbLogo = "/assets/tech_logo/mongodb.png";
const firebaseLogo = "/assets/tech_logo/firebase.png";
const cLogo = "/assets/tech_logo/c.png";
const cppLogo = "/assets/tech_logo/cpp.png";
const javaLogo = "/assets/tech_logo/java.png";
const pythonLogo = "/assets/tech_logo/python.png";
const typescriptLogo = "/assets/tech_logo/typescript.png";
const gitLogo = "/assets/tech_logo/git.png";
const githubLogo = "/assets/tech_logo/github.png";
const vscodeLogo = "/assets/tech_logo/vscode.png";
const postmanLogo = "/assets/tech_logo/postman.png";
const mcLogo = "/assets/tech_logo/mc.png";
const figmaLogo = "/assets/tech_logo/figma.png";
const netlifyLogo = "/assets/tech_logo/netlify.png";
const vercelLogo = "/assets/tech_logo/vercel.png";
const postgreLogo = "/assets/tech_logo/postgre.png";
const csharpLogo = "/assets/tech_logo/csharp.png";
const linux = "/assets/tech_logo/linux.png";
const dockerLogo = "/assets/tech_logo/dockerLogo.png";
const kubernetesLogo = "/assets/tech_logo/kubernetesLogo.png";

// Experience Section Logos
const sa = "/assets/company_logo/sa.png";
const cod = "/assets/company_logo/cod.png";

// Education Section Logos
const BIT = "/assets/school_logo/BIT.png";
const jvmLogo = "/assets/school_logo/jvmLogo.jpg";
const mgm = "/assets/school_logo/mgm.jpeg";

// Project Section Logos
const deltaAi = "/assets/project_logos/deltaAi.png";
const prakriti = "/assets/project_logos/prakriti.png";
const feedMeBack = "/assets/project_logos/feedMeBack.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
    ],
  },
  {
    title: "Backend & DevOps",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "Docker", logo: dockerLogo },
      { name: "Kubernetes", logo: kubernetesLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Linux", logo: linux },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: sa,
    role: "FullStack Developer",
    company: "Samriddhi Associates",
    date: "June 2025 - July 2025",
    desc: "Designed and developed the official website for an educational consultancy managing admissions across India and abroad. Built the platform using the MERN stack (MongoDB, Express.js, React.js, Node.js) with a modern, responsive, mobile-first UI. Implemented contact forms with backend email routing and input validation to enable seamless lead communication.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
    ],
  },
  {
    id: 1,
    img: cod,
    role: "JavaScript Developer",
    company: "CodSoft Inc",
    date: "June 2024 - July 2024",
    desc: "Successfully completed a 1-month internship as a JavaScript Developer, designing and developing projects including a digital clock, a personal portfolio website, and a to-do list application. Enhanced proficiency in JavaScript, DOM operations, and responsive design while applying best practices in front-end development.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: BIT,
    school: "BIT Sindri",
    date: "Sept 2023 - July 2027",
    grade: "8.00 CGPA",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura...",
    degree: "Bachelor of Technology, Computer Science Engineering",
  },
  {
    id: 1,
    img: jvmLogo,
    school: "Jawahar Vidya Mandir, Shyamali",
    date: "June 2021 - May 2023",
    grade: "88.4%",
    desc: "I completed my Bachelor's degree...",
    degree: "CBSE (XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: mgm,
    school: "MGM Higher Secondary School",
    date: "Apr 2015 - April 2021",
    grade: "96%",
    desc: "I completed my class 12 education...",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "deltaAi",
    description: "A powerful and user-friendly React.js application...",
    image: deltaAi,
    tags: ["HTML", "TailwindCSS", "TypeScript", "React JS", "API"],
    github: "https://github.com/geekyanimesh/delta",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "प्रKriti",
    description: "प्रKriti is a sustainability-driven platform...",
    image: prakriti,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/codingmastr/CSPrep",
    webapp:
      "https://683dbeba67cffe7312ab98e0--lambent-gingersnap-9d3d6e.netlify.app/",
  },
  {
    id: 2,
    title: "FeedMeBack",
    description: "A React-based web application...",
    image: feedMeBack,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/geekyanimesh/FeedMeBack",
  },
];
