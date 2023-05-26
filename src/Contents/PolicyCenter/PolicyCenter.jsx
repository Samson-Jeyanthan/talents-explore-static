import React from "react";
import {
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
import { PC } from "../../Data";

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
      </PCWContentWrapper>
    </PCWrapper>
  );
};

export default PolicyCenter;
