import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { increase, decrease } from '../modules/counter';

function RightComponent3() {
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  return (
    <Wrapper>
      <H2>Right3</H2>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </Wrapper>
  );
}

export default RightComponent3;

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
