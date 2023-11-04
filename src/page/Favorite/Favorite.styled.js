import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.p`
  color: #121417;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #3470ff;
  border: none;
  border-radius: 12px;
  padding: 12px 50px;
  max-width: 274px;
  text-align: center;

  color: #fff;
  font-size: 14px;
  line-height: 1.42;

  &:hover,
  :focus {
    background-color: #0b44cd;
  }
`;
