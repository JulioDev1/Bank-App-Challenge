import { HomeContainer } from "./styled";
import { Hero } from "../Components/Hero/index";
import { Info } from "../Components/Sections";

const Home = () => {
  return (
    <div>
      <HomeContainer>
        <Hero />
        <Info />
      </HomeContainer>
    </div>
  );
};
export default Home;
