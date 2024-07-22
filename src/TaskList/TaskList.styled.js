import styled from "styled-components";

export const Lane = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 320px;
  max-width: 400px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

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
export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 0;
  padding: 0;
  background-color: transparent;
  font-size: 1.1em;
  text-align: left;
  cursor: pointer;
`;

export const CardTitle = styled.p`
  flex-grow: 1;
  margin: 0;
  font-size: 1.2em;
`;

export const CardControls = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: flex-end;
  gap: 12px;
`;

export const CardControl = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  color: #09c;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const CardTitleForm = styled.form`
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: -1px 0;
`;

export const CardTitleInput = styled(CardTitle)`
  flex: 1 1 10px;
  width: 10px;
  margin: -2px 0 -2px -4px;
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0;
  color: black;
  display: flex;
  cursor: pointer;
  & img {
    width: 16px;
  }
`;
