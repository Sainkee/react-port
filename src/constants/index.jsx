import {
  BarChart4,
  Boxes,
  GlobeLock,
  Layout,
  SwitchCamera,
  TabletSmartphone,
} from "lucide-react";


export const navBar = [
  { label: "About", path: "/about" },
//   { label: "Certificates", path: "/certificates" },
//   { label: "Projects", path: "/projects" },
//   { label: "More Projects", path: "/more-projects" },
  { label: "Contact", path: "/contact" },
];

export const skills = [
  {
    img: <GlobeLock size={25} />,
    title: "Web Design & Development",
    subtitle:
      "Creating attractive, easy-to-use websites that work well for businesses and individuals online.",
  },
  {
    img: <Layout size={25} />,
    title: "Full-Stack Solutions",
    subtitle:
      "Developing scalable web applications using JavaScript Frameworks, SQL Databases, PHP and Python.",
  },
  {
    img: <TabletSmartphone size={25} />,
    title: "Mobile App Development",
    subtitle:
      "Creating and developing engaging mobile apps and games for iOS and Android devices.",
  },
  {
    img: <BarChart4 size={25} />,
    title: "Marketing & SEO",
    subtitle:
      "Using SEO and marketing strategies to boost online visibility and promote products or services.",
  },
];
export const creative = [
  {
    img: <SwitchCamera size={25} />,
    title: "Visual Storytelling",
    subtitle:
      "Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually.",
  },
  {
    img: <Boxes size={25} />,
    title: "Digital Content Creation",
    subtitle:
      "Creating digital elements, such as 3D models, graphics, animations, videos and AI-generated content.",
  },
];

export const codind = [
  { label: "javascript", value: "90" },
  { label: "typeScript", value: "75" },
  { label: "css", value: "100" },
  { label: "php", value: "50" },
  { label: "python", value: "25" },
];
export const human = [
  { label: "english", level: "fluent", value: "100" },
  { label: "german", level: "fluent", value: "100" },
  { label: "bulgarian", level: "native", value: "100" },
  { label: "turkish", level: "bilingual", value: "80" },
  { label: "russian", level: "basic", value: "20" },
];
