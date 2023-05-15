import styled from "styled-components";

import Planet from "./Planet";

interface Props {
  active: boolean;
  setactive: (active: boolean) => void;
}

export default function BurgerMenu({ active, setactive }: Props) {
  return (
    <Background active={active} setactive={setactive}>
      <Planet name={"mercury"} color={"#DEF4FC"} />
      <Planet name={"venus"} color={"#F7CC7F"} />
      <Planet name={"earth"} color={"#545BFE"} />
      <Planet name={"mars"} color={"#FF6A45"} />
      <Planet name={"jupiter"} color={"#ECAD7A"} />
      <Planet name={"saturn"} color={"#FCCB6B"} />
      <Planet name={"uranus"} color={"#65F0D5"} />
      <Planet name={"neptune"} color={"#497EFA"} />
    </Background>
  );
}

const Background = styled.div<Props>`
  flex-direction: column;
  align-items: center;
  left: ${(p) => (p.active ? "100%" : "0")};
  position: ${(p) => (p.active ? "fixed" : "absolute")};
  width: 100%;
  transition: all 0.2s;
`;
