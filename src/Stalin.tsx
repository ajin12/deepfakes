import React from "react";
import stalin1a from "./images/stalin1a.png";
import stalin1b from "./images/stalin1b.png";
import stalin2a from "./images/stalin2a.png";
import stalin2b from "./images/stalin2b.png";
import stalin3a from "./images/stalin3a.png";
import stalin3b from "./images/stalin3b.png";
import Carousel from "react-bootstrap/Carousel";

const Stalin: React.FC = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={stalin1a} />
        <Carousel.Caption style={{ fontFamily: "PT Serif, serif" }}>
          <p>
            Nikolai Yezhov, a secret police official who fell from Stalin's
            favor and was secretly arrested and executed, was later cut from
            this photograph at the Moscow Canal.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={stalin1b} />
        <Carousel.Caption style={{ fontFamily: "PT Serif, serif" }}>
          <p>
            Nikolai Yezhov, a secret police official who fell from Stalin's
            favor and was secretly arrested and executed, was later cut from
            this photograph at the Moscow Canal.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={stalin2a} width="100%" />

        <Carousel.Caption style={{ fontFamily: "PT Serif, serif" }}>
          <p>
            In the Great Purge, one of Yezhov's firing squads executed Abel
            Yenukidze, seated on the bottom right of the photograph, who was
            subsequently snipped from the photo.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={stalin2b} width="100%" />

        <Carousel.Caption style={{ fontFamily: "PT Serif, serif" }}>
          <p>
            In the Great Purge, one of Yezhov's firing squads executed Abel
            Yenukidze, seated on the bottom right of the photograph, who was
            subsequently snipped from the photo.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={stalin3a} />

        <Carousel.Caption style={{ fontFamily: "PT Serif, serif" }}>
          <p>
            In this photograph, Stalin stands with a group of three of his
            deputies, each of whom fell from Stalin's favor and were removed,
            one by one, until only Stalin remained.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={stalin3b} />

        <Carousel.Caption style={{ fontFamily: "PT Serif, serif" }}>
          <p>
            In this photograph, Stalin stands with a group of three of his
            deputies, each of whom fell from Stalin's favor and were removed,
            one by one, until only Stalin remained.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Stalin;
