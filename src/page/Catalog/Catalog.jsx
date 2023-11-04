import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  getCarsEverything,
  getCarsRental,
  getDetailsCar,
} from '../../redux/cars/operation';
import { CatalogList } from '../../components/CatalogList/CatalogList';
import { Button } from './Catalog.styled';
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
  const { modalOpen, openModal, closeModal } = useModal();

  const filter = useFilterCar(detailsCars);

  const render = useMemo(
    () => (carFilter.length !== 0 ? filter : cars),
    [carFilter, filter, cars]
  );

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(getCarsRental(page));
    }
  }, [cars, dispatch, page]);

  const handelClick = () => {
    setPage(page + 1);
    dispatch(getCarsEverything());
  };

  useEffect(() => {
    if (page >= 2) {
      dispatch(getCarsRental(page));
    }
  }, [page, dispatch]);

  const onClickModal = useCallback(
    id => {
      openModal();
      dispatch(getDetailsCar(id));
    },
    [dispatch, openModal]
  );

  return (
    <>
      <Filter filter={filter} />
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
