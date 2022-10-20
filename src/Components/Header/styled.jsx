import styled from "styled-components";

export const Navigation = styled.header`
  width: 100%;
  overflow: hidden;
  z-index: 999;
  background-color: #ffffff;
  position: relative;
  @media (max-width: 600px) {
    overflow: visible;
  }
`;
export const Nav = styled.nav`
  display: flex;
  padding: 3rem 0;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 12px;

  .hamburger {
    max-width: 5rem;
    display: none;
  }
  @media (max-width: 600px) {
    button {
      display: none;
    }
    .hamburger {
      display: block;
    }
    img {
      max-width: 3rem;
    }
    ul.active {
      display: block;
    }
  }
`;
export const Ul = styled.ul`
  display: flex;
  width: 25%;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 100px;
    background-color: #ffffff;
    font-size: 500;
    border-radius: 5px;
    padding: 4rem 0;
    text-align: center;
    display: none;
  }
`;
export const Li = styled.li`
  padding: 1rem 0;
`;
export const Logo = styled.h1``;
