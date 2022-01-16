import * as React from 'react';
import { Autocomplete } from '@react-google-maps/api';

import CustomInput from '../CustomInput';

interface Props {
  placeholder?: string;
  type?: string;
  onChange?: (event: any) => void;
  value?: string;
}

function AutocompleteInput({ placeholder = 'placeholder', type = 'text', onChange, value }: Props) {
  return (
    <>
      <Autocomplete>
        <CustomInput value={value} onChange={onChange} placeholder={placeholder} type={type} />
      </Autocomplete>
      <></>
    </>
  );
}

export default React.memo(AutocompleteInput);
