import styled from "styled-components";
import PlanetIconGeo from "../../../assets/geology-uranus.png";
import PlanetIcon from "../../../assets/planet-uranus.svg";
import PlanetTypes from "../../../types";
import arrow from "../../../assets/icon-source.svg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

interface Props {
  planetInfo: PlanetTypes[];
  setpath: (path: string) => void;
}

export default function Surface({ planetInfo, setpath }: Props) {
  const location = useLocation().pathname;
  useEffect(() => {
    setpath(location);
  }, [location]);
  const planet = planetInfo?.[6];
  return (
    <Container>
      <div className="imgContainer">
        <img className="geology" src={PlanetIconGeo} alt="uranus" />
        <img className="img" src={PlanetIcon} alt="uranus" />
      </div>
      <h1>{planet.name}</h1>
      <p>{planet.geology.content}</p>
      <div>
        <h2>
          Source: <a href={planet.geology.source}>Wikipedia</a>
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
  width: 100%;
  max-width: 375px;

  .imgContainer {
    position: relative;
    margin: 0;

    .img {
      width: 173px;
      height: 173px;
      margin-top: 64px;
    }

    .geology {
      width: 65px;
      height: 75px;
      position: absolute;
      left: 31%;
      top: 80%;
    }
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

  @media (min-width: 768px) {
    padding: 0 39px;
    align-items: start;
    max-width: 768px;

    .imgContainer {
      position: relative;
      margin: 0;
      align-self: center;

      .img {
        width: 285px;
        height: 285px;
        margin-top: 96px;
        align-self: center;
      }

      .geology {
        width: 65px;
        height: 75px;
        position: absolute;
        left: 39%;
        top: 90%;
      }
    }

    h1 {
      font-size: 48px;
      line-height: 62px;
      margin-top: 79px;
      text-align: left;
    }

    p {
      text-align: left;
      max-width: 340px;
      margin-top: 24px;
    }

    .infosContainer {
      flex-direction: row;
      gap: 11px;
      margin-top: 27px;

      .infos {
        padding: 16px;
        flex-direction: column;
        justify-content: unset;
        gap: 6px;
        align-items: start;
        margin: 0;

        h4 {
          font-size: 24px;
          line-height: 31px;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 0 100px;
    align-items: end;
    max-width: 1440px;
    position: relative;

    .imgContainer {
      width: 450px;
      height: 450px;
      position: absolute;
      margin: 0;
      right: 50%;
      top: 162px;
      align-self: center;

      .img {
        width: 450px;
        height: 450px;
        margin-top: 0;
      }

      .geology {
        width: 163px;
        height: 199px;
        position: absolute;
        left: 32%;
        top: 70%;
      }
    }

    h1 {
      font-size: 80px;
      line-height: 103px;
      margin-top: 126px;
      width: 350px;
    }

    p {
      font-size: 14px;
      line-height: 25px;
      max-width: 350px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      height: 150px;
    }

    div {
      width: 350px;
      margin-top: 24px;

      img {
        position: unset;
      }

      h2 {
        font-size: 14px;
      }
    }

    .infosContainer {
      gap: 30px;
      justify-content: space-between;
      margin-top: 300px;

      .infos {
        padding: 20px 0 20px 23px;
        gap: 4px;

        h3 {
          font-size: 11px;
          line-height: 25px;
        }

        h4 {
          font-size: 40px;
          line-height: 52px;
        }
      }
    }
  }
`;
