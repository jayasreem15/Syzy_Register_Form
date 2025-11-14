import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  backgroundColor:lightblue;
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #2a6df4;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 30px;
  border-collapse: collapse;
`;

export const Th = styled.th`
  border: 1px solid #ccc;
  padding: 10px;
`;

export const Td = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
`;

export const ActionButton = styled.button`
  margin: 3px;
  padding: 6px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &.edit {
    background-color: #4caf50;
    color: white;
  }

  &.delete {
    background-color: #f44336;
    color: white;
  }
`;
