import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import { popularProducts } from "../productData";

const Products = () => {
  return (
    <>
      <Header>Our Popular Products</Header>
      <Container>
        {popularProducts.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};
export default Products;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 50px;
  margin-bottom: 2px;
  color: teal;
`;
