// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";
import linux from "./assets/tech_logo/linux.png";
import dockerLogo from "./assets/tech_logo/dockerLogo.png";
import kubernetesLogo from "./assets/tech_logo/kubernetesLogo.png"

// // Experience Section Logo's
import sa from "./assets/company_logo/sa.png";
import cod from './assets/company_logo/cod.png';

// // Education Section Logo's
import BIT from "./assets/school_logo/BIT.png"
import jvmLogo from "./assets/school_logo/jvmLogo.jpg"
import mgm from './assets/school_logo/mgm.jpeg'

// // Project Section Logo's
import deltaAi from './assets/project_logos/deltaAi.png'
import prakriti from './assets/project_logos/prakriti.png'
import feedMeBack from './assets/project_logos/feedMeBack.png'

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
    desc: "Designed and developed the official website for an educational consultancy managing admissions across India and abroad. Built the platform using the MERN stack (MongoDB, Express.js, React.js, Node.js) with a modern, responsive,mobile-first UI. Implemented contact forms with backend email routing and input validation to enable seamless lead communication.",
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
    id: 0,
    img: cod,
    role: "JavsScript Developer",
    company: "CodSoft Inc",
    date: "June 2024 - July 2024",
    desc: "Successfully completed a 1-month internship as a JavaScript Developer, designing and developing projects including a digital clock, a personal portfolio website, and a to-do list application. Enhanced proficiency in JavaScript, DOM operations, and responsive design while applying best practices in front-end development. Improved real-world coding discipline, version control usage, and UI enhancement through iterative development.",
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
    desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Technology, Computer Science Engineering",
  },
  {
    id: 1,
    img: jvmLogo,
    school: "Jawahar Vidya Mandir, Shyamali",
    date: "June 2021 - May 2023",
    grade: "88.4%",
    desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "CBSE (XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: mgm,
    school: "MGM Higher Secondary School",
    date: "Apr 2015 - April 2021",
    grade: "96%",
    desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(X) ",
  },
];

 export const projects = [
  {
    id: 0,
    title: "deltaAi",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: deltaAi,
    tags: ["HTML", "TailwindCSS", "TypeScript", "React JS", "API"],
    github: "https://github.com/geekyanimesh/delta",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "प्रKriti",
    description:
      "प्रKriti is a sustainability-driven platform using AI for waste segregation and green retail, built collaboratively for SMART INDIA HACKATHON 2024 Grand Finale.",
    image: prakriti,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://683dbeba67cffe7312ab98e0--lambent-gingersnap-9d3d6e.netlify.app/",
  },
  {
    id: 2,
    title: "FeedMeBack",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: feedMeBack,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/geekyanimesh/FeedMeBack",
   // webapp: 
  },
];
