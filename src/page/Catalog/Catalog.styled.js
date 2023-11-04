import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  cursor: pointer;
  background-color: transparent;
  border: transparent;
  text-decoration-line: underline;
  text-align: center;

  color: #3470ff;
  font-size: 16px;
  line-height: 1.5;
  padding-bottom: 150px;
  margin: 0 auto;

  &:hover,
  :focus {
    color: #0b44cd;
  }
`;
