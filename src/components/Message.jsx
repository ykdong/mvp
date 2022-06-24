import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;
const FormContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  height: 40%;
  background-color: white;
  padding: 1rem;
  overflow: auto;
`;

const CloseButton = styled.span`
  float: right;
  color: lightgrey;
  :hover {
    color: black;
    cursor: pointer;
  }
`;

const Message = ({ message, closeMessage }) => {
  return (
    <Overlay>
      <>
        <FormContainer>
          <CloseButton onClick={(e) => closeMessage(e)}>&times;</CloseButton>
          <h3>{message}</h3>
        </FormContainer>
      </>
    </Overlay>
  );
};
export default Message;