import React from "react";
import styled from "styled-components";
import serviceImage1 from "../Assests/serviceImage1.jpg";
import serviceImage2 from "../Assests/servicesImage2.jpg";
import serviceImage3 from "../Assests/servicesImage3.jpg";
import serviceImage4 from "../Assests/servicesImage4.jpg";

const Humaintarian = () => {
  return (
    <>
      <Container>
        <Title>we give Back</Title>
        <ImageHolder>
          <Image src={serviceImage1} />
          <Image src={serviceImage2} />
          <Image src={serviceImage3} />
          <Image src={serviceImage4} />
        </ImageHolder>
      </Container>
    </>
  );
};

export default Humaintarian;

const Container = styled.div`
  padding-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: teal;
`;
const ImageHolder = styled.div`
  display: flex;
  justify-content: space-around;
  width: 95%;
  flex-wrap: wrap;
`;
const Image = styled.img`
  width: 250px;
  height: 250px;
  padding: 5px;
`;
