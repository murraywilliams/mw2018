import React from 'react';
import styled from 'styled-components';

import profilePic from '../../assets/Resume/oval-profile-pic.png'

const Header = () => {
  return (
    <Wrapper>
      <Inner>
        <Banner>
          <ProfilePicture>
            <img src={profilePic} alt=""/>
          </ProfilePicture>
          <Title>
            <h1><span>murray</span><br/> Williams</h1>
            <h4>UX Designer & Developer</h4>
          </Title>
        </Banner>
        <MainContents>
          <Contact>
            <Item>
              <p>Location</p>
              <p>Sunningdale, Cape Town</p>
            </Item>
            <Item>
              <p>Phone</p>
              <p>+27 (0)63 203 0752</p>
            </Item>
            <Item>
              <p>Web</p>
              <p>www.murraywilliams.co.za</p>
            </Item>
            <Item>
              <p>Email</p>
              <p>hello@murraywilliams.co.za</p>
            </Item>
          </Contact>
        </MainContents>
      </Inner>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  background: #272727;
  height: 100vh;
  align-content: center;
  width: 100%;
`
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: space-between;
  padding-top: 20%;
`
const Banner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Title = styled.div`
  width: 70%;
  align-self: center;

  h1 {
    font-size: 80px;
    font-weight: 900;
    text-transform: uppercase;
    color: #FFC70B;
    padding-bottom: 0;
    margin-bottom: 20px;
    line-height: 0.9;

    span {
      color: #979899;
      font-weight: 300;
      font-size: 80px;
      text-transform: none;
    }
  }
  h4 {
    color: #979899;
    font-weight: 300;
    font-size: 22px;
    letter-spacing: 4px;
  }
`
const ProfilePicture = styled.div`
  width: 30%;
  img {
    width: 220px;
  }
`
const MainContents = styled.div`
  width: 85%;
  margin-top: 25%;
`
const Contact = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Item = styled.div`
  font-size: 12px;

  p {
    margin-bottom: 0;
  }
`