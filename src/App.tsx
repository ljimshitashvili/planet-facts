import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "./components/Header";
import BurgerMenu from "./components/BurgerMenu";

import bgImage from "./assets/background-stars.svg";

export default function App() {
  const [active, setactive] = useState<boolean>(true);
  console.log(active);

  useEffect(() => {
    const planetInfo = async () => {
      const response = await axios.get("./assets/data.json");
      const data = response.data;
      console.log(data);
    };
    planetInfo;
  }, []);

  return (
    <Background>
      <Header active={active} setactive={setactive} />
      <BurgerMenu active={active} setactive={setactive} />
    </Background>
  );
}

const Background = styled.div`
  background-image: url(${bgImage});
  width: 100%;
  min-height: 100vh;
  max-width: 375px;
`;
