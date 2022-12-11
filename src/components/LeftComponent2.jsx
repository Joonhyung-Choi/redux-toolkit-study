import React from 'react';
import styled from 'styled-components';
import LeftComponent3 from './LeftComponent3';

function LeftComponent2() {
  return (
    <Wrapper>
      <H2>Left2</H2>
      <LeftComponent3 />
    </Wrapper>
  );
}

export default LeftComponent2;

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
