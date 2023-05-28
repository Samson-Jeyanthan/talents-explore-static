import React from "react";
import { Parah } from "../ContentsStyles";
import { ParahLink } from "../../Pages/PagesStyles";

const TAC_8 = () => {
  return (
    <>
      <Parah>
        These Terms are governed by the law of the jurisdiction in which you are
        a resident.
      </Parah>
      <Parah>
        If we have a dispute, we will first try and resolve it with you
        amicably.
      </Parah>
      <Parah>
        If we cannot resolve our dispute, you or we can go to your local courts.
      </Parah>
      <Parah>
        If you are resident in the EEA, you can also raise the dispute with an
        alternative dispute resolution body via the{" "}
        <a
          href="/https://ec.europa.eu/consumers/odr/main/?event=main.home2.show"
          style={{
            color: " #ff2146f0",
            cursor: " pointer",
          }}
        >
          EU Commission’s Online Dispute Resolution (ODR) Platform.
        </a>
      </Parah>
      <Parah>
        In short: We hope we do not get into a dispute but, if we do, there are
        a couple of ways we can try to resolve it.
      </Parah>
    </>
  );
};

export default TAC_8;
