import { Description, TitleSection } from "../../style/Text";
import {
  HeroContent,
  HeroContentWrapper,
  HeroImage,
  HeroWrapper,
} from "./styled";
import { Container } from "../../style/CommonStyle";
export const Hero = () => {
  return (
    <div>
      <Container>
        <HeroWrapper>
          <HeroContent>
            <HeroContentWrapper>
              <TitleSection>Next Generation Working</TitleSection>
              <Description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
                reiciendis facilis numquam ducimus quidem architecto odio
                dolorum repudiandae soluta? Ab magni veritatis veniam quae quod
                possimus earum iusto odio velit?
              </Description>
            </HeroContentWrapper>
          </HeroContent>
          <HeroImage></HeroImage>
        </HeroWrapper>
      </Container>
    </div>
  );
};
