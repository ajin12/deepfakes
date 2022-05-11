import "./App.css";
import Cover from "./Cover.tsx";
import styled from "@emotion/styled";
import Stalin from "./Stalin.tsx";
import TextContent from "./TextContent.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

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

function App() {
  return (
    <>
      <Cover />
      <StyledContainer>
        <StyledTextContainer>
          <TextContent />
        </StyledTextContainer>

        <StyledMediaContainer>
          <Stalin />
        </StyledMediaContainer>
      </StyledContainer>
    </>
  );
}

export default App;
