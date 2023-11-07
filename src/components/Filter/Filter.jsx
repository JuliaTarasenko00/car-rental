import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { toast } from 'react-toastify';
import {
  Button,
  ButtonBack,
  CarNotFound,
  Form,
  Section,
  Wrapper,
} from './Filter.styled';
import { filterSliceCar } from '../../redux/filret/slice';
import { filterCar } from '../../redux/selector';
import { styleToastify } from '../toastify';
import { getCarsRental } from '../../redux/cars/operation';
import { FilterName } from '../FilterName/FilterName';
import { FilterPrice } from '../FilterPrice/FilterPrice';
import { tokens } from 'i18n/tokens';

export const Filter = ({ filter }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const carFilter = useSelector(filterCar);
  const { pathname } = useLocation();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const empty = !name && !price;

  const handelSubmit = ev => {
    ev.preventDefault();

    if (empty) {
      return toast.warning(`${t(tokens.filter.selectAuto)}`, styleToastify);
    }

    if (carFilter?.name !== name || carFilter?.price !== price) {
      return dispatch(filterSliceCar({ name, price }));
    } else {
      return toast.warning(
        `${t(tokens.filter.lookingThisMachine)}`,
        styleToastify
      );
    }
  };

  const clearForm = () => {
    if (pathname !== '/favorite') {
      dispatch(getCarsRental());
    }
    dispatch(filterSliceCar(null));
    setName('');
    setPrice('');
  };

  return (
    <Section>
      <Form onSubmit={handelSubmit}>
        <Wrapper>
          <FilterName name={name} setName={setName} />
          <FilterPrice price={price} setPrice={setPrice} />
        </Wrapper>
        <div>
          <Button type="submit">{t(tokens.filter.search)}</Button>
          {carFilter && (
            <ButtonBack type="button" onClick={clearForm}>
              {t(tokens.filter.clear)}
            </ButtonBack>
          )}
        </div>
      </Form>
      {filter.length === 0 && !empty && (
        <CarNotFound>{t(tokens.filter.notFound)} 🫥</CarNotFound>
      )}
    </Section>
  );
};
