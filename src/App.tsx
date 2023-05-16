import { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import BurgerMenu from "./components/Header/BurgerMenu";

import bgImage from "./assets/background-stars.svg";

import PlanetTypes from "./types";
import Mercury from "./components/Planets/Mercury/Mercury";
import Venus from "./components/Planets/Venus/Venus";
import Earth from "./components/Planets/Earth/Earth";
import Mars from "./components/Planets/Mars/Mars";
import Jupiter from "./components/Planets/Jupiter/Jupiter";
import Saturn from "./components/Planets/Saturn/Saturn";
import Uranus from "./components/Planets/Uranus/Uranus";
import Neptune from "./components/Planets/Neptune/Neptune";

export default function App() {
  const [active, setactive] = useState<boolean>(true);
  const [planetInfo, setPlanetInfo] = useState<PlanetTypes[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPlanetInfo = async () => {
      const response = await fetch("../public/data.json");
      const data = await response.json();
      setPlanetInfo(data);
      setLoading(false);
    };
    getPlanetInfo();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Background>
      <Router>
        <Header active={active} setactive={setactive} />
        <BurgerMenu
          active={active}
          planetInfo={planetInfo}
          setactive={setactive}
        />
        <Routes>
          <Route
            path="/*"
            element={<Mercury planetInfo={planetInfo} />}
          ></Route>
          <Route
            path="venus/*"
            element={<Venus planetInfo={planetInfo} />}
          ></Route>
          <Route
            path="earth/*"
            element={<Earth planetInfo={planetInfo} />}
          ></Route>
          <Route
            path="mars/*"
            element={<Mars planetInfo={planetInfo} />}
          ></Route>
          <Route
            path="jupiter/*"
            element={<Jupiter planetInfo={planetInfo} />}
          ></Route>
          <Route
            path="saturn/*"
            element={<Saturn planetInfo={planetInfo} />}
          ></Route>
          <Route
            path="uranus/*"
            element={<Uranus planetInfo={planetInfo} />}
          ></Route>
          <Route
            path="neptune/*"
            element={<Neptune planetInfo={planetInfo} />}
          ></Route>
        </Routes>
      </Router>
    </Background>
  );
}

const Background = styled.div`
  background-image: url(${bgImage});
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #070724;
`;
