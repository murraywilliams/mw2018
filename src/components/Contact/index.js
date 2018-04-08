import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../../assets/mw-logo.png'

const Contact = () => (
  <Wrapper>
  <Heading>Get in touch</Heading>
  <SubText>Have a project you're interested in discussing with me? Drop me a line below, I’d love to talk.</SubText>
  <SplitColumns>
    <LHS>
      <Number>
        +27 (0)63 203 0752
      </Number>
      <Email>
        hello@murraywilliams.co.za
      </Email>
      <Location>
        Location: Cape Town
      </Location>
    </LHS>
    <RHS>
      <form>
        <input type="text" placeholder="Enter your name"/>
        <input type="text" placeholder="Enter your contact number"/>
        <input type="email" placeholder="Enter your email"/>
        <input type="submit" value="Get In Touch" />
      </form>
    </RHS>
  </SplitColumns>
  </Wrapper>
)

export default Contact

const Wrapper = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  color: #272727;
  margin-top: 80px;
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
const SubText = styled.h4`
  font-size: 16px;
  font-weight: 400;
`
const SplitColumns = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: row;
`
const LHS = styled.div`
  flex-basis: 100%;
`
const Number = styled.p`
  font-weight: 600;
`
const Email = styled.p`
  font-weight: 600;
`
const Location = styled.p`
  font-weight: 600;
`
const AddressDetails = styled.div`

`
const RHS = styled.div`
flex-basis: 100%;
  display: flex;
  flex-direction: column;

  & input {
    margin: 10px;
    padding: 10px 0;
    width: 80%;
    background-image: none !important;
  }

  & input[type=submit] {
    background: #FFC70B;
    border: none;
    width: 50%
  }
  & input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #ADADAD;
    font-size: 12px;
    padding-left: 5px;
  }
  & input::-moz-placeholder { /* Firefox 19+ */
    color: #CBCBCB;
  }
  & input:-ms-input-placeholder { /* IE 10+ */
    color: #CBCBCB;
  }
  & input:-moz-placeholder { /* Firefox 18- */
    color: #CBCBCB;
  }
`

