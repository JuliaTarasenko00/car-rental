import { useRef } from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import IconButton from '@mui/joy/IconButton';
import select from '../../helpers/select.json';
import { AiOutlineClose } from 'react-icons/ai';
import { Div, Label } from '../Filter/Filter.styled';
import { Wrapper } from './FilterName.styled';

export const FilterName = ({ name, setName }) => {
  const action = useRef(null);

  return (
    <Wrapper>
      <Label htmlFor="select">Car brand</Label>
      <Select
        action={action}
        value={name}
        name="car"
        placeholder="Enter the text"
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
