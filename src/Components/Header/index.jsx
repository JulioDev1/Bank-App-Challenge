import { Navigation, Nav, Ul, Li, Logo } from "./styled";
import { Link } from "react-router-dom";
import { Button } from "../../style/CommonStyle";
import { Container } from "../../style/CommonStyle";
import { useState } from "react";
import hamburger from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Container>
        <Navigation>
          <Nav>
            <Logo>BankAPP</Logo>
            <Ul className={open ? `active` : `navlinks`}>
              <Li>
                <Link to="/">About</Link>
              </Li>
              <Li>
                <Link to="/">Service</Link>
              </Li>
              <Li>
                <Link to="/">Contact</Link>
              </Li>
              <Li>
                <Link to="/">Bank-Career</Link>
              </Li>
            </Ul>
            <Button>Request Invite</Button>
            <img
              src={open ? hamburger : close}
              alt="a"
              onClick={handleClick}
              className="hamburger"
            ></img>
          </Nav>
        </Navigation>
      </Container>
    </div>
  );
};
export default Header;
