import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #1d3557;
  padding: 6rem 0;
  font-family: "Roboto";
  .footer_inner {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
export const FooterLinks = styled.div`
  .logo {
    font-size: 1.5rem;
    color: white;
    font-family: "Roboto";
  }
  .social-logos {
    margin-top: 4rem;
    img {
      max-width: 2rem;
      margin-right: 1rem;
      color: white;
    }
  }
  display: flex;
  width: 60%;
  justify-content: space-between;

  .link {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    a {
      margin-bottom: 1.3rem;
    }
  }
`;
export const FooterButton = styled.div``;
