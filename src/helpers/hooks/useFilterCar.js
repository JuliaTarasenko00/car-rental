import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { filterCar } from '../../redux/selector';

export const useFilterCar = selector => {
  const cars = useSelector(selector);
  const carFilter = useSelector(filterCar);

  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const newFilter = cars.filter(car => {
      let isMatch = true;

      if (carFilter?.price) {
        let s = car.rentalPrice;
        s = s.replace('$', '');
        isMatch = isMatch && Number(s) >= Number(carFilter.price);
      }

      if (carFilter?.name) {
        isMatch = isMatch && car.make.includes(carFilter.name);
      }

      return isMatch;
    });

    setFilter(newFilter);
  }, [cars, carFilter]);

  return filter;
};
