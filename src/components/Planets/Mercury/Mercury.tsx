import styled from "styled-components";
import { Route, Routes, Link } from "react-router-dom";
import Overview from "./Overview";
import PlanetTypes from "../../../types";
import Structure from "./Structure";
import Surface from "./Surface";

interface Props {
  planetInfo: PlanetTypes[];
}

export default function Mercury({ planetInfo }: Props) {
  return (
    <Container>
      <ButtonContainer>
        <Link to="/">overview</Link>
        <Link to="structure">structure</Link>
        <Link to="surface">surface</Link>
      </ButtonContainer>
      <Routes>
        <Route path="/" element={<Overview planetInfo={planetInfo} />}></Route>
        <Route
          path="structure"
          element={<Structure planetInfo={planetInfo} />}
        ></Route>
        <Route
          path="surface"
          element={<Surface planetInfo={planetInfo} />}
        ></Route>
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ButtonContainer = styled.div`
  width: 100%;
  max-width: 375px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    font-family: "League Spartan";
    font-style: normal;
    font-weight: 700;
    font-size: 9px;
    line-height: 10px;
    text-align: center;
    letter-spacing: 1.92857px;
    text-transform: uppercase;
    color: #ffffff;
  }
`;
