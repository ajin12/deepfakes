import "./App.css";
import Cover from "./Cover.tsx";
import styled from "@emotion/styled";
import Stalin from "./Stalin.tsx";
import TextContent from "./TextContent.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Zuck from "./Zuck.tsx";
import VideoComponent from "./VideoComponent.tsx";
import pelosi from "./images/pelosi.mp4";
import roundtable from "./images/roundtable.mp4";
import nixon from "./images/nixon.mp4";
import Quote from "./Quote.tsx";
import Bourdain from "./Bourdain.tsx";
import LivingPortrait from "./LivingPortrait.tsx";
import monroe from "./images/monroe.gif";
import dali from "./images/dali.gif";
import mona from "./images/mona.gif";
import Strategies from "./Strategies.tsx";

const StyledContainer = styled.div`
  display: flex;
`;

const StyledTextContainer = styled.div`
  margin: 32px 32px 32px 48px;
  width: 44%;
  font-family: "PT Serif", serif;
  font-size: 18px;
`;

const StyledMediaContainer = styled.div`
  margin: 32px 48px 32px 32px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(0%, -50%);
`;

export const enum Media {
  Stalin,
  Pelosi,
  Zuck,
  Nixon,
  Quote,
  Monroe,
  Dali,
  Mona,
  Bourdain,
  Roundtable,
  Strategies,
}

function App() {
  const [media, setMedia] = useState<Media>();

  return (
    <>
      <Cover media={media} />
      <StyledContainer>
        <StyledTextContainer>
          <TextContent setMedia={setMedia} />
        </StyledTextContainer>

        <StyledMediaContainer>
          {media === Media.Stalin && <Stalin />}
          {media === Media.Pelosi && <VideoComponent src={pelosi} />}
          {media === Media.Zuck && <Zuck />}
          {media === Media.Nixon && <VideoComponent src={nixon} />}
          {media === Media.Quote && <Quote />}
          {media === Media.Monroe && <LivingPortrait src={monroe} />}
          {media === Media.Dali && <LivingPortrait src={dali} />}
          {media === Media.Mona && <LivingPortrait src={mona} />}
          {media === Media.Bourdain && <Bourdain />}
          {media === Media.Roundtable && <VideoComponent src={roundtable} />}
          {media === Media.Strategies && <Strategies />}
        </StyledMediaContainer>
      </StyledContainer>
    </>
  );
}

export default App;
