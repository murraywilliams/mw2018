import React from 'react';
import styled from 'styled-components';

const Intro = () => {
  return (
    <Wrapper>
      <Inner>
        <SectionTitle>
          <h2>Intro</h2>
          <p>What I am all about.</p>
        </SectionTitle>
        <SectionContent>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Nulla vitae mauris non felis mollis faucibus.</p>

          <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis.</p>
        </SectionContent>
      </Inner>
    </Wrapper>
  );
};

export default Intro;

const Wrapper = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  align-content: center;
  width: 100%;
  background: #2d2e2e;
`
const Inner = styled.div`
  display: flex;
  justify-contents: center;
  align-items: space-between;
  padding-top: 80px;
  padding-bottom: 80px;
  color: #979899;
`
const SectionTitle = styled.div`
  width: 30%;
`
const SectionContent = styled.div`
  width: 70%;
`