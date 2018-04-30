import React from 'react';
import styled from 'styled-components';

import Header from '../components/Resume/Header'
import Intro from '../components/Resume/Intro'

const Resume = () => {
  return (
    <Wrapper>
      <Header />
      <Intro />
    </Wrapper>
  );
};

export default Resume;

const Wrapper = styled.div`
  height: 100%;
  background: #272727;
`