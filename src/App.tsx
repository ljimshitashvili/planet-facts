import { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import BurgerMenu from "./components/Header/BurgerMenu";

import bgImage from "./assets/background-stars.svg";

import PlanetTypes from "./types";
import Mercury from "./components/Planets/Mercury/Mercury";

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
      <Router>
        <Header active={active} setactive={setactive} />
        <BurgerMenu active={active} planetInfo={planetInfo} />
        <Routes>
          <Route
            path="/*"
            element={<Mercury planetInfo={planetInfo} />}
          ></Route>
        </Routes>
      </Router>
    </Background>
  );
}

const Background = styled.div<{ active: boolean }>`
  background-image: url(${bgImage});
  width: 100%;
  min-height: 100vh;
  max-width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
