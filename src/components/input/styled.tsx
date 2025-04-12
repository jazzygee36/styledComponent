import styled from 'styled-components';

export const Input = styled.input`
  // padding: 0px 16px;
  border: 1px solid #e4e4e7;
  border-radius: 6px;
  font-size: 16px;
  margin-bottom: 16px;
  height: 46px;
  width: 98%;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #7000f6;
  }

  &::placeholder {
    color: #71717a;
    font-weight: 500;
    padding-left: 12px;
    padding-right: 12px;
    font-size: 16px;
  }
`;

export const Label = styled.div`
  font-size: 16px;
  color: #09090b;
  margin-bottom: 6px;
`;
