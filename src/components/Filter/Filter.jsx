import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

export const Filter = ({ filter }) => {
  const dispatch = useDispatch();
  const carFilter = useSelector(filterCar);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [click, setClick] = useState(false);

  const handelSubmit = ev => {
    ev.preventDefault();

    if (name === null && price === null) {
      return toast.warning('Select auto', styleToastify);
    }

    if (carFilter.name !== name || carFilter.price !== price) {
      return dispatch(filterSliceCar({ name, price }));
    } else {
      return toast.warning(
        'You are already looking at this machine, choose another one or go to the catalog',
        styleToastify
      );
    }
  };

  const clearForm = () => {
    dispatch(filterSliceCar([]));
    dispatch(getCarsRental());
    setName('');
    setPrice('');
    setClick(false);
  };

  return (
    <Section>
      <Form onSubmit={handelSubmit}>
        <Wrapper>
          <FilterName name={name} setName={setName} />
          <FilterPrice price={price} setPrice={setPrice} />
        </Wrapper>
        <div>
          <Button type="submit" onClick={() => setClick(true)}>
            Search
          </Button>
          {carFilter.length !== 0 && (
            <ButtonBack type="button" onClick={clearForm}>
              Clear
            </ButtonBack>
          )}
        </div>
      </Form>
      {filter.length === 0 && click && (
        <CarNotFound>Oops car not found 🫥</CarNotFound>
      )}
    </Section>
  );
};
