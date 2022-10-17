import styled from "styled-components";
import HeroImg from "../../images/bg-intro-desktop.svg";
export const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const HeroContent = styled.div`
  width: 40%;
`;
export const HeroImage = styled.div`
  width: 80%;
  position: relative;
  height: 100vh;
  background: url(${HeroImg});
  background-position: 15% 85%;
  img {
    position: absolute;
    top: -14rem;
    right: -10rem;
  }
`;

export const HeroContentWrapper = styled.div`
  font-family: "Roboto", sans-serif;

  max-width: 40rem;
  p {
    padding: 2rem 0;
  }
`;
