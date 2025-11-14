import styled from "styled-components";

export const ActionButton = styled.button`
  padding: 6px 12px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  font-size: 14px;
  
  &.edit {
    background-color: #3498db;   
  }

  &.delete {
    background-color: #e74c3c;
  }

  &:hover {
    opacity: 0.8;
  }
`;
export const Th = styled.th`
  padding: 10px;
  background-color: #f2f2f2;
  font-weight: bold;
  border-bottom: 2px solid #ddd;
`;