import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../../assets/mw-logo.png'

import ehl from '../../assets/ClientLogos/ehl-logo.png'
import accenture from '../../assets/ClientLogos/accenture-logo.png'
import ilhm from '../../assets/ClientLogos/ilhm-logo.png'
import thompson from '../../assets/ClientLogos/thompson-logo.png'
import tyson from '../../assets/ClientLogos/tyson-logo.png'

const Clients = () => (
  <div>
  <Heading>Clients I’ve worked with</Heading>
    <Wrapper>
      <ClientWrapper>
        <Logos>
          <p><a href="http://www.ehl.edu/" target="_BLANK">EHL</a></p>
          <p><a href="https://www.accenture.com/" target="_BLANK">Accenture</a></p>
          <p><a href="http://www.luxuryhomemarketing.com/real-estate-agents/home.html" target="_BLANK">ILHM</a></p>
          <p><a href="https://www.thomsonreuters.com/" target="_BLANK">Thompson Reuters</a></p>
          <p><a href="https://www.tysonfoods.com/" target="_BLANK">Tyson</a></p>
        </Logos>
      </ClientWrapper>
    </Wrapper>
  </div>
)

export default Clients

const Wrapper = styled.div`
  padding-left: 0;
  padding-right: 0;
  background: #F6F6F6;

  @media (max-width: 768px) {
    padding: 0 0;
    margin-top: 10px;
  }
  @media (max-width: 420px) {
    padding: 0 0;
    margin-top: 10px;
  }
`
const ClientWrapper = styled.div`
  padding: 20px 10%;

  @media (max-width: 768px) {
    max-height: 100%;
    padding: 20px 5%;
  }
  @media (max-width: 420px) {
    flex-direction: column;
    max-height: 100%;
  }
`

const Heading = styled.h2`
  font-size: 40px;
  font-weight: 900;
  text-transform: uppercase;
  padding-left: 10%;
  margin-top: 80px;

  &::after {
    content: " ";
    padding-top: 10px;
    border-bottom: 4px solid #FFC70B;
    width: 6%;
    height: 6px;
    display: block;
  }

  @media (max-width: 768px) {
    padding: 0 5%;
  }
`

const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;

  p {
    margin-bottom: 0;
    border: 2px solid #B5B5B5;
    padding: 15px;
    cursor: pointer;

    &:hover {
      background: #FFC70B;
      border: 2px solid #FFC70B;

      a {
        color: #272727;
      }
    }

    a {
      color: #B5B5B5;
      font-family: 'Roboto',sans-serif;
      font-weight: 700;
      text-decoration: none;
    }
  }
  img {
    width: 120px;
    height: 120px;
    margin: 0 30px 0 0;
  }

  @media (max-width: 851px) {
    img {
      margin: 0 10px 0 0;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-around;

    p {
      margin: 10px;
    }

    img {
      width: 90px;
      height: 90px;
      margin: 0 20px 0 0;
    }
  }

  @media (max-width: 520px) {
    flex-wrap: wrap;

    justify-content: space-around;

    p {
      margin: 5px;
    }
  }
`

