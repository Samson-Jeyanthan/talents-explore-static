import React from "react";
import {
  Parah,
  PointsIcon,
  PointsWrapper,
  SubTitle,
  ThirdTitle,
} from "../ContentsStyles";

const CG_3 = () => {
  return (
    <>
      <Parah>
        We care deeply about the health and well-being of the individuals who
        make up our community. We do not allow content depicting, promoting,
        normalizing, or glorifying activities that could lead to suicide,
        self-harm, or disordered eating. However, we do support members of our
        community sharing their personal experiences with these issues in a safe
        way to raise awareness and find community support. We also encourage
        individuals who are struggling with thoughts of suicide or self-harm, or
        who know someone is seriously considering suicide, to immediately
        contact local emergency services or a suicide prevention hotline. In the
        event that our intervention could help a user who may be at risk of
        harming themselves, Talents Explore may also alert local emergency
        services.
      </Parah>
      <SubTitle>Suicide and Self-harm</SubTitle>
      <Parah>
        We remove content that depicts suicide, involves suicidal ideation, or
        that might encourage suicidal or self-injurious behaviour. We also
        remove content that depicts attempted suicide or behaviour likely to
        lead to self-inflicted death. We prohibit any form of content that
        promotes, normalizes, or glorifies suicide, provides instructions for
        suicide, or posts that portray a suicide as heroic or honourable.
        Circumstances that involve any instance of a threat of real-world harm
        to human life that is specific, credible, and imminent may be reported
        to law enforcement authorities.
      </Parah>
      <Parah>
        Content that encourages or promotes suicide or self-harm hoaxes are also
        not allowed. This includes alarming warnings that could cause panic and
        widespread harm. We will remove such warnings, while allowing content
        that seeks to dispel panic and promote accurate information about such
        hoaxes.
      </Parah>
      <ThirdTitle>Do not post, upload, stream, or share:</ThirdTitle>
      <PointsWrapper>
        <PointsIcon />
        Content that depicts, promotes, normalizes, or glorifies suicide or
        self-harm.
      </PointsWrapper>
      <PointsWrapper>
        <PointsIcon />
        Content that provides instructions for suicide or how to engage in
        self-harm.
      </PointsWrapper>
      <PointsWrapper>
        <PointsIcon />
        Suicide or self harm games, dares, challenges, pacts, or hoaxes.
      </PointsWrapper>
      <SubTitle>Disordered Eating</SubTitle>
      <Parah>
        Content that promotes unhealthy eating behaviours or habits that are
        likely to cause adverse health outcomes is not allowed on the platform.
        This includes content expressing desire for an eating disorder, sharing
        tips or coaching on disordered eating, and participation in unhealthy
        body measurement challenges.
      </Parah>
      <ThirdTitle>Do not post, upload, stream, or share:</ThirdTitle>
      <PointsWrapper>
        <PointsIcon />
        Content that depicts, promotes, normalizes, or glorifies disordered
        eating.
      </PointsWrapper>
      <PointsWrapper>
        <PointsIcon />
        Content that depicts, promotes, normalizes, or glorifies any dangerous
        weight loss behaviours associated with disordered eating.
      </PointsWrapper>
    </>
  );
};

export default CG_3;
