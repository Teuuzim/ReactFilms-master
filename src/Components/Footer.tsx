import { Container, Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
import { SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";
import { Footer1, FooterArea, IconsArea } from "../css/styles";

export default function Footer() {
  return (
    <footer>
      <FooterArea>
        <Footer1 className="footer mt-auto py-3 bg-light">
          <Container>
            <Row>
              <IconContext.Provider value={{ size: "2em" }}>
                <Col className="d-flex justify-content-center">
                  <IconsArea>
                    <a target="_blank" href="https://www.linkedin.com/in/matheus-vaz-1a3a2021a/">
                      <SiLinkedin />
                    </a>
                  </IconsArea>
                </Col>
                <Col className="d-flex justify-content-center">
                  <IconsArea>
                    <a target="_blank" href="https://github.com/Teuuzim">
                      <SiGithub />
                    </a>
                  </IconsArea>
                </Col>
                <Col className="d-flex justify-content-center">
                  <IconsArea>
                    <a target="_blank" href="#">
                      <SiInstagram />
                    </a>
                  </IconsArea>
                </Col>
              </IconContext.Provider>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <p>Copyright - Matheus Vaz</p>    
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <p>2022 - Vite app</p>
              </Col>
            </Row>
          </Container>
        </Footer1>
      </FooterArea>
    </footer>
  );
}
