import styled from "@emotion/styled";
import React from "react";
import { Media } from "./App.tsx";
import cover from "./images/cover.png";
import white from "./images/white.jpeg";

const StyledCover = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: black;
`;

const StyledTitle = styled.h1`
  color: white;
  font-family: "Source Code Pro", monospace;
  text-align: center;
  align-self: center;
  font-size: 48px;
  padding: 60px;
`;

interface Props {
  media: Media;
}

const Cover: React.FC<Props> = ({ media }) => {
  return (
    <StyledCover>
      <StyledTitle>
        When Seeing is No Longer Believing: The Rise of the Deepfake
      </StyledTitle>

      <img src={media === undefined ? cover : white} width="50%" />
    </StyledCover>
  );
};

export default Cover;
