import { Description, TitleSection } from "../../style/Text";
import {
  HeroContent,
  HeroContentWrapper,
  HeroImage,
  HeroWrapper,
} from "./styled";
import HeroBack from "../../images/image-mockups.png";
import { NorightPadding } from "../../style/CommonStyle";
import { Button } from "../../style/CommonStyle";
export const Hero = () => {
  return (
    <div>
      <NorightPadding>
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
              <Button>Request Invite</Button>
            </HeroContentWrapper>
          </HeroContent>
          <HeroImage>
            <img src={HeroBack} alt="section" />
          </HeroImage>
        </HeroWrapper>
      </NorightPadding>
    </div>
  );
};
