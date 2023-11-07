import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  object-fit: cover;
  object-position: center;
  max-height: 230px;
  border-radius: 24px;
`;

export const TitleNameCar = styled.h3`
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 5px;
  margin-top: 14px;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const WrapperDetails = styled.div`
  display: flex;
  gap: 5px;
`;

export const Title = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
`;

export const Description = styled.p`
  color: #121417;
  font-size: 14px;
  line-height: 1.42;
  margin-top: 14px;
  margin-bottom: 18px;
`;

export const Accessories = styled.h4`
  color: #121417;
  font-size: 14px;
  line-height: 1.42;
  font-weight: 500;
`;

export const AccessoriesList = styled.ul``;

export const AccessoriesTitle = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 8px;
`;

export const TitleRental = styled.h4`
  margin-top: 18px;
`;

export const WrapperRental = styled.ul`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 12px;
`;

export const RentalDetails = styled.p`
  color: #363535;
  font-size: 15px;
  line-height: 1.5;
`;

export const Link = styled.a`
  display: block;
  max-width: ${({ $datadisabled }) =>
    $datadisabled === 'true' ? '268px' : '168px'};
  max-height: 44px;
  background-color: #3470ff;
  text-decoration: none;
  border-radius: 12px;
  color: #fff;
  margin-top: 24px;
  padding: 12px;
  text-align: center;

  &:hover,
  :focus {
    background-color: #0b44cd;
  }
`;
