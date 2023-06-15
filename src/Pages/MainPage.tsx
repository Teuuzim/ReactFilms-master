import { Container } from "react-bootstrap";
import Avaliations from "../Components/Avaliation";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import MakingOf from "../Components/MakingOf";
import News from "../Components/News";
import SuggestMovies from "../Components/SuggestMovies";

export default function MainPage() {
  return (
    <div>
      <Banner />
      <SuggestMovies />
      <Avaliations />
      <MakingOf />
      <News />
      <Footer />
    </div>
  );
}
