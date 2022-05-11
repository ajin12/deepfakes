import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "@emotion/styled";
import teeth from "./images/teeth.jpeg";
import hair from "./images/hair.jpeg";
import background from "./images/background.jpeg";
import edges from "./images/edges.jpeg";
import glasses from "./images/glasses.jpeg";
import earrings from "./images/earrings.jpeg";
import clothing from "./images/clothing.jpeg";

const StyledImage = styled.img`
  border-radius: 16px;
`;

const Strategies: React.FC = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <StyledImage className="d-block w-100" src={teeth} />
        <Carousel.Caption style={{ fontFamily: "PT Serif, serif" }}>
          <h3>Teeth</h3>
          <p>
            Notice how some teeth are amorphously shaped and don't have
            well-defined edges.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <StyledImage className="d-block w-100" src={hair} />
        <Carousel.Caption style={{ fontFamily: "PT Serif, serif" }}>
          <h3>Hair</h3>
          <p>
            There are random strands of hair growing on her forehead. How
            strange!
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <StyledImage className="d-block w-100" src={background} width="100%" />

        <Carousel.Caption style={{ fontFamily: "PT Serif, serif" }}>
          <h3>Background</h3>
          <p>Look closely at the background. Does it look real?</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <StyledImage className="d-block w-100" src={edges} width="100%" />

        <Carousel.Caption style={{ fontFamily: "PT Serif, serif" }}>
          <h3>Edges of the face swap</h3>
          <p>
            Notice the unusual spot right above the tie at the edge of the
            collar?
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <StyledImage className="d-block w-100" src={glasses} />

        <Carousel.Caption style={{ fontFamily: "PT Serif, serif" }}>
          <h3>Glasses</h3>
          <p>
            The shape of each lens isn't the same. One appears to be slightly
            more ovular than the other.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StyledImage className="d-block w-100" src={earrings} />

        <Carousel.Caption style={{ fontFamily: "PT Serif, serif" }}>
          <h3>Earrings</h3>
          <p>
            Interesting how the earrings are different and abnormally shaped.
            Also, how is the earring attached to her ear on the right side of
            the photograph?
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StyledImage className="d-block w-100" src={clothing} />

        <Carousel.Caption style={{ fontFamily: "PT Serif, serif" }}>
          <h3>Clothing</h3>
          <p>What is happening on the right where the shirt meets his neck?</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Strategies;
