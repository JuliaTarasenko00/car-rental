import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import IconButton from '@mui/joy/IconButton';

import select from '../../helpers/select.json';
import { AiOutlineClose } from 'react-icons/ai';
import { Div, Label } from '../Filter/Filter.styled';
import { Wrapper } from './FilterName.styled';
import { tokens } from 'i18n/tokens';

export const FilterName = ({ name, setName }) => {
  const action = useRef(null);
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Label htmlFor="select">{t(tokens.filter.carBrand)}</Label>
      <Select
        action={action}
        value={name}
        name="car"
        placeholder="Enter the text"
        className='filter_name'
        onChange={(e, newValue) => setName(newValue)}
        {...(name && {
          endDecorator: (
            <IconButton
              size="sm"
              variant="plain"
              color="neutral"
              onMouseDown={event => {
                event.stopPropagation();
              }}
              onClick={() => {
                setName('');
                action.current?.focusVisible();
              }}
            >
              <AiOutlineClose />
            </IconButton>
          ),
          indicator: null,
        })}
        sx={{
          minWidth: 224,
          height: 48,
          border: 'none',
          borderRadius: 14,
        }}
      >
        <Div>
          {select.map((item, index) => (
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
