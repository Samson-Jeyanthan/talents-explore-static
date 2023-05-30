import React from "react";
import {
  OtherPCCard,
  OtherPCTitle,
  OtherPCWrapper,
  OtherPcDesc,
  PCArrow,
  PCCard,
  PCCardContent,
  PCCardDesc,
  PCCardImage,
  PCCardTitle,
  PCCardWrapper,
  PCSubtitle,
  PCTitle,
  PCWContentWrapper,
  PCWrapper,
} from "./PCStyles";
import { OtherPC, PC } from "../../Data";

const PolicyCenter = () => {
  return (
    <PCWrapper>
      <PCWContentWrapper>
        <PCTitle>Policies Center</PCTitle>
        <PCSubtitle>
          Discover how we work, our policies, and guidelines for Talents
          Explore.
        </PCSubtitle>
        {PC.map((item) => (
          <PCCardWrapper
            invert={item.invert ? "true" : undefined}
            key={item.id}
          >
            <PCCard>
              <PCCardImage src={item.image} alt={item.title} />
              <PCCardContent
                invert={item.invert ? "true" : undefined}
                to={item.link}
              >
                <PCCardTitle>
                  <h2>{item.title}</h2>
                  <PCArrow />
                </PCCardTitle>
                <PCCardDesc>{item.desc}</PCCardDesc>
              </PCCardContent>
            </PCCard>
          </PCCardWrapper>
        ))}
        <PCTitle style={{ marginTop: "2rem" }}>Other Policies</PCTitle>
        <PCSubtitle>
          Explore our comprehensive set of policies that govern various aspects
          of Talents Explore, ensuring a safe and inclusive platform for all
          users.
        </PCSubtitle>
        <OtherPCWrapper>
          {OtherPC.map((item) => (
            <OtherPCCard to={item.link} key={item.id}>
              <OtherPCTitle>{item.title}</OtherPCTitle>
              <OtherPcDesc>{item.desc}</OtherPcDesc>
            </OtherPCCard>
          ))}
        </OtherPCWrapper>
      </PCWContentWrapper>
    </PCWrapper>
  );
};

export default PolicyCenter;
