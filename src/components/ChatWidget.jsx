import React, { useState } from 'react';
import styled from 'styled-components';

const ChatWidget = ({ adminId, greeting, headerName, width, height }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ChatBubble onClick={toggleWidget}>
        <img src="https://cdn-icons-png.flaticon.com/512/14/14558.png" alt="Chat" />
      </ChatBubble>
      {isOpen && (
        <ChatWidgetContainer width={width} height={height}>
          <CloseButton onClick={toggleWidget}>&times;</CloseButton>
          <iframe
            src={`https://widget.vnukchatting.site/?adminId=${adminId}&greeting=${encodeURIComponent(greeting)}&headerName=${encodeURIComponent(headerName)}`}
            title="Chat Widget"
            style={{ width: '100%', height: '100%' }}
          />
        </ChatWidgetContainer>
      )}
    </>
  );
};

const ChatBubble = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #007bff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;
  z-index: 10000;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.1);
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

const ChatWidgetContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: ${({ width }) => width || '400px'};
  height: ${({ height }) => height || '600px'};
  overflow: hidden;
  z-index: 10000;
  transition: transform 0.3s, opacity 0.3s;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 15px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10001;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;

  &:hover {
    background-color: darkred;
  }
`;

export default ChatWidget;
