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
    </Headerbar>
  </Wrapper>
)

export default Header

const Wrapper = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  background: #272727;
`
const Headerbar = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`
const Logo = styled.div`

  & img {
    margin-bottom: 0;
  }
`
