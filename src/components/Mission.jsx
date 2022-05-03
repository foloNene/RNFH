import React from "react";
import Card from "./Card";
import styled from "styled-components";
import Icon1 from "../Assests/Icon1.png";
import Icon2 from "../Assests/Icon2.png";
import Icon3 from "../Assests/Icon3.png";

const Mission = () => {
  return (
    <>
      <ContainerHold>
        <ContainerWrap>
          <Card
            Heading="Our Mission"
            Paragraph="To advocate for community development, 
             basic human right and welfare. To create platform 
                where every citizen can excel."
            icon={Icon1}
            col="grey"
          />
          <Card
            Heading="Our Mission"
            Paragraph="To advocate for community development, 
             basic human right and welfare. To create platform 
                where every citizen can excel."
            icon={Icon2}
            col="#25AAE2"
          />
          <Card
            Heading="Our Mission"
            Paragraph="To advocate for community development, 
             basic human right and welfare. To create platform 
                where every citizen can excel."
            icon={Icon3}
            col="blue"
          />
        </ContainerWrap>
      </ContainerHold>
    </>
  );
};

export default Mission;

const ContainerHold = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 425px) {
    margin-top: 90px;
  }
`;

const ContainerWrap = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
