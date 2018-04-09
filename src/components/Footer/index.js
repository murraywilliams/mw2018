import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../../assets/footer-logo.png'
import github from '../../assets/github-icon.png'
import githubHover from '../../assets/github-icon--hover.png'
import linkedin from '../../assets/linked-icon.png'
import linkedinHover from '../../assets/linked-icon--hover.png'


const Footer = () => (
  <Wrapper>
    <Headerbar>
      <Logo>
        <img src={logo} alt=""/>
        <h3>MURRAY WILLIAMS</h3>
      </Logo>
        <Social>
          <a href="https://www.linkedin.com/in/im-murray-williams" target="_blank"><img src={linkedin} alt=""/></a>
          <a href="https://github.com/murraywilliams" target="_blank"><img src={github} alt=""/></a>
        </Social>
      <p>Built with GatsbyJS & continous deployment provided by Netlify.</p>
    </Headerbar>
  </Wrapper>
)

export default Footer

const Wrapper = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  background: #222;


`
const Headerbar = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 20px;
  color: #646464;

  p {
    font-size: 12px;
    text-align: center;
    color: #646464;
    text-transform: uppercase;
  }
`
const Logo = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;

  & img {
    margin-bottom: 0;
    margin-right: 10px;
    width: 40px;
    height: 40px;
  }
  h3 {
    margin-bottom: 0;
  }
`
const Social = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 25px;
    height: 25px;
    margin-bottom: 0;
  }

  & img:first-child {
    margin-right: 10px;
  }
`
