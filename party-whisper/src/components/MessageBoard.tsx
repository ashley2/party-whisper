import React from 'react';
import styled from 'styled-components';

const messages = [
  { id: 1, text: 'Hello there!' },
  { id: 2, text: 'How are you?' },
  // Add more messages as needed
];

const Board = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
`;

const MessageBubble = styled.div`
  background-color: #f1f1f1;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 20px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: #f1f1f1;
    border-bottom: 0;
    margin-left: -10px;
    margin-bottom: -10px;
  }
`;

const MessageBoard: React.FC = () => (
  <Board>
    {messages.map((msg) => (
      <MessageBubble key={msg.id}>{msg.text}</MessageBubble>
    ))}
  </Board>
);

export default MessageBoard;
