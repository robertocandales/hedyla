import React from 'react';
import CustomInput from '../../../../shared/CustomInput';
import { Text } from '../../../../shared/globalStyles';

//data
import data from '../../data/automaticCalculator.json';

interface inputTypes {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  reset: () => void;
}

interface Props {
  CustomInput3: inputTypes;
  CustomInput4: inputTypes;
  CustomInput5: inputTypes;
  CustomInput6: inputTypes;
}

const AutomaticCalculator = ({ CustomInput3, CustomInput4, CustomInput5, CustomInput6 }: Props) => {
  return (
    <>
      <Text fontWeight='700' fontsize='20px'>
        {data.title}
      </Text>
      <Text margin='10px 0 0 0' fontWeight='700' fontsize='18px'>
        {data.origin.title}
      </Text>
      <CustomInput
        value={CustomInput3.value}
        onChange={CustomInput3.onChange}
        placeholder={data.origin.lat}
      />
      <CustomInput
        value={CustomInput4.value}
        onChange={CustomInput4.onChange}
        placeholder={data.origin.lng}
      />

      <Text margin='10px 0 0 0' fontWeight='700' fontsize='18px'>
        {data.destination.title}
      </Text>
      <CustomInput
        value={CustomInput5.value}
        onChange={CustomInput5.onChange}
        placeholder={data.destination.lat}
      />
      <CustomInput
        value={CustomInput6.value}
        onChange={CustomInput6.onChange}
        placeholder={data.destination.lng}
      />
    </>
  );
};

export default AutomaticCalculator;
