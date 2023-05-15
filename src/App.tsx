import { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import BurgerMenu from "./components/BurgerMenu";

import bgImage from "./assets/background-stars.svg";

import PlanetTypes from "./types";

export default function App() {
  const [active, setactive] = useState<boolean>(true);
  const [planetInfo, setPlanetInfo] = useState<PlanetTypes[] | []>([]);

  useEffect(() => {
    const getPlanetInfo = async () => {
      const response = await fetch("../public/data.json");
      const data = await response.json();
      setPlanetInfo(data);
    };
    getPlanetInfo();
  }, []);
  console.log(planetInfo);

  return (
    <Background active={active}>
      <Header active={active} setactive={setactive} />
      <BurgerMenu active={active} planetInfo={planetInfo} />
    </Background>
  );
}

const Background = styled.div<{ active: boolean }>`
  background-image: url(${bgImage});
  width: 100%;
  min-height: 100vh;
  max-width: 375px;
`;
