import React from 'react';
import styled from 'styled-components';
import LeftComponent2 from './LeftComponent2';

function LeftComponent1() {
  return (
    <Wrapper>
      <H2>Left1</H2>
      <LeftComponent2 />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50%;
  height: 300px;
  float: left;
  border: 1px solid;
  box-sizing: border-box;
`;
const H2 = styled.h2`
  text-align: center;
`;

export default LeftComponent1;
