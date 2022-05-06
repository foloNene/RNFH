import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineHome,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Left>
        <LogoHold>
          <Link to="/">
            <HomeLogo>
              <AiOutlineHome />
            </HomeLogo>
            <HomeText>RNP..</HomeText>
          </Link>
        </LogoHold>
        <Desc>
          We are the number 1 tranding fashion store in the world, we bring
          fashion to you. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nihil, error.
        </Desc>
        <SocialContainer>
          <a
            href="https://web.facebook.com/Ladex05/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon color="385999">
              <AiFillFacebook />
            </SocialIcon>
          </a>

          <a
            href="https://www.instagram.com/adebanjo_olaide/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon color="E4405f">
              <AiOutlineInstagram />
            </SocialIcon>
          </a>

          <a
            href="https://twitter.com/Iam_ladex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon color="55ACEE">
              <AiOutlineTwitter />
            </SocialIcon>
          </a>

          <a
            href="https://www.pinterest.com/ladex05/_saved/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon color="E60023">
              <BsPinterest />
            </SocialIcon>
          </a>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>Gallary</ListItem>
          <ListItem>Product</ListItem>
          <ListItem>Service</ListItem>
          <ListItem>Men and Fashion</ListItem>
          <ListItem>Women and Fashion</ListItem>
          <ListItem>Wish List</ListItem>
          <ListItem>Promo and giveAway</ListItem>
          <ListItem>Others</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <GoLocation style={{ marginRight: "10px" }} />
          5, Amodu Street Ilaje, Bariga, Lagos.
        </ContactItem>
        <ContactItem>
          <AiOutlinePhone style={{ marginRight: "10px" }} />
          +2348026156Nene
        </ContactItem>
        <ContactItem>
          <AiOutlineMail style={{ marginRight: "10px" }} />
          contact@Nene.gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  bottom: 0;
  @media screen and (max-width: 430px) {
    display: flex;
    flex-direction: column;
    background-color: #d3d3d3;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const LogoHold = styled.div`
  font-weight: bolder;
`;
const HomeLogo = styled.span`
  font-size: 24px;
`;
const HomeText = styled.span``;
const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  @media screen and (max-width: 430px) {
    display: none;
  }
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0;
`;

const ListItem = styled.li`
  width: 50%;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;
