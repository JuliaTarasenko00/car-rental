import styled from 'styled-components';
import car from '../../img/rental_car.jpg';

export const Div = styled.div`
  position: relative;
  background-image: url(${car});
  height: 80vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Title = styled.p`
  position: absolute;
  top: 20vh;
  max-width: 200px;
  left: 50px;
  text-align: justify;
  font-size: 23px;
`;
