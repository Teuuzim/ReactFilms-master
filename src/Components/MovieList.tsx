import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import ModalShow from "./ModalShow";
import Bond from "../assets/bond.webp";
import { CenterP } from "../css/styles";

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  vote_average: number;
  genre_ids: number[];
}

interface Genre {
  id: number;
  name: string;
}

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get<{ results: Movie[] }>("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: "31742746c6e9901fb3322e0a9d7dddb2",
        },
      })
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.log(error));

    axios
      .get<{ genres: Genre[] }>(
        "https://api.themoviedb.org/3/genre/movie/list",
        {
          params: {
            api_key: "31742746c6e9901fb3322e0a9d7dddb2",
          },
        }
      )
      .then((response) => setGenres(response.data.genres))
      .catch((error) => console.log(error));
  }, []);

  function handleGenreSelection(genreId: number) {
    setSelectedGenre(genreId);
  }

  return (
    <Container>
      <h1>Popular Movies</h1>
      <Row>
        <Col md={12} style={{ marginBottom: "10px" }}>
          {genres.map((genre) => (
            <Button
              key={genre.id}
              variant={
                selectedGenre === genre.id ? "secondary" : "outline-secondary"
              }
              onClick={() => handleGenreSelection(genre.id)}
              style={{ margin: "5px 10px" }}
            >
              {genre.name}
            </Button>
          ))}
        </Col>
        {movies
          .filter(
            (movie) =>
              selectedGenre === null || movie.genre_ids.includes(selectedGenre)
          )
          .map((movie) => (
            <Col md={6} key={movie.id} style={{ marginTop: "10px" }}>
              <Card bg="secondary" style={{ height: "100%", padding: "10px" }}>
                <Card.Img
                  variant="top"
                  src={
                    movie.backdrop_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                      : Bond
                  }
                />
                <Card.Body>
                  <Card.Title>{`${movie.title}`}</Card.Title>
                  <Card.Text>{`${movie.overview}`}</Card.Text>
                  <ModalShow
                    id={movie.id}
                    rating={movie.vote_average}
                    name={`${movie.title}`}
                    image={`${movie.backdrop_path}`}
                    content={`${movie.overview}`}
                  />
                </Card.Body>
              </Card>
            </Col>
          ))}
        {selectedGenre !== null &&
          movies.filter((movie) => movie.genre_ids.includes(selectedGenre))
            .length === 0 && <CenterP>Sorry, no movies found for this genre.</CenterP>}
      </Row>
    </Container>
  );
}
