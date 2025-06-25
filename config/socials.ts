import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@anarodme",
    icon: Icons.gitHub,
    link: "https://github.com/anarodme",
  },
  {
    name: "LinkedIn",
    username: "Ana Rodríguez Meza",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/anarodme",
  },

  {
    name: "Gmail",
    username: "anarodme",
    icon: Icons.gmail,
    link: "mailto:anrodriguezme@gmail.com",
  },
];
