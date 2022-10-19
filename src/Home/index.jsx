import { HomeContainer } from "./styled";
import { Hero } from "../Components/Hero/index";
import { Info } from "../Components/Sections";
import { Article } from "../Components/Articles";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <HomeContainer>
        <Hero />
        <Info />
        <Article />
        <Footer />
      </HomeContainer>
    </div>
  );
};
export default Home;
