import styled from "styled-components";

import arrow from "../assets/icon-source.svg";

import PlanetTypes from "../types";

interface Props {
  active: boolean;
  planetInfo?: PlanetTypes[];
  key?: number;
  source?: PlanetTypes;
}

export default function BurgerMenu({ active, planetInfo }: Props) {
  return (
    <Background active={active}>
      {planetInfo?.map((planet, index) => (
        <div key={index} className="planet">
          <div>
            <Circle className="circle" name={planet.name} />
            <p>{planet.name}</p>
          </div>
          <a href={planet.overview.source}>
            <img src={arrow} alt="Source Icon" />
          </a>
          <Hr name={planet.name} />
        </div>
      ))}
    </Background>
  );
}

const Background = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  left: ${(p) => (p.active ? "100%" : "0")};
  position: ${(p) => (p.active ? "fixed" : "absolute")};
  width: 100%;
  transition: all 0.2s;
  background: #070724;
  flex: 1;
  min-height: 89.8%;

  .planet {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 22px 24px;
    margin-bottom: ${(p) => (p.key === 7 ? "none" : "1px")};
    position: relative;

    div {
      display: flex;
      align-items: center;
      gap: 25px;

      p {
        font-family: "League Spartan";
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 25px;
        text-align: center;
        letter-spacing: 1.36364px;
        text-transform: uppercase;
        color: #ffffff;
      }
    }
  }
`;

const Hr = styled.hr<{ name: string }>`
  position: absolute;
  width: 327px;
  border: none;
  height: 1px;
  background: #ffffff;
  opacity: 10%;
  bottom: 0;
  display: ${(p) => (p.name === "Neptune" ? "none" : "block")};
`;

const Circle = styled.div<{ name: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(p) =>
    p.name === "Mercury"
      ? "#DEF4FC"
      : p.name === "Venus"
      ? "#F7CC7F"
      : p.name === "Earth"
      ? "#545BFE"
      : p.name === "Mars"
      ? "#FF6A45"
      : p.name === "Jupiter"
      ? "#ECAD7A"
      : p.name === "Saturn"
      ? "#FCCB6B"
      : p.name === "Uranus"
      ? "#65F0D5"
      : p.name === "Neptune"
      ? "#497EFA"
      : ""};
`;
