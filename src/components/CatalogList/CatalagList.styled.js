import styled from 'styled-components';

export const CartList = styled.ul`
  display: flex;
  gap: 29px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 100px;
`;

export const CarItem = styled.li`
  max-width: 274px;
`;

export const WrapperImg = styled.div`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    );
    border-radius: 14px;
  }
`;

export const Img = styled.img`
  position: relative;
  height: 268px;
  border-radius: 14px;
`;

export const ButtonFavorite = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;

  position: absolute;
  top: 14px;
  right: 14px;
  color: #fff;
  z-index: 30;

  &:hover {
    color: #3470ff;
  }
`;

export const DescriptionWrapper = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  margin-bottom: 8px;
`;

export const CarDescription = styled.p`
  color: #121417;
  font-size: 16px;
  line-height: 1.5;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const CarPrise = styled.p`
  color: #121417;
  font-size: 16px;
  line-height: 1.5;
`;

export const CarDetailed = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 11.5px;
  line-height: 1.5;
  margin-bottom: 28px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #3470ff;
  border: none;
  border-radius: 12px;
  padding: 12px 99px;
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
