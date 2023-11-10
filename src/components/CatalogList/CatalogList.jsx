import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

import {
  Button,
  ButtonFavorite,
  CarDescription,
  CarDetailed,
  CarItem,
  CarPrise,
  CartList,
  DescriptionWrapper,
  Img,
  Span,
  Wrapper,
  WrapperImg,
} from './CatalagList.styled';
import { addFavorite, deleteFavorite } from '../../redux/favorite/slice';
import { favoriteCar } from '../../redux/selector';
import { tokens } from 'i18n/tokens';

export const CatalogList = ({ cars, openModal }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const favorite = useSelector(favoriteCar);

  const addCarFavorite = id => {
    const car = cars.find(item => item.id === id);
    const deleteCar = favorite.find(item => item.id === id);

    if (deleteCar) {
      return dispatch(deleteFavorite(deleteCar));
    } else {
      return dispatch(addFavorite(car));
    }
  };

  return (
    <CartList>
      {cars?.map(
        ({
          img,
          id,
          make,
          year,
          model,
          rentalPrice,
          mileage,
          type,
          rentalCompany,
          accessories,
          address,
        }) => {
          const addressArray = address.split(' ');
          let str = addressArray.splice(3, 2).join(' | ');
          str = str.replace(/,/g, '');
          const accessoriesCopy = [...accessories];
          const accessory = accessoriesCopy?.splice(0, 1);
          return (
            <CarItem key={id}>
              <WrapperImg>
                <Img
                  src={img}
                  alt={make}
                  loading="lazy"
                  width="274"
                  height="268"
                />
                <ButtonFavorite
                  type="button"
                  onClick={() => addCarFavorite(id)}
                >
                  {favorite.find(item => item.id === id) ? (
                    <AiFillHeart color="blue" />
                  ) : (
                    <AiOutlineHeart />
                  )}
                </ButtonFavorite>
              </WrapperImg>
              <DescriptionWrapper>
                <Wrapper>
                  <CarDescription>
                    {make} <Span>{model}</Span>, {year}
                  </CarDescription>
                  <CarPrise>{rentalPrice}</CarPrise>
                </Wrapper>
                <CarDetailed>
                  {str} | {rentalCompany} | {type} | {model} | {mileage} |{' '}
                  {accessory.join('')}
                </CarDetailed>
                <Button type="button" onClick={() => openModal(id)}>
                  {t(tokens.nav.learnMore)}
                </Button>
              </DescriptionWrapper>
            </CarItem>
          );
        }
      )}
    </CartList>
  );
};

CatalogList.protoType = {
  openModal: PropTypes.func.isRequired,
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
      address: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      engineSize: PropTypes.string.isRequired,
      fuelConsumption: PropTypes.string.isRequired,
      functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      make: PropTypes.string.isRequired,
      mileage: PropTypes.number.isRequired,
      model: PropTypes.string.isRequired,
      rentalCompany: PropTypes.string.isRequired,
      rentalConditions: PropTypes.string.isRequired,
      rentalPrice: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
    })
  ).isRequired,
};
