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
import { CGQandA } from "../Data";
import { Navbar } from "../Components";

const CommunityGuide = () => {
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
      <Heading>Community Guidelines</Heading>
      <Paragraph>
        Talents Explore’s mission is to inspire creativity and bring joy. We are
        building a global community where people can create and share, discover
        the world around them, and connect with others across the world. We are
        committed to maintaining a supportive environment for our growing
        community. Our Community Guidelines establish a set of norms and common
        code of conduct that provide for a safe and welcoming space for
        everyone.
      </Paragraph>
      <Paragraph>
        At Talents Explore, we prioritize safety, diversity, inclusion, and
        authenticity. We encourage creators to celebrate what makes them unique
        and viewers to engage with what inspires them; we believe that a safe
        environment helps everyone do so openly. We prize the global nature of
        our community and strive to take into account the breadth of cultural
        norms where we operate. We also aim to cultivate an environment for
        genuine interactions by encouraging authentic content on Talents
        Explore.
      </Paragraph>
      <Paragraph>
        Our Community Guidelines apply to everyone and everything on Talents
        Explore. We proactively enforce them using a mix of technology and human
        moderation and aim to do so before people report potentially violative
        content to us. We also encourage our community members to use the tools
        we provide on Talents Explore to report any content or account they
        believe violates our Community Guidelines.
      </Paragraph>
      <Paragraph>
        We will remove any content – including video, audio, livestream, images,
        comments, links, or other text – that violates our Community Guidelines.
        Individuals are notified of our decisions and can appeal them if they
        believe no violation has occurred. We will temporarily or permanently
        ban accounts and/or users that are involved in severe or repeated
        on-platform violations; we may also consider actions on other platforms
        and offline behavior in these decisions. Circumstances that involve any
        instance of a threat of real-world harm to human life that is specific,
        credible, and imminent may be reported to law enforcement authorities.
        The full Talents Explore experience is for people 13 and older, and we
        actively remove accounts of people we suspect are under this age.
      </Paragraph>
      <Paragraph>
        Our algorithms are designed with trust and safety in mind. For some
        content, we may reduce discoverability, including by redirecting search
        results, or making videos ineligible for recommendation in the For You
        feed. More information can be found below in the Ineligible for the For
        You feed section.
      </Paragraph>
      <Paragraph>
        At the same time, we recognize that some content that would normally be
        removed per our Community Guidelines may be in the public interest.
        Therefore, we may allow exceptions under certain limited circumstances,
        such as educational, documentary, scientific, artistic, or satirical
        content, content in fictional or professional settings, counterspeech,
        or content that otherwise enables individual expression on topics of
        social importance. To minimize the potentially negative impact of
        graphic content, we may first include safety measures such as an
        “opt-in” screen or warning.
      </Paragraph>
      <Paragraph>
        In consultation with relevant stakeholders, we update our Community
        Guidelines from time to time to evolve alongside new behaviours and
        risks, as part of our commitment to keeping Talents Explore a safe place
        for creativity and joy.
      </Paragraph>
      {CGQandA.map((qa) => {
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

export default CommunityGuide;
