import styled from "@emotion/styled";
import React from "react";
import pelosi from "./images/pelosi.mp4";

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  cursor: pointer;
`;

const Pelosi: React.FC = () => {
  return (
    <StyledVideo controls>
      <source src={pelosi} type="video/mp4" />
      Your browser does not support the video tag.
    </StyledVideo>
  );
};

export default Pelosi;
