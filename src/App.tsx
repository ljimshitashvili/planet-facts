import { useState } from "react";
import styled from "styled-components";

import Header from "./components/Header";

import bgImage from "./assets/background-stars.svg";

export default function App() {
  return (
    <Background>
      <Header />
    </Background>
  );
}

const Background = styled.div`
  background-image: url(${bgImage});
  width: 100%;
  min-height: 100vh;
`;
