import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const HeroContent = styled.div`
  width: 40%;
  height: 40vh;
`;
export const HeroImage = styled.div`
  width: 60%;
  position: relative;
  overflow: hidden;
  height: 100vh;

  img {
    position: absolute;
    top: -14rem;
    right: -10rem;
  }
`;

export const HeroContentWrapper = styled.div`
  font-family: "Merriweather", serif;

  max-width: 110rem;
  p {
    padding: 2rem 0;
  }
`;
