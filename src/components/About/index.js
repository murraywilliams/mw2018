import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../../assets/mw-logo.png'

const About = () => (
  <Wrapper>
  <Heading>About me</Heading>
    <Inner>
      <LHS>
      <AboutSub>I’ve been designing and building websites for years.</AboutSub>
      <AboutDescription>I have a vast set of skills that range from design & development through to marketing and SEO. I have over 10 years of expreince in the digital industry and have worked with big global companies around the world. I don’t enjoy digital I love it and ensure that I am always reading & researching new technologies.</AboutDescription>
      <ContactButton>Get in touch</ContactButton>
      </LHS>
      <RHS>
        <SkillWrapper>
          <Skill>
            <SkillTitle>development</SkillTitle>
            <Description>With my skills in web technologies, I can create flexible, scalable sites/applications that look good across devices.</Description>
          </Skill>
          <Skill>
            <SkillTitle>design</SkillTitle>
            <Description>My focus is always on my client’s customers ensuring that my designs have purpose.</Description>
          </Skill>
          <Skill>
            <SkillTitle>e-commerce</SkillTitle>
            <Description>I have setup and run mutliple online e-commerce including beach gear, hair equipment, food, peronal care and more.</Description>
          </Skill>
          <Skill>
            <SkillTitle>seo</SkillTitle>
            <Description>Competition online is fierce and no successful site can be without effective SEO. Let me help you get more customers.</Description>
          </Skill>
          </SkillWrapper>
      </RHS>
    </Inner>
  </Wrapper>
)

export default About

const Wrapper = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  color: #272727;
  margin-top: 40px;
`
const Heading = styled.h2`
  font-size: 40px;
  font-weight: 900;
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
const Inner = styled.div`
  display: flex;
`
const LHS = styled.div`
  flex-basis: 100%;
  padding-right: 60px;
`
const AboutSub = styled.h4`
  font-size: 18px;
  font-weight: 400;
`
const AboutDescription = styled.p`
  font-size: 16px;
  line-height: 2;
`
const ContactButton = styled.div`
  padding: 15px;
  border: 4px solid #272727;
  text-transform: uppercase;
  width: 200px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`
const RHS = styled.div`
  flex-basis: 100%;
`
const SkillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Skill = styled.div`
  width: 50%;
  padding: 0 10px;
`
const SkillTitle = styled.h5`
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
const Description = styled.p`
  font-size: 14px;

`
