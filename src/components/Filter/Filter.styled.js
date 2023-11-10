import styled from 'styled-components';

export const Section = styled.div`
  max-width: 859px;
  margin: 0 auto;
  @media screen and (min-width: 320px) and (max-width: 728px) {
    margin-top: 15px;
  }
`;

export const Form = styled.form`
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 728px) {
    .filter_name {
      max-width: 100px;
    }
    flex-direction: column;
    gap: 20px;
  }
`;

export const Label = styled.label`
  margin-bottom: 8px;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`;

export const Div = styled.div`
  padding: 14px 8px 0 18px;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  padding: 14px 44px;
  max-width: 136px;
  color: #fff;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    background-color: #0b44cd;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 18px;

  @media screen and (min-width: 320px) and (max-width: 728px) {
    .filter_name {
      max-width: 100px;
    }
    flex-direction: column;
  }
`;

export const ButtonBack = styled.button`
  cursor: pointer;
  border-radius: 12px;
  background-color: transparent;
  border: transparent;
  text-decoration-line: underline;
  border: none;
  padding: 14px;
  max-width: 136px;
  color: #3470ff;
  margin-bottom: 10px;
`;

export const CarNotFound = styled.p`
  font-size: 34px;
`;
