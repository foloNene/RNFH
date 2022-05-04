import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import styled from "styled-components";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter </Title>
      <Description>
        stay trending!!! Get the latest update from the fashion world..
      </Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <AiOutlineSend />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
const Container = styled.div`
  height: 60vh;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 75px;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    font-size: 50px;
  }
`;
const Description = styled.div`
  font-size: 35px;
  font-weight: 300;
  margin-bottom: 20px;
  @media screen and (max-width: 800px) {
    text-align: center;
    font-size: 20px;
    font-weight: 100;
  }
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-colour: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
