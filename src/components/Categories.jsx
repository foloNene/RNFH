import React from "react";
import styled from "styled-components";
import CategoriesItem from "./CategoriesItem";
import { categories } from "../data";

const Categories = () => {
  return (
    <>
      <Header>Our Collections </Header>
      <Container>
        {categories.map((item) => (
          <CategoriesItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Categories;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: space-around;
  @media screen and (max-width: 425px) {
    padding: 20px;
    flex-direction: column;
    align-items: center;
  }
`;

const Header = styled.h2`
  text-align: center;
  font-size: 50px;
  margin-bottom: 2px;
  color: teal;
`;
