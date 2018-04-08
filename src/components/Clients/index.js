import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../../assets/mw-logo.png'

import ClientImage from '../../assets/clients-image.jpg'

const Clients = () => (
  <Wrapper>
  <SplitColumns>
    <LHS>
      <LeftInner>
        <SubText>I’M PASSIONATE ABOUT SOLVING PROBLEMS WITH LOGIC, SIMPLICITY & GREAT UX.</SubText>
        <img src={ClientImage} alt=""/>
      </LeftInner>
    </LHS>
    <RHS>
      <ClientHeading>clients i’ve worked with</ClientHeading>
      <ul>
        <li>Accenture</li>
        <li>Thompson Reuters</li>
        <li>Tyson</li>
        <li>EHL</li>
        <li>CEO SleepOut</li>
        <li>Byte Sized Solutions</li>
      </ul>
    </RHS>
  </SplitColumns>
  </Wrapper>
)

export default Clients

const Wrapper = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  color: #272727;
  margin-top: 80px;

  @media (max-width: 768px) {
    padding: 0 0;
    margin-top: 10px;
  }
  @media (max-width: 420px) {
    padding: 0 0;
    margin-top: 10px;
  }
`
const SubText = styled.h4`
  font-size: 22px;
  font-weight: 400;
  padding: 0 30px;
  line-height: 2.2;
  text-align: left;
  margin-bottom: 0;

  @media (max-width: 1024px) {
    text-align: center;
  }
  @media (max-width: 420px) {
    text-align: center;
  }
`
const SplitColumns = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: row;
  max-height: 325px;

  @media (max-width: 768px) {
    max-height: 100%;
  }
  @media (max-width: 420px) {
    flex-direction: column;
    max-height: 100%;
  }
`
const LHS = styled.div`
  flex-basis: 100%;
  background: #272727;

  @media (max-width: 1024px) {
    padding-top: 10%;
  }
  @media (max-width: 768px) {
    padding-top: 9%;
  }
  @media (max-width: 420px) {
    padding: 40px 0;
  }

`
const LeftInner = styled.div`
  display: flex;
  align-items: center;
  color: white;

  & img {
    width: 50%;
    height: 50%;
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    & img {
      display: none;
    }
  }
  @media (max-width: 768px) {
    & img {
      display: none;
    }
  }
  @media (max-width: 420px) {
    & img {
      display: none;
    }
  }

`
const RHS = styled.div`
  flex-basis: 100%;
  padding-left: 60px;
  padding-top: 20px;
  background: #F8F8F8;

  @media (max-width: 768px) {
    padding-left: 30px;
  }
  @media (max-width: 420px) {
    margin-top: 20px;
    padding-left: 30px;
  }

  & ul {
    list-style: none;
    margin-left: 0;
  }
  li {
    font-size: 14px;
  }

  & li::before {
    content: "• ";
    color: #FFC70B;
    font-size: 18px;
  }
`

const ClientHeading = styled.h5`
  text-transform: uppercase;

  &::after {
    content: " ";
    padding-top: 10px;
    border-bottom: 4px solid #FFC70B;
    width: 6%;
    height: 6px;
    display: block;
  }
`

