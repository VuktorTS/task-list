import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 3px 3px 10px rgba(0 0 0 / 0.1);
  padding: 8px 16px;
  overflow: hidden;
`;

export const CardControls = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: flex-end;
  gap: 12px;
`;

export const CardControlButton = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  color: #09c;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
