import styled from "styled-components";

export const ArticleWrapper = styled.div`
  padding: 10rem 0 6rem 0;
  font-family: "Roboto";
`;
export const ArticleTitle = styled.h2`
  font-family: "Roboto";
  font-size: 1.5rem;
`;
export const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 4rem;
  gap: 2rem;
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items:center;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
`;
export const ArticleCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 300px;
  overflow: hidden;
  border-radius: 1rem;
  h4 {
    padding: 1rem 0;
  }
  img {
    width: 300px;
  }
`;
export const ArticleCardContent = styled.div`
  padding: 2rem 3rem;
`;
