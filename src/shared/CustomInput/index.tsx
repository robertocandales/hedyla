import React, { FC } from 'react';

//styles
import { Input } from './styles';

interface Props {
  placeholder?: string;
  type?: string;
  onChange?: (event: any) => void;
  value?: string;
}

const CustomInput: FC<Props> = ({
  placeholder = 'placeholder',
  type = 'text',
  onChange,
  value,
}: Props) => {
  return (
    <>
      <Input value={value ?? ''} type={type} placeholder={placeholder} onChange={onChange} />
    </>
  );
};

export default CustomInput;
