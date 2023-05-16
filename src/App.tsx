import { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import BurgerMenu from "./Components/Header/BurgerMenu";

import bgImage from "./assets/background-stars.svg";

import PlanetTypes from "./types";
import Mercury from "./Components/planets/Mercury/Mercury";
import Venus from "./Components/planets/venus/Venus";
import Earth from "./Components/planets/Earth/Earth";
import Mars from "./Components/planets/mars/Mars";
import Jupiter from "./Components/planets/Jupiter/Jupiter";
import Saturn from "./Components/planets/Saturn/Saturn";
import Uranus from "./Components/planets/Uranus/Uranus";
import Neptune from "./Components/planets/Neptune/Neptune";

export default function App() {
  const [active, setactive] = useState<boolean>(true);
  const [planetInfo, setPlanetInfo] = useState<PlanetTypes[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPlanetInfo = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/ljimshitashvili/planet-facts/master/public/data.json"
      );
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
