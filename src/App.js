import "./App.css";
import Cover from "./Cover.tsx";
import styled from "@emotion/styled";

const StyledContainer = styled.div`
  display: flex;
`;

const StyledTextContainer = styled.div`
  margin: 32px;
  width: 100%;
  font-family: "PT Serif", serif;
  font-size: 18px;
`;

const StyledMediaContainer = styled.div`
  margin: 32px;
  width: 100%;
`;

function App() {
  return (
    <>
      <Cover />
      <StyledContainer>
        <StyledTextContainer>
          <p>
            In late 2017, a Reddit account with the handle Deepfakes shared
            pornographic videos created using open source deep neural network
            (DNN)-based face-swapping technology, coining the term “deepfake.”
            Since then, accompanying a rampant spread of online disinformation,
            it has expanded to not only refer to falsified videos where the
            subject is swapped with another person's likeness, but to any
            AI-generated media intended to impersonate, whether images, audio,
            or videos.
          </p>
        </StyledTextContainer>
        <StyledMediaContainer></StyledMediaContainer>
      </StyledContainer>
    </>
  );
}

export default App;
