import styled from "styled-components";

export const Button = styled.button`
  width: 120px;
  height: 30px;
  border: none;
  background-color: #01b7b1;
  color: white;
  border-radius: 2px;
  font-family: "Playfair Display", serif;

  &:hover {
    transition: 0.3s ease;
    background-color: #02928d;
  }
`;
export const Container = styled.div`
  padding: 0 10rem;
`;
