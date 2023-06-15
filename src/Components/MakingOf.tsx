import { Col, Container, Row } from "react-bootstrap";

export default function MakingOf() {
  return (
    <div style={{ margin: "2% 0" }}>
      <Container>
        <Row style={{ margin: "3% 0" }}>
          <h1>MakingOf:</h1>
        </Row>
        <Row>
          <Col md={4} style={{ marginTop: "10px" }}>
            <Row>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/vKMHXmWvQXA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Row>
            <Row>
              <h2>
                <i>Movie:</i> Rush (2013 film)
              </h2>
            </Row>
          </Col>
          <Col md={4} style={{ marginTop: "10px" }}>
            <Row>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Ciu5yQYwJgY"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Row>
            <Row>
              <h2>
                <i>Movie:</i> Avengers Age of Ultron
              </h2>
            </Row>
          </Col>
          <Col md={4} style={{ marginTop: "10px" }}>
            <Row>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/gM_y2ATCpXA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Row>
            <Row>
              <h2>
                <i>Movie:</i> Avengers Ifinite War
              </h2>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
