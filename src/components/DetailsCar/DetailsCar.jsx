import { useSelector } from 'react-redux';
import { detailsCar } from '../../redux/selector';
import {
  Accessories,
  AccessoriesList,
  AccessoriesTitle,
  Container,
  Description,
  Img,
  Link,
  RentalDetails,
  Span,
  Title,
  TitleNameCar,
  TitleRental,
  WrapperDetails,
  WrapperRental,
} from './DetailsCat.styled';

export const DetailsCar = () => {
  const details = useSelector(detailsCar);

  const addressArray = details?.address.split(' ');
  let str = addressArray?.splice(3, 2).join(' | ');
  str = str?.replace(/,/g, '');
  const rentalArray = details?.rentalConditions.split(' ');
  const text = rentalArray?.splice(0, 2).join(' ');
  const age = rentalArray?.splice(0, 1).join(' ');
  const validDriver = rentalArray?.splice(0, 3).join(' ');
  const security = rentalArray?.splice(0).join(' ');
  const mileage = details?.mileage.toLocaleString('en-US');

  return (
    <Container>
      <Img
        src={details?.img}
        alt={details?.make}
        width="461"
        height="230"
        loading="lazy"
      />
      <TitleNameCar>
        {details?.make} <Span>{details?.model}</Span>, {details?.year}
      </TitleNameCar>
      <WrapperDetails>
        <Title>{str} |</Title>
        <Title>Id: {details?.id} |</Title>
        <Title>Year: {details?.year} |</Title>
        <Title>Type: {details?.type}</Title>
      </WrapperDetails>
      <WrapperDetails>
        <Title>Fuel Consumption: {details?.fuelConsumption} | </Title>
        <Title>Engine Size: {details?.engineSize}</Title>
      </WrapperDetails>
      <Description>{details?.description}</Description>
      <Accessories>Accessories and functionalities</Accessories>
      <AccessoriesList>
        <li>
          <AccessoriesTitle>
            {details?.accessories.join(' | ')}
          </AccessoriesTitle>
        </li>
        <li>
          <AccessoriesTitle>
            {details?.functionalities.join(' | ')}
          </AccessoriesTitle>
        </li>
      </AccessoriesList>
      <TitleRental>Rental Conditions</TitleRental>
      <WrapperRental>
        <li>
          <RentalDetails>
            {text} <Span>{age}</Span>
          </RentalDetails>
        </li>
        <li>
          <RentalDetails>{validDriver}</RentalDetails>
        </li>
        <li>
          <RentalDetails>{security}</RentalDetails>
        </li>
        <li>
          <RentalDetails>
            Mileage: <Span>{mileage}</Span>
          </RentalDetails>
        </li>
        <li>
          <RentalDetails>
            Price: <Span>{details?.rentalPrice}</Span>
          </RentalDetails>
        </li>
      </WrapperRental>
      <Link href="tel:+380730000000" className="rental-car-button">
        Rental Car
      </Link>
    </Container>
  );
};
