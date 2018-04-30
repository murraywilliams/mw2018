import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const NotFoundPage = () => (
  <Wrapper>
    <Inner>
      <h1>Even the things we love break sometimes.</h1>
      <p>You just hit a page that doesn&#39;t exist... the sadness.</p>
      <Button><Link to="/">Take me back to saftey</Link></Button>
    </Inner>
  </Wrapper>
)

export default NotFoundPage;

const Wrapper = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  height: calc(100vh - 177px);
  display: flex;
  align-items: center;
  justify-content: center;
`
const Inner = styled.div`
  text-align: center;
`
const Button = styled.div`
  padding: 15px;
  background: #FFC70B;
  text-transform: uppercase;
  width: 45%;
  font-size: 20px;
  font-weight: 900;
  margin: 0 auto;
  cursor: pointer;
  text-decoration: none;

  a {
    text-decoration: none;
    color: #272727;
  }
`
