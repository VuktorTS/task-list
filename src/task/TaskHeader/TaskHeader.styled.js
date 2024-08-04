import styled from "styled-components";

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

export const CardTitleForm = styled.form`
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: -1px 0;
`;

export const CardTitle = styled.p`
  flex-grow: 1;
  margin: 0;
  font-size: 1.2em;
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
export const CardExpand = styled(IconButton)`
  transform: rotate(-0.25turn);

  & .card-expanded {
    transform: none;
  }
`;
