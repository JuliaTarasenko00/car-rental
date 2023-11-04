import { useDispatch, useSelector } from 'react-redux';
import { CatalogList } from '../../components/CatalogList/CatalogList';
import { favoriteCar } from '../../redux/selector';
import { useCallback } from 'react';
import { getDetailsCar } from '../../redux/cars/operation';
import { ModalComponent } from '../../components/Modal/Modal';
import { DetailsCar } from '../../components/DetailsCar/DetailsCar';
import { Filter } from '../../components/Filter/Filter';
import { useNavigate } from 'react-router-dom';
import { Button, Title, Wrapper } from './Favorite.styled';
import { useFilterCar } from '../../helpers/hooks/useFilterCar';
import { useModal } from '../../helpers/hooks/useModal';

const Favorite = () => {
  const favorite = useSelector(favoriteCar);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filter = useFilterCar(favoriteCar);
  const { modalOpen, openModal, closeModal } = useModal();

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
      {favorite.length === 0 && (
        <Wrapper>
          <Title>The list of favorite cars is still empty</Title>
          <Button onClick={() => navigate('/catalog')}>To the catalog</Button>
        </Wrapper>
      )}
      {favorite.length !== 0 && (
        <>
          <CatalogList cars={filter} openModal={onClickModal} />
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

export default Favorite;
