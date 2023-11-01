import * as React from 'react';
import { Dayjs } from 'dayjs';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { UseDateFieldProps } from '@mui/x-date-pickers/DateField';
import {
  BaseSingleInputFieldProps,
  DateValidationError,
  FieldSection,
} from '@mui/x-date-pickers/models';

import DatePickerStyles from "./DatePicker.styles";

interface ButtonFieldProps
  extends UseDateFieldProps<Dayjs>,
    BaseSingleInputFieldProps<
      Dayjs | null,
      Dayjs,
      FieldSection,
      DateValidationError
    > {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

function ButtonField(props: ButtonFieldProps) {
  const {
    setOpen,
    label,
    id,
    disabled,
    InputProps: { ref } = {},
    inputProps: { 'aria-label': ariaLabel } = {},
  } = props;

  return (
    <Button
      variant="outlined"
      id={id}
      disabled={disabled}
      ref={ref}
      aria-label={ariaLabel}
 
      sx={DatePickerStyles.button}
      onClick={() => setOpen?.((prev) => !prev)}
    >
      {label ? ` ${label}` : 'Travel Date'}
    </Button>
  );
}

function ButtonDatePicker(
  props: Omit<DatePickerProps<Dayjs>, 'open' | 'onOpen' | 'onClose'>,
) {
  const [open, setOpen] = React.useState(false);

  return (
    <DatePicker
      slots={{ field: ButtonField, ...props.slots }}
      slotProps={{ field: { setOpen } as any }}
      {...props}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      sx={DatePickerStyles.pop}
    />
  );
}

export default function PickerWithButtonField() {
  const [value, setValue] = React.useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <ButtonDatePicker
        label={value == null ? null : value.format('MM/DD/YYYY')}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        
      />
    </LocalizationProvider>
  );
}