import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoriesItem = ({ item }) => {
  return (
    <Container>
      <Wrapper>
        <Image src={item.img} key={item.id} />
        <Info>
          <Title>{item.title}</Title>
          <Link to="/gallary">
            <Button>See More</Button>{" "}
          </Link>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default CategoriesItem;

const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  // @media screen and (max-width: 425px) {
  //   height: 0vh;
  // }
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: whitesmoke;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  border-radius: 6px;
`;
