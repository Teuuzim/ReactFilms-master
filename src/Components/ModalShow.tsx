import { useState, useEffect } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import axios from "axios";

type ModalProps = {
  name: string;
  image: string;
  content: string;
  rating: number;
  id: number;
};

type Video = {
  key: string;
};

export default function ModalShow(props: ModalProps) {
  const [show, setShow] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get<{ results: Video[] }>(
        `https://api.themoviedb.org/3/movie/${props.id}/videos`,
        {
          params: {
            api_key: "31742746c6e9901fb3322e0a9d7dddb2",
          },
        }
      )
      .then((response) => setVideos(response.data.results))
      .catch((error) => console.log(error));
  }, [props.id]);

  const handleWatch = () => {
    window.location.href = `https://api.themoviedb.org/3/movie/${props.id}/watch/providers?api_key=31742746c6e9901fb3322e0a9d7dddb2`;
  };

  return (
    <div>
      <Button variant="light" onClick={handleShow}>
        See
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Card bg="secondary" style={{ height: "100%", padding: "10px" }}>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${props.image}`}
          />
          <Modal.Header closeButton closeVariant="white">
            <Modal.Title>{props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {props.content}
            <br />
            {Array.from({ length: props.rating }, (_, index) => (
              <span key={index}>&#9733;</span>
            ))}
            {Array.from({ length: 5 - props.rating }, (_, index) => (
              <span key={index + props.rating}>&#9734;</span>
            ))}
            <br />
            <br />
            <h4>Watch the trailer:</h4>
            {videos.map((video) => (
              <div key={video.key}>
                <a
                  href={`https://www.youtube.com/watch?v=${video.key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {video.key}
                </a>
              </div>
            ))}
            <br />
            <Button variant="light" onClick={handleWatch}>
              Watch now
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Card>
      </Modal>
    </div>
  );
}
