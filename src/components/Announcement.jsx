import React from "react";
import styled from "styled-components";

const Announcement = () => {
  return <Container>Super Deal!!! free Shipping on orders Above $60</Container>;
};

export default Announcement;

const Container = styled.div`
  height: 50px;
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
