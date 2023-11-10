import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/joy/IconButton';
import priceCar from '../../helpers/price.json';
import { AiOutlineClose } from 'react-icons/ai';
import { Div, Label } from '../Filter/Filter.styled';
import { useRef } from 'react';
import { Wrapper } from '../FilterName/FilterName.styled';
import { tokens } from 'i18n/tokens';

export const FilterPrice = ({ price, setPrice }) => {
  const action = useRef(null);
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Label htmlFor="select">{t(tokens.filter.priceHour)}</Label>
      <Select
        action={action}
        value={price}
        name="price"
        placeholder={`${t(tokens.filter.from)} $`}
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
