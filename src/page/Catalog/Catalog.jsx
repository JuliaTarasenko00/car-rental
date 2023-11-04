import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  getCarsEverything,
  getCarsRental,
  getDetailsCar,
} from '../../redux/cars/operation';
import { CatalogList } from '../../components/CatalogList/CatalogList';
import { Button, CarNotFound } from './Catalog.styled';
import { ModalComponent } from '../../components/Modal/Modal';
import { DetailsCar } from '../../components/DetailsCar/DetailsCar';
import {
  allCars,
  detailsCars,
  everythingCar,
  filterCar,
} from '../../redux/selector';
import { Filter } from '../../components/Filter/Filter';
import { useFilterCar } from '../../helpers/hooks/useFilterCar';
import { useModal } from '../../helpers/hooks/useModal';

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(allCars);
  const number = useSelector(everythingCar);
  const carFilter = useSelector(filterCar);
  const [page, setPage] = useState(1);
  const isLoading = useSelector(state => state.cars.isLoading);
  const filter = useFilterCar(detailsCars);
  const { modalOpen, openModal, closeModal } = useModal();

  const render = useMemo(
    () => (carFilter.length !== 0 ? filter : cars),
    [carFilter, filter, cars]
  );

  const handelClick = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  useEffect(() => {
    if (cars.length === 0 || page >= 2) {
      dispatch(getCarsRental(page));
      dispatch(getCarsEverything());
    }
  }, [cars, dispatch, page]);

  const onClickModal = useCallback(
    id => {
      openModal();
      dispatch(getDetailsCar(id));
    },
    [dispatch, openModal]
  );

  return (
    <>
      <Filter />
      {filter.length === 0 && !isLoading && (
        <CarNotFound>Oops car not found 🫥</CarNotFound>
      )}
      {cars.length !== 0 && (
        <>
          <CatalogList openModal={onClickModal} cars={render} />
          {cars.length !== 0 &&
            number !== cars.length &&
            carFilter.length === 0 && (
              <Button type="button" onClick={() => handelClick()}>
                Load More
              </Button>
            )}
          {modalOpen && (
            <ModalComponent onClose={closeModal}>
              <DetailsCar />
            </ModalComponent>
          )}
        </>
      )}
    </>
  );
};

export default Catalog;
