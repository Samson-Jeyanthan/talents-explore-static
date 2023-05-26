import React from "react";
import { AboutHeading, AboutP, AboutWrapper } from "./AboutStyles";

const About = () => {
  return (
    <AboutWrapper id="aboutUs">
      <AboutHeading>Who We Are & What We Do?</AboutHeading>
      <AboutP>
        Talents Explore was established in the UK in 2022. Talents Explore is a
        platform for talents to showcase their creative work and gain
        recognition. Talents Explore provides the necessary tools for talents to
        present their profiles in the best possible way and display their skills
        to viewers. Talents Explore appeals to a worldwide audience that
        appreciates various forms of talent and seeks entertainment. The
        platform offers easy search options, allowing viewers to explore only
        what interests them. Additionally, it fosters a community-oriented
        environment that promotes growth and support among users.{" "}
      </AboutP>
      <AboutP>
        Talents Explore also offers other services, including software
        development and technical support. We provide web development and mobile
        app development training for freshers and undergraduates. Please note
        that I have made some minor revisions for clarity and grammar.
      </AboutP>
    </AboutWrapper>
  );
};

export default About;
