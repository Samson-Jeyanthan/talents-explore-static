import {
  TAC_1,
  TAC_2,
  TAC_3,
  TAC_4,
  TAC_5,
  TAC_6,
  TAC_7,
  TAC_8,
  TAC_9,
  TAC_10,
} from "./Contents/TACContents";
import {
  PP_1,
  PP_2,
  PP_3,
  PP_4,
  PP_5,
  PP_6,
  PP_7,
  PP_8,
  PP_9,
  PP_10,
} from "./Contents/PPContents";
import {
  CG_1,
  CG_2,
  CG_3,
  CG_4,
  CG_5,
  CG_6,
  CG_7,
  CG_8,
  CG_9,
  CG_10,
  CG_11,
  CG_12,
  CG_13,
} from "./Contents/CGContents";

export const vm = [
  {
    id: 1,
    image: "../PublicImages/Vision.jpg",
    title: "Our Vision",
    modalTitle: "Vision",
    desc: "To have a platform for all deserving talents and to make sure that they get recognitionon on the world stage.",
  },
  // create a world where every individual has the opportunity to discover and cultivate their unique talents and to be a leading software company that provides powerful tools and insights.

  {
    id: 2,
    image: "../PublicImages/Mission.jpg",
    title: "and Mission",
    modalTitle: "Mission",
    desc: "To democratize talent discovery and development by making it accessible to everyone, regardless of their background or circumstances. Through our innovative software solutions, we strive to empower individuals and organizations to achieve their goals, drive innovation, and positively impact society.",
  },
];

export const PC = [
  {
    id: 1,
    link: "/terms-and-conditions",
    title: "Terms and Conditions",
    image: "../PublicImages/TermsAndCondition.jpg",
    desc: "Our agreement that governs the use of our website/application and sets out the terms and conditions of use, disclaimers, and limitations of liability.",
    invert: false,
  },
  {
    id: 2,
    link: "/privacy-policy",
    title: "Privacy Policy",
    image: "../PublicImages/Privacy.jpg",
    desc: "Our commitment to protecting your personal information and how we collect, use, and share it.",
    invert: true,
  },
  {
    id: 3,
    link: "/community-guidelines",
    title: "Community Guidelines",
    image: "../PublicImages/Community.jpg",
    desc: "Our standards for respectful behavior and creating a safe and inclusive community for all users.",
    invert: false,
  },
];

export const OtherPC = [
  {
    id: 1,
    link: "/intellectual-property-policy",
    title: "Intellectual Property Policy",
    desc: "Protecting original creations and respecting ownership rights in our platform.",
  },
  {
    id: 2,
    link: "/cookies-policy",
    title: "Cookies Policy",
    desc: "Explaining how we use cookies to enhance user experience and analyze website traffic.",
  },
  {
    id: 3,
    link: "/branded-content-policy",
    title: "Branded Content Policy",
    desc: "Guidelines and regulations for creating and promoting branded content on our platform.",
  },
];

export const TACQandA = [
  {
    id: 0,
    question: "1. Who You are Contracting With",
    answer: <TAC_1 />,
  },
  {
    id: 1,
    question: "2. What Services are Covered by These Terms",
    answer: <TAC_2 />,
  },
  {
    id: 2,
    question:
      "3. Additional Terms and Policies - Depending on the Features You Use",
    answer: <TAC_3 />,
  },
  {
    id: 3,
    question: "4. Using the Platform",
    answer: <TAC_4 />,
  },
  {
    id: 4,
    question: "5. What We Promise to You",
    answer: <TAC_5 />,
  },
  {
    id: 5,
    question: "6. Suspending or Ending Our Relationship",
    answer: <TAC_6 />,
  },
  {
    id: 6,
    question: "7. Changes to These Terms or the Platform",
    answer: <TAC_7 />,
  },
  {
    id: 7,
    question: "8. Resolving Disputes",
    answer: <TAC_8 />,
  },
  {
    id: 8,
    question: "9. Other",
    answer: <TAC_9 />,
  },
  {
    id: 9,
    question: "10. Contacting Talents Explore",
    answer: <TAC_10 />,
  },
];

export const PPQandA = [
  {
    id: 0,
    question: "1. What Information We Collect",
    answer: <PP_1 />,
  },
  {
    id: 1,
    question: "2. How We Use Your Information",
    answer: <PP_2 />,
  },
  {
    id: 2,
    question: "3. How We Share Your Information",
    answer: <PP_3 />,
  },
  {
    id: 3,
    question: "4. Our Legal Bases and How We Process Your Information",
    answer: <PP_4 />,
  },
  {
    id: 4,
    question: "5. Your Rights and Choices",
    answer: <PP_5 />,
  },
  {
    id: 5,
    question: "6. Data Security and Retention",
    answer: <PP_6 />,
  },
  {
    id: 6,
    question: "7. Our Global Operations and Data Transfers",
    answer: <PP_7 />,
  },
  {
    id: 7,
    question: "8. Younger Users",
    answer: <PP_8 />,
  },
  {
    id: 8,
    question: "9. Privacy Policy Updates",
    answer: <PP_9 />,
  },
  {
    id: 9,
    question: "10. Contact Us",
    answer: <PP_10 />,
  },
];

export const CGQandA = [
  { id: 0, question: "1. Minor Safety", answer: <CG_1 /> },
  { id: 1, question: "2. Dangerous Acts and Challenges", answer: <CG_2 /> },
  {
    id: 2,
    question: "3. Suicide, Self-harm, and Disordered Eating",
    answer: <CG_3 />,
  },
  {
    id: 3,
    question: "4. Adult Nudity and Sexual Activities",
    answer: <CG_4 />,
  },
  {
    id: 4,
    question: "5. Bullying and Harassment",
    answer: <CG_5 />,
  },
  {
    id: 5,
    question: "6. Hateful Behaviour",
    answer: <CG_6 />,
  },
  {
    id: 6,
    question: "7. Violent Extremism",
    answer: <CG_7 />,
  },
  {
    id: 7,
    question: "8. Integrity and Authenticity",
    answer: <CG_8 />,
  },
  {
    id: 8,
    question: "9. Illegal Activities and Regulated Goods",
    answer: <CG_9 />,
  },
  {
    id: 9,
    question: "10. Violent and Graphic Content",
    answer: <CG_10 />,
  },
  {
    id: 10,
    question: "11. Copyright and Trademark Infringement",
    answer: <CG_11 />,
  },
  {
    id: 11,
    question: "12. Platform Security",
    answer: <CG_12 />,
  },
  {
    id: 12,
    question: "13. Ineligible for the For You Feed",
    answer: <CG_13 />,
  },
];

export const BGImages = [
  { image: "../PublicImages/Keyboard.jpg" },
  { image: "../PublicImages/Painter.jpg" },
  { image: "../PublicImages/Filming.jpg" },
];
