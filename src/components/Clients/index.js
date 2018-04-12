import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../../assets/mw-logo.png'

import ehl from '../../assets/ClientLogos/ehl-logo.png'
import accenture from '../../assets/ClientLogos/accenture-logo.png'
import ilhm from '../../assets/ClientLogos/ilhm-logo.png'
import thompson from '../../assets/ClientLogos/thompson-logo.png'
import tyson from '../../assets/ClientLogos/tyson-logo.png'

import consultingIcon from '../../assets/IndustryIcons/consulting.png'
import financeIcon from '../../assets/IndustryIcons/finance.png'
import foodIcon from '../../assets/IndustryIcons/food.png'
import healthIcon from '../../assets/IndustryIcons/health.png'
import retailIcon from '../../assets/IndustryIcons/retail.png'

const Clients = () => (
  <div>
  <Heading>Industries I’ve worked with</Heading>
  <Intro>I've worked with a range of big companies around the world most of which are fortune 500 companies. These companies range from big corporate B2B's right down the small startups. This variety has allowed me to gain insight into many areas of business and understand problems from a macro and micro level.
  </Intro>
    <Wrapper>
      <ClientWrapper>
        <Industries>
          <Industry>
            <img src={consultingIcon} alt=""/>
            <h3>consulting</h3>
          </Industry>
          <Industry>
            <img src={foodIcon} alt=""/>
            <h3>food</h3>
          </Industry>
          <Industry>
            <img src={healthIcon} alt=""/>
            <h3>health</h3>
          </Industry>
          <Industry>
            <img src={retailIcon} alt=""/>
            <h3>retail</h3>
          </Industry>
          <Industry>
            <img src={financeIcon} alt=""/>
            <h3>finance</h3>
          </Industry>

        </Industries>
      </ClientWrapper>
    </Wrapper>
  </div>
)

export default Clients

const Wrapper = styled.div`
  padding-left: 0;
  padding-right: 0;
  background: #F5F5F5;

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

  @media (max-width: 420px) {
    margin-top: 40px;
  }
`

const Intro = styled.p`
  padding-left: 10%;
  padding-right: 10%;
`

const Industries = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;

  p {
    margin-bottom: 0;
    border: 4px solid #B5B5B5;
    padding: 15px;
    cursor: pointer;

    &:hover {
      background: #FFC70B;
      border: 4px solid #FFC70B;

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

const Industry = styled.div`

  text-align: center;

  img {
    width: 70px;
    height: auto;
    margin: 0 auto;
  }
  h3 {
    text-align: center;
    text-transform: uppercase;
    color: #D5D5D5;
    font-size: 14px;
    margin: 0;
  }

  @media (max-width: 420px) {
    margin: 10px;
  }
`

