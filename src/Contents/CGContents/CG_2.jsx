import React from "react";
import {
  Parah,
  PointsIcon,
  PointsWrapper,
  ThirdTitle,
} from "../ContentsStyles";

const CG_2 = () => {
  return (
    <>
      <Parah>
        We do not permit users to share content depicting, promoting,
        normalizing or glorifying dangerous acts that may lead to serious injury
        or death. We also do not allow content which promotes or endorses
        collective participation in dangerous or harmful activities that violate
        any aspect of our Community Guidelines.
      </Parah>
      <Parah>
        We define dangerous acts or other dangerous behaviour as activities
        conducted in a non-professional context or without the necessary skills
        and safety precautions that may lead to serious injury or death for the
        user or the public. This includes amateur stunts or dangerous
        challenges.
      </Parah>
      <ThirdTitle>Do not post, upload, stream, or share:</ThirdTitle>
      <PointsWrapper>
        <PointsIcon />
        Content that shows the potentially inappropriate use of dangerous tools
        or objects.
      </PointsWrapper>
      <PointsWrapper>
        <PointsIcon />
        Content that depicts dangerous driving behaviour.
      </PointsWrapper>
      <PointsWrapper>
        <PointsIcon />
        Content that depicts or promotes ingesting substances that are not meant
        for consumption and could lead to severe harm.
      </PointsWrapper>
      <PointsWrapper>
        <PointsIcon />
        Content that describes or provides instructional detail on how to
        perform a dangerous activity.
      </PointsWrapper>
      <PointsWrapper>
        <PointsIcon />
        Dangerous games, dares, challenges, or stunts that might lead to injury
        or property damage.
      </PointsWrapper>
    </>
  );
};

export default CG_2;
