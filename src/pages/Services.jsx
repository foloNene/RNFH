import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import styled from "styled-components";
import Crd from "../components/Crd";
import aboutImg1 from "../Assests/aboutImg.jpg";
import workers from "../Assests/workers.png";
import ngo from "../Assests/ngo.png";
import product from "../Assests/product.png";
import Humaintarian from "../components/Humaintarian";

const Services = () => {
  return (
    <>
      <Announcement />
      <LandingPage>
        <Image src={aboutImg1} />
        <OverLayer>
          <Span>Services</Span>
          <Button>Contact Us</Button>
        </OverLayer>
      </LandingPage>
      <Cards>
        <br />
        <Crd
          discription="Our Workers are people with dignity and self-worth. who give their best in what tey do
                    Every human being should have the same opportunity.
                      We are about changing these phenomena."
          Title="OUR WORKERS"
          cl="#003399"
          icon={workers}
          Info="Our Worker is: building people with 
                    dignity and self-worth. Every human being 
                    should have the same opportunity."
          text="OUR WORKERS"
        />

        <br />
        <Crd
          discription="Our mission is to create an apparel company that can 
            offer superior design, quality and value to the consumer. We will 
            accomplish this by being committed to offering great service and real
             value to our business partners and consumers.."
          Title="OUR MISION"
          cl="#25AAE2"
          icon={product}
          Info="To advocate for community development, 
                    basic human right and welfare. To create platform 
                    where every citizen can excel."
          text="OUR PRODUCTS"
          fd="row-reverse"
        />
        <br />
        <Crd
          discription="To advocate for community development, basic human right and
                     welfare. To create platform where every citizen can excel. To empower 
                     and strengthen the striving citizens, through education, vocational 
                     training, and giving financial support. To protect the poor and the needy, 
                     being the voice to the voiceless"
          Title="OUR VOLUNTEERS/TEAM"
          cl="#3AB54A"
          icon={ngo}
          Info="This is a place where you get to bring your full self, 
                    to serve, to impart knowledge, and to create values worth emulating."
          text="NGO"
        />
      </Cards>
      <Humaintarian />

      <Footer />
    </>
  );
};

export default Services;

const Cards = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Button = styled.button`
  width: 100px;
  border: none;
  outline: none;
  border-radius: 7px;
  height: 40px;
  border-color: teal;
  margin-top: 10px;
  transition: all 590ms;
  transform: scale(1);

  :hove {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Span = styled.div`
  font-size: 25px;
  color: grey;
  font-weight: bold;
`;
const OverLayer = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgb(9, 82, 252, 40%);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  position: absolute;
`;

const LandingPage = styled.div`
  width: 100%;
  height: 400px;
  background-color: blue;
`;
