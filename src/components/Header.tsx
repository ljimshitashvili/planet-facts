import styled from "styled-components";

import burgerIcon from "../assets/icon-hamburger.svg";

export default function Header() {
  return (
    <Background>
      <h1>THE PLANETS</h1>
      <img src={burgerIcon} alt="Burger Menu" />
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
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
`;
