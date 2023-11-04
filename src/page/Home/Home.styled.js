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

export const Button = styled.button`
  position: absolute;
  top: 30vh;
  left: 50px;
  cursor: pointer;

  position: absolute;
  top: 30vh;
  left: 50px;
  border: none;
  max-width: 200px;
  padding: 20px;
  border-radius: 50px;
  color: #fff;
  background-color: #3470ff;
`;
