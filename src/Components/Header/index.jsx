import { Navigation, Nav, Ul, Li, Logo } from "./styled";
import { Link } from "react-router-dom";
import { Button } from "../../style/CommonStyle";
import { Container } from "../../style/CommonStyle";
const Header = () => {
  return (
    <div>
      <Container>
        <Navigation>
          <Nav>
            <Logo>BankAPP</Logo>
            <Ul>
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
          </Nav>
        </Navigation>
      </Container>
    </div>
  );
};
export default Header;
