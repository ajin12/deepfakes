import styled from "@emotion/styled";
import React from "react";

const StyledContainer = styled.div`
  font-family: "Source Code Pro", monospace;
  border: 1px black solid;
  border-radius: 16px;
  padding: 24px;
`;

const StyledQuotationMark = styled.div`
  font-size: 100px;
  color: #abcdef;
  margin-bottom: -54px;
  margin-top: -28px;
`;

const Quote: React.FC = () => {
  return (
    <StyledContainer>
      <StyledQuotationMark>“</StyledQuotationMark>
      <h2>
        It doesn't have to be a politician to be a deepfake. It even might be
        your friend. It could be you that's targeted.
      </h2>
    </StyledContainer>
  );
};

export default Quote;
