import styled from "styled-components";
import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Overview from "./Overview";
import PlanetTypes from "../../../types";
import Structure from "./Structure";
import Surface from "./Surface";

interface Props {
  planetInfo: PlanetTypes[];
}

export default function Jupiter({ planetInfo }: Props) {
  const [path, setpath] = useState<string>("");

  return (
    <Container>
      <ButtonContainer path={path}>
        <Link to="">overview</Link>
        <Link to="structure">structure</Link>
        <Link to="surface">surface</Link>
        <div className="slider"></div>
      </ButtonContainer>
      <Routes>
        <Route
          path="/"
          element={<Overview planetInfo={planetInfo} setpath={setpath} />}
        ></Route>
        <Route
          path="/structure"
          element={<Structure planetInfo={planetInfo} setpath={setpath} />}
        ></Route>
        <Route
          path="/surface"
          element={<Surface planetInfo={planetInfo} setpath={setpath} />}
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
  max-width: 375px;
`;

const ButtonContainer = styled.div<{ path: string }>`
  width: 100%;
  max-width: 375px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;

  .slider {
    position: absolute;
    width: 80px;
    height: 4px;
    background: #419ebb;
    bottom: 0;
    transition: all 0.2s;
    left: ${(p) =>
      p.path === "/jupiter"
        ? "15px"
        : p.path.includes("/structure")
        ? "150px"
        : p.path.includes("/surface")
        ? "290px"
        : ""};
  }

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
