import { Description, TitleSectionH2, TitleSectionH3 } from "../../style/Text";
import { InfoCard, InfoGrid, InfoHeader, InfoWrapper } from "./styled";
import { Container } from "../../style/CommonStyle";
import BankingIcon from "../../images/icon-online.svg";
import Budgeting from "../../images/icon-budgeting.svg";
import onBoarding from "../../images/icon-onboarding.svg";
import OpenAPI from "../../images/icon-api.svg";
export const Info = () => {
  return (
    <div>
      <InfoWrapper>
        <Container>
          <InfoHeader>
            <TitleSectionH2>Why choose easybank?</TitleSectionH2>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              at nihil non nam natus placeat
            </Description>
          </InfoHeader>
          <InfoGrid>
            <InfoCard>
              <img src={BankingIcon} alt="a" />
              <TitleSectionH3>Online Bank</TitleSectionH3>
              <Description>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                doloremque fugiat similique nisi consequatur quibusdam animi.
              </Description>
            </InfoCard>
            <InfoCard>
              <img src={Budgeting} alt="b" />
              <TitleSectionH3>Simple Budgeting</TitleSectionH3>
              <Description>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                doloremque fugiat similique nisi consequatur quibusdam animi.
              </Description>
            </InfoCard>
            <InfoCard>
              <img src={onBoarding} alt="c" />
              <TitleSectionH3>Fast Onboarding</TitleSectionH3>
              <Description>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                doloremque fugiat similique nisi consequatur quibusdam animi.
              </Description>
            </InfoCard>
            <InfoCard>
              <img src={OpenAPI} alt="d" />
              <TitleSectionH3>Open API</TitleSectionH3>
              <Description>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                doloremque fugiat similique nisi consequatur quibusdam animi.
              </Description>
            </InfoCard>
          </InfoGrid>
        </Container>
      </InfoWrapper>
    </div>
  );
};
