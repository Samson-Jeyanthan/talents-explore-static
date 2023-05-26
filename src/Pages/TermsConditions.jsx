import React, { useState } from "react";
import {
  PageWrapper,
  Answer,
  Heading,
  Paragraph,
  PlusButton,
  QAWrapper,
  Question,
  ParahLink,
} from "./PagesStyles";
import { TACQandA } from "../Data";
import { motion as m } from "framer-motion";
import { Navbar } from "../Components";

const TermsConditions = () => {
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
      <Heading>Terms and Conditions</Heading>
      <Paragraph>
        These Terms of Service (“Terms”) contain the agreement between you and
        Talents Explore in respect of the Platform described below. Please read
        these Terms carefully. Please also read our{" "}
        <ParahLink to="/privacy-policy">Privacy Policy</ParahLink>,{" "}
        <ParahLink to="/cookies-policy"></ParahLink>
        Cookies Policy and{" "}
        <ParahLink to="/community-guidelines">Community Guidelines.</ParahLink>
      </Paragraph>
      <Paragraph>
        You form a contract with us when you confirm that you accept these Terms
        or when you otherwise use the Platform. In short: "This is a contract
        between you and Talents Explore. You should read it."
      </Paragraph>
      {TACQandA.map((qa) => {
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

export default TermsConditions;
