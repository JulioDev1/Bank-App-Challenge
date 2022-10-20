import styled from "styled-components";

export const InfoWrapper = styled.div`
  width: 100%;
  padding: 10rem 0 6rem 0;
  background-color: #f8f9fa;
  font-family: "Roboto", sans-serif;
`;
export const InfoHeader = styled.div`
  p {
    max-width: 70rem;
    padding: 1.5rem 0;
  }
`;
export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.2rem;
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const InfoCard = styled.div`
  margin-top: 30px;
  h3 {
    padding: 2rem 0;
  }
`;
