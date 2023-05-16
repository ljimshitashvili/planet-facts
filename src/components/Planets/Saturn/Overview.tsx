import styled from "styled-components";
import PlanetIcon from "../../../assets/planet-saturn.svg";
import PlanetTypes from "../../../types";
import arrow from "../../../assets/icon-source.svg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

interface Props {
  planetInfo: PlanetTypes[];
  setpath: (path: string) => void;
}

export default function Overview({ planetInfo, setpath }: Props) {
  const location = useLocation().pathname;
  useEffect(() => {
    setpath(location);
  }, [location]);

  const planet = planetInfo?.[5];
  return (
    <Container>
      <img src={PlanetIcon} alt="saturn" />
      <h1>{planet.name}</h1>
      <p>{planet.overview.content}</p>
      <div>
        <h2>
          Source: <a href={planet.overview.source}>Wikipedia</a>
        </h2>
        <img src={arrow} alt="Source Icon" />
      </div>
      <div className="infosContainer">
        <div className="infos">
          <h3>ROTATION TIME</h3>
          <h4>{planet.rotation}</h4>
        </div>
        <div className="infos">
          <h3>REVOLUTION TIME</h3>
          <h4>{planet.revolution}</h4>
        </div>
        <div className="infos">
          <h3>RADIUS</h3>
          <h4>{planet.radius}</h4>
        </div>
        <div className="infos">
          <h3>AVERAGE TEMP.</h3>
          <h4>{planet.temperature}</h4>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;

  img {
    width: 111px;
    height: 111px;
    margin-top: 95px;
  }

  h1 {
    font-family: "Antonio";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 52px;
    margin-top: 98px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }

  p {
    font-family: "League Spartan";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
    margin-top: 16px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 32px;

    h2 {
      font-family: "League Spartan";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 25px;
      color: #ffffff;
      mix-blend-mode: normal;
      opacity: 0.5;

      a {
        color: #ffffff;
        font-weight: 700;
        text-decoration: underline;
      }
    }

    img {
      width: 12px;
      height: 12px;
      margin: 0;
    }
  }

  .infosContainer {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    margin-bottom: 100px;

    .infos {
      width: 100%;
      border: 1px solid rgba(255, 255, 255, 0.5);
      padding: 16px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0;

      h3 {
        font-family: "Spartan";
        font-style: normal;
        font-weight: 700;
        font-size: 8px;
        line-height: 16px;
        letter-spacing: 0.727273px;
        text-transform: uppercase;
        color: #ffffff;
        mix-blend-mode: normal;
        opacity: 0.5;
      }

      h4 {
        font-family: "Antonio";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        text-align: right;
        letter-spacing: -0.75px;
        text-transform: uppercase;
        color: #ffffff;
      }
    }
  }
`;
