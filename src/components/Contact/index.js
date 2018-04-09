import React, { Component, PropTypes } from 'react';
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../../assets/mw-logo.png'

import smartphoneIcon from '../../assets/smartphone-icon.png'
import locationIcon from '../../assets/location-icon.png'
import emailIcon from '../../assets/email-icon.png'

class Contact extends Component {
  state = {
    email: '',
    success: false
  }

  encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch("/" , {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        this.setState({
          success: true
        });
      })
      .catch(error => alert(error));
  }
  render() {
    const success = this.state.success;
    const renderForm = !success ? (
      <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" placeholder="Enter your name"/>
        <input type="text" placeholder="Enter your contact number"/>
        <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter your email"/>
        <input type="hidden" name="bot-field" />
        <input type="submit" value="Get In Touch" />
      </form>
    ) : (
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          fontSize: '12px',
          color: '#64CCC9'
        }}>
        Your message sent successfully!
        </div>
    )

    return (
      <Wrapper>
      <Heading>Get in touch</Heading>
      <SplitColumns>
        <LHS>
          <SubText>Have a project you're interested in discussing with me? Drop me a line below, I’d love to talk.</SubText>
          <Phone>
            <PhoneIcon><img src={smartphoneIcon} alt=""/></PhoneIcon>
            <PhoneNumber><a href="tel:+27632030752">+27 (0)63 203 0752</a></PhoneNumber>
          </Phone>
          <Email>
            <EmailIcon><img src={emailIcon} alt=""/></EmailIcon>
            <EmailAddress><a href="mailto:hello@murraywilliams.co.za" >hello@murraywilliams.co.za</a></EmailAddress>
          </Email>
          <Location>
            <LocationIcon><img src={locationIcon} alt=""/></LocationIcon>
            <Address>Cape Town, South Africa</Address>
          </Location>
        </LHS>
        <RHS>
          <div id="contact">
            {renderForm}
          </div>
        </RHS>
      </SplitColumns>
      </Wrapper>
    );
  }
}

export default Contact;

// const Contact = () => (
//   <Wrapper>
//   <Heading>Get in touch</Heading>
//   <SplitColumns>
//     <LHS>
//       <SubText>Have a project you're interested in discussing with me? Drop me a line below, I’d love to talk.</SubText>
//       <Phone>
//         <PhoneIcon><img src={smartphoneIcon} alt=""/></PhoneIcon>
//         <PhoneNumber><a href="tel:+27632030752">+27 (0)63 203 0752</a></PhoneNumber>
//       </Phone>
//       <Email>
//         <EmailIcon><img src={emailIcon} alt=""/></EmailIcon>
//         <EmailAddress><a href="mailto:hello@murraywilliams.co.za" >hello@murraywilliams.co.za</a></EmailAddress>
//       </Email>
//       <Location>
//         <LocationIcon><img src={locationIcon} alt=""/></LocationIcon>
//         <Address>Cape Town, South Africa</Address>
//       </Location>
//     </LHS>
//     <RHS>
//       <div id="contact">

//       </div>
//     </RHS>
//   </SplitColumns>
//   </Wrapper>
// )

// export default Contact

const Wrapper = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  margin-bottom: 80px;
  color: #272727;
  margin-top: 80px;

  @media (max-width: 768px) {
    padding-left: 5%;
    padding-right: 5%;
  }
  @media (max-width: 420px) {
    padding-left: 5%;
    padding-right: 5%;
  }
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

  @media (max-width: 420px) {
    padding-right: 0;
  }
`
const SplitColumns = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: row;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`
const LHS = styled.div`
  flex-basis: 100%;

  @media (max-width: 420px) {
    margin-bottom: 20px;
  }
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
  a {
    text-decoration: none;
    color: #272727;

    &:hover {
      border-bottom: 2px solid #FFC70B;
    }
  }
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
  a {
    text-decoration: none;
    color: #272727;

    &:hover {
      border-bottom: 2px solid #FFC70B;
    }
  }
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

  @media (max-width: 420px) {
    text-align: center;
  }

  & input {
    margin: 10px 0;
    padding: 10px 0;
    width: 80%;
    border: 1px solid #E0E0E0;
    background-image: none !important;

    @media (max-width: 420px) {
      width: 100%;
    }
    @media (max-width: 320px) {
      width: 100%;
    }
  }

  & input[type=submit] {
    background: #FFC70B;
    border: none;
    width: 50%

    @media (max-width: 768px) {
      width: 80%;
    }
    @media (max-width: 420px) {
      width: 80%;
    }

    @media (max-width: 320px) {
      width: 100%;
    }
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

