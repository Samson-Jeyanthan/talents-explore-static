import React, { useState } from "react";
import { vm } from "../../Data";
import {
  VMButton,
  VMCard,
  VMCardWrapper,
  VMHeading,
  VMImage,
  VMModal,
  VMModalWraper,
  VMPageWrapper,
} from "./VMStyles";

const VM = () => {
  const [id, setId] = useState(1);

  const handleClick = (event) => {
    vm.forEach((item) => {
      if (item.id === parseInt(event.target.id)) {
        setId(item.id);
      }
    });
  };
  return (
    <VMPageWrapper id="vm">
      <VMHeading>Empowering Talents &</VMHeading>
      <VMHeading>Building Connections</VMHeading>
      <VMCardWrapper>
        {vm.map((item) => (
          <VMCard key={item.id}>
            <VMImage src={item.image} alt="image" />
            <h3>{item.title}</h3>
            <span>
              <VMButton onClick={handleClick} id={item.id}></VMButton>
            </span>
          </VMCard>
        ))}
      </VMCardWrapper>
      <VMModalWraper>
        {vm.map((item) => (
          <div key={item.id}>
            {id === item.id && (
              <VMModal>
                <h3>{item.modalTitle}</h3>
                <p>{item.desc}</p>
              </VMModal>
            )}
          </div>
        ))}
      </VMModalWraper>
    </VMPageWrapper>
  );
};

export default VM;
