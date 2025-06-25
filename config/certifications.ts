export interface certificationsInterface {
  repo: string;
  certificationDescription: string;
  repoOwner: string;
  link: string;
}

export const certificationsUnsorted: certificationsInterface[] = [
  {
    repo: "Google Cloud Computing Foundations  ",
    certificationDescription: "Google Cloud Computing Foundations",
    repoOwner: "Google Cloud",
    link: "https://www.cloudskillsboost.google/paths/118", // enlace referencial al curso base
  },
  {
    repo: "AWS Educate ",
    certificationDescription: "AWS Educate Machine Learning Foundations",
    repoOwner: "AWS",
    link: "https://www.credly.com/badges/42fcbc77-8850-44fc-aa18-5673dbcd8876/linked_in_profile", // ejemplo referencial
  },
  {
    repo: "Prompt Engineering ",
    certificationDescription: "Prompt Engineering Foundation Learner",
    repoOwner: "CertiProf",
    link: "https://www.credly.com/badges/1825aaeb-c7b5-455a-a44d-509541343258/public_url", // ejemplo referencial
  },
  {
    repo: "FCSS - Public Cloud Security 7.6 Architect Self-Paced",
    certificationDescription:
      "FCSS - Public Cloud Security 7.6 Architect Self-Paced",
    repoOwner: "Fortinet",
    link: "https://www.linkedin.com/in/anarodme/details/certifications/", // ejemplo referencial
  },
  {
    repo: "Security Girls",
    certificationDescription: "Security Girls LATAM",
    repoOwner: "Microsoft",
    link: "https://www.maismulheres.tech/certificates/z3ja1wvrch", // ejemplo referencial
  },
  {
    repo: "Oracle Cloud ",
    certificationDescription:
      "Oracle Cloud Data Management 2023 Certified Foundations Associate",
    repoOwner: "Oracle",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=4F49336D353E509D319471507AAFF747912A95FAEDCEB9E22AF975CA928E7A9D", // ejemplo referencial
  },
   {
    repo: "Oracle Cloud ",
    certificationDescription:
      "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
    repoOwner: "Oracle",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=968B1D83AD19957C8D48E3CAB1D778039703A75FA85AFC76BA1F497B71BF9D7B", // ejemplo referencial
  },
  {
    repo: "EF SET English ",
    certificationDescription:
      "EF SET English Certificate 52/100 (B2 Upper Intermediate)",
    repoOwner: "EF SET",
    link: "https://cert.efset.org/en/RGYqjn", // ejemplo referencial
  },
  {
    repo: "Artificial Intelligence",
    certificationDescription: "Artificial Intelligence Fundamentals",
    repoOwner: "IBM",
    link: "https://www.credly.com/badges/031d6821-7471-4c6e-a3cb-ecd261dd0996/public_url", // ejemplo
  },
  {
    repo: "Design Thinking",
    certificationDescription: "Design Thinking",
    repoOwner: "Instituto Europeo de Posgrado IEP",
    link: "https://iep.edu.es/cursos/diseno-thinking/", // sitio general del curso
  },
  {
    repo: "Scrum",
    certificationDescription: "Scrum Fundamentals Certified (SFC)",
    repoOwner: "SCRUMstudy",
    link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=873764", // oficial
  },
];

export const featuredCertifications: certificationsInterface[] =
  certificationsUnsorted.slice(0, 3);
