import { Col, Container, Row } from "react-bootstrap";

export default function AboutMe() {
  return (
    <div style={{ margin: "5% 0" }}>
      <Container>
        <Row>
          <Col>
            <h1>About Me</h1>
            <p>
              I have been involved with computers for some time, actually my
              whole generation. Always liked technology and am convinced that
              this will be my profession, so I am studying computer science. I
              am sure that I will realize myself in this field and that it will
              bring me a lot of joy and growth.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
