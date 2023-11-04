import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import IconButton from '@mui/joy/IconButton';
import priceCar from '../../helpers/price.json';
import { AiOutlineClose } from 'react-icons/ai';
import { Div, Label } from '../Filter/Filter.styled';
import { useRef } from 'react';
import { Wrapper } from '../FilterName/FilterName.styled';

export const FilterPrice = ({ price, setPrice }) => {
  const action = useRef(null);

  return (
    <Wrapper>
      <Label htmlFor="select">Price/ 1 hour</Label>
      <Select
        action={action}
        value={price}
        name="price"
        placeholder="To $"
        onChange={(e, newValue) => setPrice(newValue)}
        {...(price && {
          endDecorator: (
            <IconButton
              size="sm"
              variant="plain"
              color="neutral"
              onMouseDown={event => {
                event.stopPropagation();
              }}
              onClick={() => {
                setPrice('');
                action.current?.focusVisible();
              }}
            >
              <AiOutlineClose />
            </IconButton>
          ),
          indicator: null,
        })}
        sx={{
          minWidth: 125,
          height: 48,
          border: 'none',
          borderRadius: 14,
        }}
      >
        <Div>
          {priceCar.map((item, index) => (
            <Option
              value={item}
              key={index}
              sx={{
                color: 'rgba(18, 20, 23, 0.2)',
                maxHeight: 50,
                borderRadius: 5,
              }}
            >
              {item}
            </Option>
          ))}
        </Div>
      </Select>
    </Wrapper>
  );
};
