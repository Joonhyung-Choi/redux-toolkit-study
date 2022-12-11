import React from 'react';
import styled from 'styled-components';
import RightComponent3 from './RightComponent3';

function RightComponent2() {
  return (
    <Wrapper>
      <H2>Right2</H2>
      <RightComponent3 />
    </Wrapper>
  );
}

export default RightComponent2;

const Wrapper = styled.div`
  width: 90%;
  height: 70%;
  border: 1px solid;
  box-sizing: border-box;
  margin: auto;
`;

const H2 = styled.h2`
  text-align: center;
`;
