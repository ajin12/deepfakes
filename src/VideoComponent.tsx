import styled from "@emotion/styled";
import React from "react";

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  cursor: pointer;
`;

interface Props {
  src: string;
}

const VideoComponent: React.FC<Props> = ({ src }) => {
  return (
    <StyledVideo controls>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </StyledVideo>
  );
};

export default VideoComponent;
