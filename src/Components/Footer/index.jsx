import { FooterButton, FooterLinks, FooterWrapper } from "./styled";
import Instagram from "../../images/icon-instagram.svg";
import Pinterest from "../../images/icon-pinterest.svg";
import Twitter from "../../images/icon-twitter.svg";
import Youtube from "../../images/icon-youtube.svg";
import { Container, Button } from "../../style/CommonStyle";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <Container>
          <div className="footer_inner">
            <FooterLinks>
              <div>
                <div className="logo">
                  <h2>BankAPP</h2>
                </div>
                <div className="social-logos">
                  <img src={Instagram} alt="ig" />
                  <img src={Pinterest} alt="Pint" />
                  <img src={Twitter} alt="TT" />
                  <img src={Youtube} alt="YT" />
                </div>
              </div>
              <div className="link">
                <Link to="/about">About</Link>{" "}
                <Link to="/Contact">Contact</Link>
                <Link to="/Blog">Blog</Link>
              </div>

              <div className="link">
                <Link to="/Support">Support</Link> <Link to="/Help">Help</Link>
                <Link to="/Contact">Contact</Link>
              </div>
            </FooterLinks>
            <FooterButton>
              <Button>Request Invite</Button>
            </FooterButton>
          </div>
        </Container>
      </FooterWrapper>
    </div>
  );
};
export default Footer;
