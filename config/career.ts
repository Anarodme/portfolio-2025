import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "jaco-beach",
    position: "Full Stack Developer",
    company: "Jaco Beach Onsite Management",
    location: "Costa Rica, Alajuela",
    startDate: new Date("2024-11-01"),
    endDate: new Date("2025-03-01"),
    description: [
      "Design of user experience (UX) and graphical interface (UI) of the web page, ensuring intuitive and efficient navigation.",
      "Prototyping system and designed database by defining user flows, interactive wireframes, and optimizing data structures for efficient storage and querying.",
      "Improved load times using techniques such as code splitting, lazy loading, and performance optimization.",
      "Developed modular and reusable Angular components to enhance maintainability, scalability, and development efficiency.",
      "Implemented and maintained CI/CD pipelines to enable frequent, secure and automated deployments."
    ],
    achievements: [
      "Designed and optimized user experience and interfaces to improve navigation.",
      "Created efficient database schemas and interactive wireframes to guide development.",
      "Significantly improved website load times and performance.",
      "Built scalable and maintainable Angular components.",
      "Established automated deployment pipelines."
    ],
    skills: [
      "Angular", "Typescript", "CI/CD",
    ],
    companyUrl: undefined, // Puedes poner URL si tienes
    logo: undefined,
  },
  {
    id: "orotina-municipality",
    position: "Frontend Developer – Information Technology Assistant",
    company: "Municipalidad de Orotina",
    location: "Costa Rica, Orotina",
    startDate: new Date("2022-10-01"),
    endDate: new Date("2022-12-31"),
    description: [
      "Provided technical support, including configuration of Active Directory for managing users, domains, and objects within the network.",
      "Developed and implemented internal information security policies for the development and programming department.",
      "Installed and configured wireless Access Points to improve network connectivity across the building.",
      "Developed user-facing features using HTML, CSS, and responsive design principles.",
      "Collaborated closely with UI/UX designers to define layout and visual structure.",
      "Managed and uploaded content and assets through the SP Page Builder (Joomla).",
      "Conducted regular testing and performance monitoring to maintain site quality."
    ],
    achievements: [
      "Improved network stability and security by configuring Active Directory and wireless infrastructure.",
      "Created internal security policies enhancing departmental standards.",
      "Built responsive and user-friendly frontend components.",
      "Collaborated effectively with design teams to implement UI layouts.",
      "Maintained and updated web content using Joomla."
    ],
    skills: [
      "HTML 5", "CSS 3", "Javascript",
    ],
    companyUrl: undefined,
    logo: undefined,
  },
];
