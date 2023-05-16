import styled from "styled-components";
import { Link } from "react-router-dom";

import burgerIcon from "../../assets/icon-hamburger.svg";
import PlanetTypes from "../../types";

interface Props {
  active: boolean;
  setactive: (active: boolean) => void;
  planetInfo?: PlanetTypes[];
}

export default function Header({ setactive, active, planetInfo }: Props) {
  const handleclick = () => {
    setactive(!active);
  };

  console.log(planetInfo);

  return (
    <Background active={active} setactive={setactive}>
      <h1>THE PLANETS</h1>
      <img src={burgerIcon} alt="Burger Menu" onClick={() => handleclick()} />
      <ButtonContainer>
        {planetInfo?.map((planet, index) => (
          <Link
            key={index}
            to={planet.name === "Mercury" ? "/" : planet.name.toLowerCase()}
          >
            {planet.name}
          </Link>
        ))}
      </ButtonContainer>
      <hr />
    </Background>
  );
}

const Background = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  position: relative;
  width: 100%;
  max-width: 375px;

  h1 {
    font-family: "Antonio";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -1.05px;
    text-transform: uppercase;
    color: #ffffff;
  }

  hr {
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #ffffff;
    opacity: 0.2;
    border: none;
    bottom: 0;
    left: 0;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 768px;
    gap: 39px;

    img {
      display: none;
    }

    hr {
      left: 0;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    max-width: 1440px;
    justify-content: space-between;
    padding: 22px 32px;

    h1 {
      width: 120px;
    }

    img {
      display: none;
    }

    hr {
      left: 0;
    }
  }
`;

const ButtonContainer = styled.div`
  display: none;

  .shadow {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;
      font-family: "League Spartan";
      font-style: normal;
      font-weight: 700;
      font-size: 11px;
      line-height: 25px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #ffffff;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    width: 60%;
    justify-content: end;
    align-items: center;
    gap: 33px;
    position: relative;

    a {
      text-decoration: none;
      font-family: "League Spartan";
      font-style: normal;
      font-weight: 700;
      font-size: 11px;
      line-height: 25px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #ffffff;
      opacity: 0.75;
    }

    a:hover {
      opacity: 1;
    }
  }
`;
