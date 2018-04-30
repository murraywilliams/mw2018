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
              <span>Location</span>
              <p>Cape Town</p>
            </Item>
            <Item>
              <span>Phone</span>
              <p>063 203 0752</p>
            </Item>
            <Item>
              <span>Web</span>
              <p>www.murraywilliams.co.za</p>
            </Item>
            <Item>
              <span>Email</span>
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
  align-content: center;
  width: 100%;
  margin-bottom: 80px;
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
  width: 100%;
  margin-top: 25%;
  padding-right: 5%;
`
const Contact = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #979899;
`
const Item = styled.div`
  font-size: 12px;
  color: #979899;
  margin-right: 50px;
  padding-top: 20px;

  span {
    font-weight: 600;
    font-size: 14px;
  }

  p {
    margin-bottom: 0;
  }
`