import React from 'react';
import styled from 'styled-components';

const DocsContainer = styled.div`
  padding-top: 75px; /* Adjust based on the height of your navigation bar */
 display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px); /* Full viewport height minus the nav and footer height */
`;

const PdfContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledEmbed = styled.embed`
  width: 90%; /* Adjust the width as needed */
  height: 100%; /* Make it fill the height */
  object-fit: contain; /* Ensure it fits within the container without scrolling */
`;

const Docs = () => {
  return (
    <DocsContainer>
      <PdfContainer>
        <StyledEmbed 
          src="/UserManual.pdf" 
          type="application/pdf" 
        />
      </PdfContainer>
    </DocsContainer>
  );
};

export default Docs;
