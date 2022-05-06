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
            Paragraph="we Aim take the world of fashion to a new height 
            where each and  every one can express one self in 
            their own unique style
            ."
            icon={Icon1}
            col="grey"
          />
          <Card
            Heading="Our Vision"
            Paragraph="Our mission is to create an apparel company that can 
            offer superior design, quality and value to the consumer. We will 
            accomplish this by being committed to offering great service and real
             value to our business partners and consumers.."
            icon={Icon2}
            col="#25AAE2"
          />
          <Card
            Heading="Our Product"
            Paragraph="The goal for our brands is to build a strong emotional bond with
             the customer. To do this we must build lifestyle environments that appeal 
             emotionally"
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
    margin-top: 0px;
    margin-bottom: 0;
  }
`;

const ContainerWrap = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
