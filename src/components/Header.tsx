import styled from "styled-components";

import burgerIcon from "../assets/icon-hamburger.svg";

interface Props {
  active: boolean;
  setactive: (active: boolean) => void;
}

export default function Header({ setactive, active }: Props) {
  const handleclick = () => {
    setactive(!active);
  };

  return (
    <Background active={active} setactive={setactive}>
      <h1>THE PLANETS</h1>
      <img src={burgerIcon} alt="Burger Menu" onClick={() => handleclick()} />
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
`;
