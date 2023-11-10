import styled from 'styled-components';

export const CartList = styled.ul`
  display: flex;
  gap: 29px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 100px;
  justify-content: center;
`;

export const CarItem = styled.li`
  max-width: 274px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03) translateZ(10px);
  }
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
  object-fit: cover;
  object-position: center;
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
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);

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
  display: block;
  margin: 0 auto;
  background-color: #3470ff;
  border: none;
  border-radius: 12px;
  padding: 12px 0;
  width: 274px;
  max-width: 100%;
  text-align: center;

  color: #fff;
  font-size: 14px;
  line-height: 1.42;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    background-color: #0b44cd;
  }
`;
