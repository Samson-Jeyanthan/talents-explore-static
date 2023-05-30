import React from "react";
import { Parah } from "../ContentsStyles";

const TAC_10 = () => {
  const handleEmailClick = () => {
    const email = "samson@gmail.com";
    const subject = "Hello";
    const body = "Just wanted to say hi!";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <Parah id="contactUs">
        You can contact us here:{" "}
        <a
          href="#"
          onClick={handleEmailClick}
          style={{
            color: " #ff2146f0",
            cursor: " pointer",
          }}
        >
          Share your feedback
        </a>
      </Parah>
      <Parah>
        In some countries, the law requires us to provide additional regulatory
        information and/or contact points within the country, even though we may
        not be physically present there.
        {/* You can find this information here */}
      </Parah>
    </>
  );
};

export default TAC_10;
