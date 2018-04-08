import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../../assets/mw-logo.png'

import smartphoneIcon from '../../assets/smartphone-icon.png'
import locationIcon from '../../assets/location-icon.png'
import emailIcon from '../../assets/email-icon.png'

const Contact = () => (
  <Wrapper>
  <Heading>Get in touch</Heading>
  <SplitColumns>
    <LHS>
      <SubText>Have a project you're interested in discussing with me? Drop me a line below, I’d love to talk.</SubText>
      <Phone>
        <PhoneIcon><img src={smartphoneIcon} alt=""/></PhoneIcon>
        <PhoneNumber>+27 (0)63 203 0752</PhoneNumber>
      </Phone>
      <Email>
        <EmailIcon><img src={emailIcon} alt=""/></EmailIcon>
        <EmailAddress>hello@murraywilliams.co.za</EmailAddress>
      </Email>
      <Location>
        <LocationIcon><img src={locationIcon} alt=""/></LocationIcon>
        <Address>Cape Town, South Africa</Address>
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
  font-size: 18px;
  font-weight: 400;
  padding-right: 60px;
  line-height: 2;
`
const SplitColumns = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: row;
`
const LHS = styled.div`
  flex-basis: 100%;
`
const Phone = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
`
const PhoneIcon = styled.div`
  width: 20px;
  margin-right: 10px;

  & img {
    margin-bottom: 0;
  }
`
const PhoneNumber = styled.div`

`
const Email = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
`
const EmailIcon = styled.div`
  width: 20px;
  margin-right: 10px;
  margin-top: 20px;

  & img {
    margin-bottom: 0;
  }
`
const EmailAddress = styled.div`

`
const Location = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
`
const LocationIcon = styled.div`
  width: 20px;
  margin-right: 10px;
  margin-top: 20px;

  & img {
    margin-bottom: 0;
  }
`
const Address = styled.div`

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

