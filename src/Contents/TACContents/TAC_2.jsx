import React from "react";
import { Parah } from "../ContentsStyles";
import { ParahLink } from "../../Pages/PagesStyles";

const TAC_2 = () => {
  return (
    <>
      <Parah>
        These Terms govern your use of Talents Explore services (the
        “Platform”), which includes Talents Explore apps, websites, software and
        related services, accessed via any platform or device. Our{" "}
        <ParahLink to="/community-guidelines">Community Guidelines</ParahLink>{" "}
        also form part of our contract with you and, by agreeing to these Terms,
        you promise to us that you will comply with them.
      </Parah>
      <Parah>
        The products and services you access through your Talents Explore For
        Business, Talents Explore Ads Manager and Talents Explore Business
        Centre accounts are governed by the separate{" "}
        <ParahLink to="/community-guidelines">
          {" "}
          Commercial Terms of Service.
        </ParahLink>
      </Parah>
      <Parah>
        In short: These Terms apply to your use of Talents Explore, websites,
        software and related services however you access them. As part of
        complying with these Terms, you must also follow our{" "}
        <ParahLink to="/community-guidelines">Community Guidelines.</ParahLink>
      </Parah>
    </>
  );
};

export default TAC_2;
