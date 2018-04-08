import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import About from '../components/About/index'

const IndexPage = () => (
  <div>
    <Banner>
      <Title>freelance <br/>developer</Title>
      <Subtitle>As a designer and developer, I understand that perfect user interface should look good and work even better. Alongside my clients, I uncover problems and solve them. In short, I create bolder online experiences.</Subtitle>
    </Banner>
    <About />
  </div>
)

export default IndexPage;

const Banner = styled.div`
  background: #272727;
  padding: 40px 10%;
`
const Title = styled.h2`
  font-size: 80px;
  font-weight: 900;
  text-transform: uppercase;
  color: white;
  border-bottom: 8px solid #FFC70B;
  width: 60%;
  padding-bottom: 40px;
  line-height: 0.9;
`
const Subtitle = styled.p`
  font-size: 16px;
  width: 60%;
  color: white;
  line-height: 2;
  letter-spacing: 4px;
`
