import React from 'react';
import styled from 'styled-components';
import RightComponent2 from './RightComponent2';

function RightComponent1() {
  return (
    <Wrapper>
      <H2>Right1</H2>
      <RightComponent2 />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50%;
  height: 300px;
  float: Right;
  border: 1px solid;
  box-sizing: border-box;
`;
const H2 = styled.h2`
  text-align: center;
`;

export default RightComponent1;
