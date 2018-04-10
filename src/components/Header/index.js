import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../../assets/mw-logo.png'

const Header = () => (
  <Wrapper>
    <Headerbar>
      <Logo>
        <Link to="/">
          <img src={logo} alt=""/>
        </Link>
      </Logo>
      <CTA>
        <p>Let's work together <span><Link to="/#contact">get in touch</Link></span></p>
      </CTA>
    </Headerbar>
  </Wrapper>
)

export default Header

const Wrapper = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 20px;
  background: #272727;

  @media (max-width: 768px) {
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 10px;
  }
  @media (max-width: 420px) {
    padding-left: 5%;
    padding-right: 5%;
  }
  @media (max-width: 320px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`
const Headerbar = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  color: white;
  align-items: center;
  justify-content: space-between;
`
const Logo = styled.div`

  & img {
    margin-bottom: 0;
  }
`
const CTA = styled.div`
  font-size: 12px;

  p {
    margin-bottom: 0;

    @media (max-width: 320px) {
      display: none;
    }
  }

  span {
    padding: 5px;
    margin-left: 5px;

    text-transform: uppercase;
    border: 2px solid #FFC70B;
    cursor: pointer;

    a {
      text-decoration: none;
      color: #FFC70B;
    }
  }
`
