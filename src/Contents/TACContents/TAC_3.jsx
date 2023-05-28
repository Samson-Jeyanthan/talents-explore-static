import React from "react";
import { PointsWrapper, Parah, PointsIcon } from "../ContentsStyles";
import { ParahLink } from "../../Pages/PagesStyles";

const TAC_3 = () => {
  return (
    <>
      <Parah>
        Additional terms and policies may apply to certain products or features
        of the Platform that we may make available to you, if you post or live
        stream certain kinds of content, or if you use the Platform for business
        or commercial purposes. The main ones you should be aware of, and which
        form part of these Terms, are set out below for your information:
      </Parah>
      <PointsWrapper>
        <PointsIcon />
        <div>
          <ParahLink to="/music-terms">Music Terms :</ParahLink> These terms
          apply when you post or live stream content on the Platform that
          includes music.
        </div>
      </PointsWrapper>
      <PointsWrapper>
        <PointsIcon />
        <div>
          <ParahLink to="/intellectual-property-policy">
            Intellectual Property Policy :
          </ParahLink>{" "}
          This policy applies to all content on the Platform that is protected
          by intellectual property rights.
        </div>
      </PointsWrapper>
      <PointsWrapper>
        <PointsIcon />

        <div>
          <ParahLink to="/intellectual-property-policy">
            Branded Content Policy :
          </ParahLink>{" "}
          This policy applies when you post content on the Platform about a
          brand or a product in return for any payment or other incentive.
        </div>
      </PointsWrapper>
      <PointsWrapper>
        <PointsIcon />
        <div>
          <ParahLink to="/business-terms">Business Terms :</ParahLink> These
          terms apply if you use the Platform for purposes within your trade,
          business, craft or profession, including managing your own business
          through your account on the Platform or administering an account on
          behalf of a business.
        </div>
      </PointsWrapper>
      <Parah>
        In short: These Terms cover your use of the Platform. There may be some
        additional terms and policies that will apply if you want to access
        additional functionality, post or live stream certain kinds of content,
        or use the Platform for business or commercial purposes.
      </Parah>
    </>
  );
};

export default TAC_3;
