import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

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
import { tokens } from 'i18n/tokens';
import { LOCALS } from 'i18n/constants';

export const DetailsCar = () => {
  const details = useSelector(detailsCar);
  const { t } = useTranslation();

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
        <Title>
          {t(tokens.detailsCar.id)}: {details?.id} |
        </Title>
        <Title>
          {t(tokens.detailsCar.year)}: {details?.year} |
        </Title>
        <Title>
          {t(tokens.detailsCar.type)}: {details?.type}
        </Title>
      </WrapperDetails>
      <WrapperDetails>
        <Title>
          {t(tokens.detailsCar.fuelConsumption)}: {details?.fuelConsumption} |{' '}
        </Title>
        <Title>
          {t(tokens.detailsCar.engineSize)}: {details?.engineSize}
        </Title>
      </WrapperDetails>
      <Description>{details?.description}</Description>
      <Accessories>{t(tokens.detailsCar.accessories)}</Accessories>
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
      <TitleRental>{t(tokens.detailsCar.conditions)}</TitleRental>
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
            {t(tokens.detailsCar.mileage)}: <Span>{mileage}</Span>
          </RentalDetails>
        </li>
        <li>
          <RentalDetails>
            {t(tokens.detailsCar.price)}: <Span>{details?.rentalPrice}</Span>
          </RentalDetails>
        </li>
      </WrapperRental>

      <Link
        href="tel:+380730000000"
        className="rental-car-button"
        $datadisabled={(i18next.language === LOCALS.UK).toString()}
      >
        {t(tokens.nav.rental)}
      </Link>
    </Container>
  );
};
