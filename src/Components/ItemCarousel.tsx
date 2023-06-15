import { Carousel, Col, Image, Container } from "react-bootstrap";
import { ContentArea, HideArea } from "../css/styles";

type IconProps = {
  text: string;
  name: string;
  srcImg: string;
  rating: number
};

export default function ItemCarousel(props: IconProps) {
  return (
    <Container fluid>
      <Col sm={12} md={12}>
        <Image
          fluid
          style={{ minHeight: "350px", maxHeight: "750px" }}
          className="w-100 p-3"
          src={`https://image.tmdb.org/t/p/w500/${props.srcImg}`}
          alt="First slide"
        />
      </Col>
      <Col sm={12} md={12}>
        <Carousel.Caption>
          <ContentArea>
            <h3>{props.name}</h3>
            <HideArea>{props.text}</HideArea>
            <div>
              {Array.from({ length: props.rating }, (_, index) => (
                <span key={index}>&#9733;</span>
              ))}
              {Array.from({ length: 5 - props.rating }, (_, index) => (
                <span key={index + props.rating}>&#9734;</span>
              ))}
            </div>
          </ContentArea>
        </Carousel.Caption>
      </Col>
    </Container>
  );
}
