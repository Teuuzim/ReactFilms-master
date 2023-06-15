import { Col, Container, Row } from "react-bootstrap";

export default function AboutTheProject() {
  return (
    <div style={{ margin: "5% 0" }}>
      <Container>
        <Row>
          <Col>
            <h1>About The Project</h1>
            <p>
              React Films is a film portal that will provide information about
              films and the films themselves. Developed by computer science and
              web development student: Pedro Tolentino Gontijo for Maked with
              ReactJS, ViteJS, TypeScript, ReactBootsrap, ReactIcons,
              React-Router-Dom, React-Scroll and Styled-Components.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
