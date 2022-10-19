import {
  ArticleGrid,
  ArticleWrapper,
  ArticleTitle,
  ArticleCard,
  ArticleCardContent,
} from "./styled";

import MoneyImg from "../../images/image-currency.jpg";

import { Container } from "../../style/CommonStyle";
import {
  Description,
  TitleSectionH2,
  TitleSectionH4,
  TitleSectionH5,
} from "../../style/Text";
export const Article = () => {
  return (
    <div>
      <Container>
        <ArticleWrapper>
          <TitleSectionH2>Latest Articles</TitleSectionH2>
          <ArticleGrid>
            <ArticleCard>
              <img src={MoneyImg} alt="Img" />
              <ArticleCardContent>
                <TitleSectionH4>Author Name</TitleSectionH4>
                <TitleSectionH5>
                  Lorem ipsum dolor sit amet consectetur.
                </TitleSectionH5>
                <Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  perspiciatis velit, saepe aliquid dolore porro vel culpa
                  eveniet hic minima, ab quod dolores odio odit voluptatum eum
                  vitae accusamus consequatur
                </Description>
              </ArticleCardContent>
            </ArticleCard>
            <ArticleCard>
              <img src={MoneyImg} alt="Img" />
              <ArticleCardContent>
                <TitleSectionH4>Author Name</TitleSectionH4>
                <TitleSectionH5>
                  Lorem ipsum dolor sit amet consectetur.
                </TitleSectionH5>
                <Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  perspiciatis velit, saepe aliquid dolore porro vel culpa
                  eveniet hic minima, ab quod dolores odio odit voluptatum eum
                  vitae accusamus consequatur.
                </Description>
              </ArticleCardContent>
            </ArticleCard>
            <ArticleCard>
              <img src={MoneyImg} alt="Img" />
              <ArticleCardContent>
                <TitleSectionH4>Author Name</TitleSectionH4>
                <TitleSectionH5>
                  Lorem ipsum dolor sit amet consectetur.
                </TitleSectionH5>
                <Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  perspiciatis velit, saepe aliquid dolore porro vel culpa
                  eveniet hic minima, ab quod dolores odio odit voluptatum eum
                  vitae accusamus consequatur.
                </Description>
              </ArticleCardContent>
            </ArticleCard>
            <ArticleCard>
              <img src={MoneyImg} alt="Img" />
              <ArticleCardContent>
                <TitleSectionH4>Author Name</TitleSectionH4>
                <TitleSectionH5>
                  Lorem ipsum dolor sit amet consectetur.
                </TitleSectionH5>
                <Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  perspiciatis velit, saepe aliquid dolore porro vel culpa
                  eveniet hic minima, ab quod dolores odio odit voluptatum eum
                  vitae accusamus consequatur.
                </Description>
              </ArticleCardContent>
            </ArticleCard>
          </ArticleGrid>
        </ArticleWrapper>
      </Container>
    </div>
  );
};
