import React from "react";
import styled from "styled-components";
import img from "../Assests/contactImg2.jpg";
import Icon1 from "../Assests/mail.png";
import Icon2 from "../Assests/phone.png";
import Icon3 from "../Assests/location.jpg";
import social from "../Assests/social.jpg";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const OverLay = () => {
  return (
    <>
      <Container>
        <LandingPage>
          <Image src={img} />
          <Layer>
            <Span>Contact Us</Span>
            <p>You can reach us anytime via info@gmail.com</p>
            <Link to="/gallary">
              <Button>Shop Now</Button>
            </Link>
          </Layer>
          <Text>Find us HEre</Text>
          <MapHolder>
            <iframe
              width="100%"
              height="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=5,amodu%20street%20ilaje%20bariga%20lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </MapHolder>
          <ContactHold>
            <Contactwrap>
              <Left>
                <Header>GET IN TOUCH</Header>
                <p>
                  We would love to hear from you, our amazing Admin care team is
                  always available to hear from you
                </p>
                <ContHold>
                  <div style={{ marginRight: "10px" }}>
                    <img src={Icon1} height="15px" alt="Email" />
                  </div>
                  <div>
                    <h3>Chat with us</h3>
                    <p>Our team is always here to listen and respond to you</p>
                  </div>
                </ContHold>
                <ContHold>
                  <div style={{ marginRight: "10px" }}>
                    <img src={Icon2} height="15px" alt="Email" />
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <p>
                      We are available to take your calls from Monday-Friday
                      9am-4pm
                    </p>
                  </div>
                </ContHold>
                <ContHold>
                  <div style={{ marginRight: "10px" }}>
                    <img src={Icon3} height="15px" alt="Email" />
                  </div>
                  <div>
                    <h3>Office</h3>
                    <p>Come say hello at our office</p>
                    <p>5, Amodu Street, Ilaje-Bariga, Lagos, Nigeria</p>
                  </div>
                </ContHold>
                <ContHold>
                  <div style={{ marginRight: "10px" }}>
                    <img src={social} height="15px" alt="Email" />
                  </div>
                  <div>
                    <h3>Socials</h3>
                    <p>You can also reach us via our social handles</p>
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
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SocialIcon color="E60023">
                          <AiFillYoutube />
                        </SocialIcon>
                      </a>
                    </SocialContainer>
                  </div>
                </ContHold>
              </Left>
              <Right>
                <Header>Your Support will help us reach more people</Header>
                <p>You can reach us anytime via info@gmail.com</p>
                <InputHolder>
                  <InputSection>
                    <label>Name</label>
                    <br />
                    <input />
                  </InputSection>

                  <InputSection>
                    <label>Email</label>
                    <br /> <input />
                  </InputSection>

                  <InputSection>
                    <label>Subject</label>
                    <br /> <input />
                  </InputSection>

                  <InputSection>
                    <label>Message</label>
                    <br /> <textarea />
                  </InputSection>

                  <Button>Submit</Button>
                </InputHolder>
              </Right>
            </Contactwrap>
          </ContactHold>
        </LandingPage>
      </Container>
    </>
  );
};

export default OverLay;

const Container = styled.div`
width: 100%;
min-height: 100vh;
// height: 100%;
display: flex;
flex-direction: column;
align-items" center;
`;

const LandingPage = styled.div`
  width: 100%;
  height: 400px;
  background-color: blue;
  @media screen and (max-width: 650px) {
    height: 350px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  position: absolute;
  @media screen and (max-width: 650px) {
    height: 350px;
  }
`;

const Layer = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgb(9, 82, 252, 40%);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    font-size: 17px;
  }
  @media screen and (max-width: 650px) {
    justify-content: flex-end;
  }
  @media screen and (max-width: 425px) {
    p {
      font-size: 14px;
    }
  }
`;
const Button = styled.button`
  width: 120px;
  border: none;
  outline: none;
  height: 40px;
  border-radius: 7px;
  color: #ffff;
  background-color: #3ab54a;
  margin-top: 10px;
  transition: all 590ms;
  transform: scale(1);
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media screen and (max-width: 650px) {
    margin-bottom: 40px;
  }
`;

const Span = styled.div`
  font-size: 25px;
  color: #ffff;
  font-weight: bold;
`;
const MapHolder = styled.div`
  width: 100%;
  height: 450px;
  border: 1px solid whitesmoke;
  margin: 15px 0 15px 0;
  border-radius: 8px;
  @media screen and (max-width: 425px) {
    height: 350px;
    width: 95%;
  }
`;
const Text = styled.div`
  font-size: 25px;
  font-weight: bold;
  width: 90%;
  margin-top: 20px;

  @media screen and (max-width: 425px) {
    width: 95%;
  }
`;
const ContactHold = styled.div`
  width: 100%;
  margin-bottom: 40px;
  margin-top: 40px;
  background-color: #008080;
  display: flex;
  justify-content: center;
  padding: 50px 0 50px 0;
  @media screen and (max-width: 650px) {
    margin-top: 20px;
  }
`;

const Contactwrap = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: white;
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
  @media screen and (max-width: 650px) {
    width: 95%;
    justify-content: center;
    margin-left: 10px;
  }
`;

const Left = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  p {
    width: 300px;
  }
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 500px;
  @media screen and (max-width: 650px) {
    margin-top: 40px;
    width: 100%;
  }
`;
const Header = styled.div`
  font-size: 30px;
  margin-bottom: 15px;
  @media screen and (max-width: 425px) {
    font-size: 20px;
  }
`;
const ContHold = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
  h3 {
    color: white;
  }
  p {
    width: 100%;
  }
  span {
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  @media screen and (max-width: 650px) {
    width: 90%;
    justify-content: flex-start;
  }
`;
const InputHolder = styled.div`
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 500px;
  align-items: center;
  Button {
    height: 40px;
    width: 184px;
    border-radius: 8px;
    background-color: #25aae2;
    color: white;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
    justify-content: center;
    Button {
      margin-top: 20px;
    }
  }
`;

const InputSection = styled.div`
  width: 100%;
  input {
    height: 45px;
    width: 450px;
    border-radius: 8px;
    outline: none;
    color: black;
  }
  textarea {
    height: 175px;
    width: 450px;
    border-radius: 8px;
    color: black;
    outline: none;
  }
  @media screen and (max-width: 850px) {
    margin-top: 15px;
  }
  @media screen and (max-width: 650px) {
    input {
      width: 95%;
    }
    textarea {
      width: 95%;
    }
  }
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

const SocialContainer = styled.div`
  display: flex;
`;

const FooterContainer = styled.div`
  bottom: 0;
`;
