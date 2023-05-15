import styled from "styled-components";

import arrow from "../assets/icon-source.svg";

interface Props {
  name?: string;
  color: string;
}

export default function Planet({ name, color }: Props) {
  return (
    <Container color={color}>
      <div>
        <div className="circle"></div>
        <p>{name}</p>
      </div>
      <img src={arrow} alt="Source Icon" />
    </Container>
  );
}

const Container = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 22px 24px;

  div {
    display: flex;
    align-items: center;
    gap: 25px;

    .circle {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${(p) => p.color};
    }

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
`;
