import React, { useState } from "react";
import {
  PageWrapper,
  Answer,
  Heading,
  Paragraph,
  PlusButton,
  QAWrapper,
  Question,
} from "./PagesStyles";
import { motion as m } from "framer-motion";
import { PPQandA } from "../Data";
import { Navbar } from "../Components";

const PrivacyPolicy = () => {
  const [qaOpen, setQAOpen] = useState({});

  const handleClick = (id) => {
    setQAOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <PageWrapper>
      <Navbar />
      <Heading>Privacy Policy</Heading>
      <Paragraph>
        This privacy policy ("Privacy Policy") applies to the personal
        information that Talents Explore processes in connection with Talents
        Explore apps, websites, software and related services (the “Platform”),
        that link to or reference this Privacy Policy.
      </Paragraph>
      {PPQandA.map((qa) => {
        return (
          <QAWrapper key={qa.id}>
            <Question
              onClick={() => handleClick(qa.id)}
              isActive={qaOpen[qa.id]}
            >
              {qa.question}
              <PlusButton isActive={qaOpen[qa.id]} />
            </Question>
            {qaOpen[qa.id] && (
              <m.div
                initial={{ opacity: 0, y: "-1%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{ duration: 0.19, ease: "easeIn" }}
                key={qa.id}
              >
                <Answer>{qa.answer}</Answer>
              </m.div>
            )}
          </QAWrapper>
        );
      })}
    </PageWrapper>
  );
};

export default PrivacyPolicy;
