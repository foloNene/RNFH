import React from "react";

import styled from "styled-components";
import img1 from "../Assests/img.jpg";
import img2 from "../Assests/img2.jpg";
import img3 from "../Assests/img3.jpg";
import img4 from "../Assests/img4.jpg";
import img5 from "../Assests/img5.jpg";
import img6 from "../Assests/img6.jpg";

import { Carousel } from "antd";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <Conatainer>
      <Wrapper>
        <MySlider autoplay>
          <MyStyled>
            <SliderImage src={img1} />
          </MyStyled>
          <MyStyled>
            <SliderImage src={img2} />
          </MyStyled>
          <MyStyled>
            <SliderImage src={img3} />
          </MyStyled>
          <MyStyled>
            <SliderImage src={img4} />
          </MyStyled>
          <MyStyled>
            <SliderImage src={img5} />
          </MyStyled>
          <MyStyled>
            <SliderImage src={img6} />
          </MyStyled>
        </MySlider>
      </Wrapper>
      <TextHold>
        <TextHoldHeader>
          We make Fashion and Lifestyle come to you{" "}
        </TextHoldHeader>
        <TextHoldPara>
          The core of our Value is showing you out there to the world, whether
          old or young, and community of people so you may shine like the
          star(s) that you all are{" "}
        </TextHoldPara>
        <SliderButtonHold>
          <Link to="/gallary">
            {" "}
            <Button>Our Gallary</Button>
          </Link>
          <Link to="/contact">
            <Button>Contact Us</Button>
          </Link>
        </SliderButtonHold>
      </TextHold>
    </Conatainer>
  );
};

export default Slider;

const Conatainer = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;

  @media screen and (max-width: 425px) {
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  position: absolute;
  overflow: hidden;
`;

const MySlider = styled(Carousel)`
  transition: all 300s ease;
`;
const MyStyled = styled.div`
 width: 100%;
height: 550px;
background-color: #003399;
overflow: hidden;
@media screen and (max-width: 600px) {
  height: 400px
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const TextHold = styled.div`
  position: absolute;
  margin-top: 80px;
  margin-left: 150px;
  flex-direction: column;
  width: 400px;
  color: white;
`;

const TextHoldHeader = styled.h2`
  font-weight: 500;
  color: white;
  font-size: 45px;
  line-height: 59px;
`;

const TextHoldPara = styled.p`
  font-size: 16px;
`;

const SliderButtonHold = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button``;
