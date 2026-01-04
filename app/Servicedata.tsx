// 필요한 아이콘 가져옴
import { BiGlobe, BiLogoWordpress, BiCodeAlt, BiLineChart, BiShieldAlt } from "react-icons/bi";

//export로 내보냄
export const services = [
  {
    title: "Web Development Services",
    desc: "Custom websites, web applications, and e-commerce solutions.",
    icon: <BiGlobe size={25} />
  },
  {
    title: "WordPress Development",
    desc: "Custom themes, plugins, and site optimization.",
    icon: <BiLogoWordpress size={25} />
  },
  {
    title: "React & PHP Development",
    desc: "Modern, scalable web apps.",
    icon: <BiCodeAlt size={25} />
  },
  {
    title: "Analytics & SEO",
    desc: "Performance tracking, SEO audits, and on-page optimization.",
    icon: <BiLineChart size={25} />
  },
  {
    title: "Web Security",
    desc: "Secure coding, vulnerability assessments.",
    icon: <BiShieldAlt size={25} />
  },
];