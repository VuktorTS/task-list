import styled from "styled-components";

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
