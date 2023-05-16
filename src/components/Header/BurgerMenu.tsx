import styled from "styled-components";
import { Link } from "react-router-dom";

import arrow from "../../assets/icon-source.svg";

import PlanetTypes from "../../types";

interface Props {
  active: boolean;
  planetInfo?: PlanetTypes[];
  key?: number;
  source?: PlanetTypes;
  setactive: (active: boolean) => void;
}

export default function BurgerMenu({ active, planetInfo, setactive }: Props) {
  const handleClick = () => {
    setactive(!active);
  };
  return (
    <Background active={active} setactive={setactive}>
      {planetInfo?.map((planet, index) => (
        <Link
          to={planet.name === "Mercury" ? "/" : planet.name.toLowerCase()}
          key={index}
          className="planet"
          onClick={() => handleClick()}
        >
          <div>
            <Circle className="circle" name={planet.name} />
            <p>{planet.name}</p>
          </div>
          <a href={planet.overview.source}>
            <img src={arrow} alt="Source Icon" />
          </a>
          <Hr name={planet.name} />
        </Link>
      ))}
    </Background>
  );
}

const Background = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: ${(p) => (p.active ? "60px" : "60px")};
  left: ${(p) => (p.active ? "100%" : "0")};
  position: ${(p) => (p.active ? "fixed" : "absolute")};
  width: 100%;
  transition: all 0.2s;
  background: #070724;
  flex: 1;
  height: 100%;
  z-index: 1;

  .planet {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 22px 24px;
    margin-bottom: ${(p) => (p.key === 7 ? "none" : "1px")};
    position: relative;
    text-decoration: none;

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
  width: 90%;
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
