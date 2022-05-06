import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import styled from "styled-components";
import Crd from "../components/Crd";
import aboutImg1 from "../Assests/aboutImg.jpg";
import workers from "../Assests/workers.png";
import ngo from "../Assests/ngo.png";
import product from "../Assests/product.png";

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
          discription="Our vision is: building people with dignity and self-worth. 
                    Every human being should have the same opportunity. More than 100 million 
                    Nigerians lack access to basic amenities—from clean water and electricity 
                    quality education and liberty to participate in the economy, as equal 
                    citizens. We are about changing these phenomena."
          Title="OUR VISION"
          cl="#003399"
          icon={workers}
          Info="Our vision is: building people with 
                    dignity and self-worth. Every human being 
                    should have the same opportunity."
          text="OUR VISION"
        />

        <br />
        <Crd
          discription="To advocate for community development, basic human right and
                     welfare. To create platform where every citizen can excel. To empower 
                     and strengthen the striving citizens, through education, vocational 
                     training, and giving financial support. To protect the poor and the needy, 
                     being the voice to the voiceless"
          Title="OUR MISION"
          cl="#25AAE2"
          icon={product}
          Info="To advocate for community development, 
                    basic human right and welfare. To create platform 
                    where every citizen can excel."
          text="OUR MISSION"
          fd="row-reverse"
        />
        <br />
        <Crd
          discription="Elisha Development and Humanitarian Foundation is a place where you get to bring your full self, 
                    to serve, to impart knowledge, and to create values worth emulating, for 
                    the communities we serve. Curiosity, kindness, collaboration, optimism, 
                    courage, creativity, these are some of the qualities that define us as human. 
                    We seek team members with different origins, beliefs, backgrounds and ways of thinking. 
                    Diversity is how we tackle the world’s toughest challenges. We seek responsible, 
                    hard-working and spirited change makers, so if you are young, active and ready to change 
                    the world for the better, we look forward to seeing you join our team so we can serve 
                    humanity together"
          Title="OUR VOLUNTEERS/TEAM"
          cl="#3AB54A"
          icon={ngo}
          Info="This is a place where you get to bring your full self, 
                    to serve, to impart knowledge, and to create values worth emulating."
          text="VOLUNTEER"
        />
      </Cards>

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
