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
        <Link to="" className="over">
          <span>01</span>overview
        </Link>
        <Link to="structure" className="struc">
          <span>02</span>structure
        </Link>
        <Link to="surface" className="surf">
          <span>03</span>surface
        </Link>
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

  @media (min-width: 768px) {
    max-width: 768px;
    position: relative;
  }

  @media (min-width: 1024px) {
    max-width: 1440px;
    position: relative;
  }
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
    background: #d83a34;
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

    span {
      display: none;
    }
  }

  @media (min-width: 768px) {
    position: absolute;
    right: 0;
    top: 516px;
    flex-direction: column;
    border: none;
    gap: 16px;

    .slider {
      display: none;
    }

    a {
      width: 281px;
      height: 40px;
      padding: 8px 20px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      display: flex;
      gap: 17px;
      align-items: center;
      font-family: "League Spartan";
      font-style: normal;
      font-weight: 700;
      font-size: 9px;
      line-height: 25px;
      letter-spacing: 1.92857px;
      text-transform: uppercase;
      color: #ffffff;

      span {
        display: block;
        opacity: 0.5;
        font-family: "League Spartan";
        font-style: normal;
        font-weight: 700;
        font-size: 9px;
        line-height: 25px;
        letter-spacing: 1.92857px;
        text-transform: uppercase;
        color: #ffffff;
      }
    }

    .over {
      background-color: ${(p) =>
        p.path === "/jupiter" ? "#D83A34" : "transparent"};
    }

    .struc {
      background-color: ${(p) =>
        p.path.includes("structure") ? "#D83A34" : "transparent"};
    }

    .surf {
      background-color: ${(p) =>
        p.path.includes("surface") ? "#D83A34" : "transparent"};
    }
  }

  @media (min-width: 1024px) {
    top: 450px;
    right: 100px;
    z-index: 1;

    a {
      width: 350px;
      height: 48px;
      padding: 12px 28px;
      gap: 28px;
      font-size: 12px;
      letter-spacing: 2.57143px;

      span {
        font-size: 12px;
        letter-spacing: 2.57143px;
      }
    }

    .over {
      background-color: ${(p) =>
        p.path === "/jupiter" ? "#D83A34" : "transparent"};
    }

    .struc {
      background-color: ${(p) =>
        p.path.includes("structure") ? "#D83A34" : "transparent"};
    }

    .surf {
      background-color: ${(p) =>
        p.path.includes("surface") ? "#D83A34" : "transparent"};
    }

    .over:hover {
      ${(p) =>
        p.path === "/jupiter"
          ? ""
          : "background-color: rgba(216, 216, 216, 0.2)"};
    }

    .struc:hover {
      ${(p) =>
        p.path.includes("structure")
          ? ""
          : "background-color: rgba(216, 216, 216, 0.2)"};
    }

    .surf:hover {
      ${(p) =>
        p.path.includes("surface")
          ? ""
          : "background-color: rgba(216, 216, 216, 0.2)"};
    }
  }
`;
