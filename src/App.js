import './App.css';
import React from 'react';
import styled from 'styled-components';
import LeftComponent1 from './components/LeftComponent1';
import RightComponent1 from './components/RightComponent1';

function App() {
  return (
    <Wrapper>
      <H2>Root</H2>
      <LeftComponent1 />
      <RightComponent1 />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 373px;
  border: 1px solid;
  box-sizing: border-box;
`;
const H2 = styled.h2`
  text-align: center;
`;

export default App;
