import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";
import { CenterSM, PositionRigth, SpaceBetween } from "../css/styles";
import ModalShow from "./ModalShow";
import Bond from "../assets/bond.webp";

export default function SuggestMovies() {
  const [movie, setMovie] = useState<ReactElement<HTMLDivElement>>();
  const [value1, setValue] = useState<string | null>("Friday");

  const getMovie = (data: { name: string | null }) => {
    data.name ?? data.name == "Friday";
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=31742746c6e9901fb3322e0a9d7dddb2&query=${data.name}`
      )
      .then((response: { data: { results: [] } }) => {
        return setMovie(
          <Row>
            {response.data.results.slice(0, 2).map(
              (
                movie: {
                  id: number;
                  original_title: string;
                  overview: string;
                  backdrop_path: string;
                  vote_average: number;
                },
                id: number
              ) => (
                <Col md={6} key={id} style={{ marginTop: "10px" }}>
                  <Card
                    bg="secondary"
                    style={{ height: "100%", padding: "10px" }}
                  >
                    <Card.Img
                      variant="top"
                      src={
                        movie.backdrop_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` 
                        : Bond
                      }
                    />
                    <Card.Body>
                      <Card.Title>{`${movie.original_title}`}</Card.Title>
                      <Card.Text>{`${movie.overview}`}</Card.Text>
                      <ModalShow
                        id={movie.id}
                        rating={movie.vote_average}
                        name={`${movie.original_title}`}
                        image={`${movie.backdrop_path}`}
                        content={`${movie.overview}`}
                      />
                    </Card.Body>
                  </Card>
                </Col>
              )
            )}
          </Row>
        );
      });
  };

  useEffect(() => {
    getMovie({ name: value1 });
  }, [value1]);

  return (
    <Container>
      <Row style={{ margin: "3% 0" }}>
        <SpaceBetween>
          <Col sm={6}>
            <CenterSM>
              <h1>Suggested Movies:</h1>
            </CenterSM>
          </Col>
          <Col sm={6}>
            <PositionRigth>
              <DropdownButton
                variant="secondary"
                title={value1 || "Default"}
                id="input-group-dropdown-1"
                onSelect={(
                  eventKey: string | null,
                  e: React.SyntheticEvent<unknown>
                ) => setValue(eventKey)}
              >
                <Dropdown.Item
                  href="#"
                  eventKey="Friday"
                  name="Friday"
                  value="Friday"
                >
                  Friday
                </Dropdown.Item>
                <Dropdown.Item href="#" eventKey="Fight Club" value="Figths">
                  Figths
                </Dropdown.Item>
                <Dropdown.Item href="#" eventKey="Love" value="Loves">
                  Love
                </Dropdown.Item>
              </DropdownButton>
            </PositionRigth>
          </Col>
        </SpaceBetween>
      </Row>
      {movie}
    </Container>
  );
}
