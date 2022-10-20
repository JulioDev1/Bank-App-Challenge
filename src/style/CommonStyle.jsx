import styled from "styled-components";

export const Button = styled.button`
  width: 120px;
  height: 30px;
  border: none;
  background-color: #01b7b1;
  cursor: pointer;
  color: white;
  border-radius: 2px;
  font-family: "Roboto", sans-serif;

  &:hover {
    transition: 0.3s ease;
    background-color: #02928d;
  }
`;
export const NorightPadding = styled.div`
  padding: 0 0 0 10rem;
  @media (max-width: 991px) {
    padding: 0 0 0 4rem;
  }
  @media (max-width: 600px) {
    padding: 0;
  }
`;
export const Container = styled.div`
  padding: 0 10rem;
  @media (max-width: 991px) {
    padding: 0 6rem;
  }
  @media (max-width: 991px) {
    padding: 0 4rem;
  }
`;
