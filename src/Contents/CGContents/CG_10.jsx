import React from "react";
import {
  Parah,
  PointsIcon,
  PointsWrapper,
  ThirdTitle,
} from "../ContentsStyles";

const CG_10 = () => {
  return (
    <>
      <Parah>
        TikTok is a platform that celebrates creativity but not shock value or
        violence. We do not allow content that is gratuitously shocking,
        graphic, sadistic, or gruesome or that promotes, normalizes, or
        glorifies extreme violence or suffering on our platform. When it is a
        threat to public safety, we ban the account and, when warranted, we will
        report it to relevant legal authorities.
      </Parah>
      <ThirdTitle>Do not post, upload, stream, or share:</ThirdTitle>
      <Parah>
        Content of humans that depicts:
        <PointsWrapper>
          <PointsIcon />
          violent or graphic deaths or accidents
        </PointsWrapper>
        <PointsWrapper>
          <PointsIcon />
          dismembered, mutilated, charred, or burned human remains
        </PointsWrapper>
        <PointsWrapper>
          <PointsIcon />
          gore in which an open wound or injury is the core focus
        </PointsWrapper>
        <PointsWrapper>
          <PointsIcon />
          real-world physical violence, fighting, or torture
        </PointsWrapper>
      </Parah>
      <Parah>
        Content of animals that depicts:
        <PointsWrapper>
          <PointsIcon /> the slaughter or other non-natural death of animals
        </PointsWrapper>
        <PointsWrapper>
          <PointsIcon />
          dismembered, mutilated, charred, or burned animal remains
        </PointsWrapper>
        <PointsWrapper>
          <PointsIcon />o animal cruelty and gore
        </PointsWrapper>
      </Parah>
    </>
  );
};

export default CG_10;
