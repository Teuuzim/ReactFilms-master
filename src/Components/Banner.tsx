import { Carousel, Container } from "react-bootstrap";
import ItemCarousel from "./ItemCarousel";
import axios from "axios";
import { ReactElement, useEffect, useState } from "react";

export default function Banner() {
  const [movie, setMovie] = useState<ReactElement<HTMLDivElement>>();

  const getMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=31742746c6e9901fb3322e0a9d7dddb2&query=Car`
      )
      .then((response: { data: { results: [] } }) => {
        return setMovie(
          <Carousel fade>
            {response.data.results.slice(0, 3).map(
              (
                filme: {
                  backdrop_path: string;
                  original_title: string;
                  overview: string;
                  vote_average: number
                },
                id: number
              ) => (
                <Carousel.Item key={id} interval={2000}>
                  <ItemCarousel
                    rating={filme.vote_average}
                    srcImg={`${filme.backdrop_path}`}
                    name={`${filme.original_title}`}
                    text={`${filme.overview}`}
                  />
                </Carousel.Item>
              )
            )}
          </Carousel>
        );
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <Container className="bg-secondary" fluid id="Home">
        {movie}
      </Container>
    </div>
  );
}
