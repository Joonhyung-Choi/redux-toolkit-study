import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function LeftComponent3() {
  const number = useSelector((state) => state.counter);

  return (
    <Wrapper>
      <H2>Left3</H2>
      <h3>{number}</h3>
    </Wrapper>
  );
}

export default LeftComponent3;

const Wrapper = styled.div`
  width: 90%;
  height: 60%;
  border: 1px solid;
  box-sizing: border-box;
  margin: auto;
`;

const H2 = styled.h2`
  text-align: center;
`;
