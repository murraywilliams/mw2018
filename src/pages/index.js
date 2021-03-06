import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import About from '../components/About/index'
import Clients from '../components/Clients/index'
import Contact from '../components/Contact/index'
import Footer from '../components/Footer/index'

const IndexPage = () => (
  <div>
    <Banner>
      <Title>freelance <br/>developer</Title>
      <Subtitle>As a designer and developer, I understand that a perfect user interface should look good and work even better. Alongside my clients, I uncover problems and together we help solve them. In short, I partner with my clients to create bolder online experiences.</Subtitle>
    </Banner>
    <About />
    <Clients />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage;

const Banner = styled.div`
  background: #272727;
  padding: 80px 10%;

  @media (max-width: 1024px) {
    padding: 60px 10%;
  }
  @media (max-width: 768px) {
    padding: 40px 5%;
  }
  @media (max-width: 420px) {
    padding: 40px 5%;
  }
`
const Title = styled.h2`
  font-size: 80px;
  font-weight: 900;
  text-transform: uppercase;
  color: white;
  padding-bottom: 40px;
  line-height: 0.9;

  &::after {
    content: " ";
    padding-top: 10px;
    padding-right: 50%;
    border-bottom: 8px solid #FFC70B;
    width: 50%;
    height: 8px;
    display: block;
  }

  @media (max-width: 1024px) {

    &::after {
      content: " ";
      padding-top: 10px;
      padding-bottom: 30px;
      border-bottom: 8px solid #FFC70B;
      width: 50%;
      height: 8px;
      display: block;
    }
  }
  @media (max-width: 768px) {
    font-size: 55px;

    &::after {
      content: " ";
      padding-top: 10px;
      padding-bottom: 30px;
      border-bottom: 8px solid #FFC70B;
      width: 60%;
      height: 8px;
      display: block;
    }
  }
  @media (max-width: 420px) {
    width: 90%;
    font-size: 50px;

    &::after {

      content: " ";
      padding-top: 10px;
      padding-bottom: 5px;
      border-bottom: 6px solid #FFC70B;
      width: 60%;
      height: 8px;
      display: block;
  }

  @media (max-width: 320px) {
    font-size: 35px;
    padding-bottom: 20px;
  }

`
const Subtitle = styled.p`
  font-size: 16px;
  width: 45%;
  color: white;
  line-height: 2;
  letter-spacing: 4px;

  @media (max-width: 1440px) {
    width: 60%;
  }

  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 420px) {
    width: 90%;
    font-size: 14px;
  }

  @media (max-width: 320px) {
    width: 100%;
    font-size: 13px;
  }
`
