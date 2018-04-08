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
`
const SubText = styled.h4`
  font-size: 22px;
  font-weight: 400;
  padding: 0 30px;
  line-height: 2.2;
  text-align: left;
  margin-bottom: 0;
`
const SplitColumns = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: row;
`
const LHS = styled.div`
  flex-basis: 100%;
  background: #272727;
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

`
const RHS = styled.div`
  flex-basis: 100%;
  padding-left: 60px;
  padding-top: 20px;
  background: #F8F8F8;

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

