import React from 'react';
import { useAppSelector } from '../../../../redux/store/hooks';
//import CustomInput from '../../../../shared/CustomInput';
import { FlexLayout, Text } from '../../../../shared/globalStyles';

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
  const { originCoordenates, destinationCoordenates } = useAppSelector(
    (store) => store.routeCalculator,
  );
  return (
    <>
      <Text fontWeight='700' fontsize='20px'>
        {data.title}
      </Text>
      <FlexLayout flexDirection='column' align='center' justify='center'>
        <Text margin='30px 0 0 0' fontWeight='700' fontsize='18px'>
          {data.origin.title}
        </Text>
        <Text margin='10px 0 0 0' fontWeight='500' fontsize='18px'>
          Latitud {originCoordenates.lat}
        </Text>
        <Text margin='10px 0 10px 0px' fontWeight='500' fontsize='18px'>
          Longitud {originCoordenates.lng}
        </Text>
      </FlexLayout>

      <FlexLayout flexDirection='column' align='center' justify='center'>
        <Text margin='30px 0 0 0' fontWeight='700' fontsize='18px'>
          {data.destination.title}
        </Text>
        <Text margin='10px 0 0 0' fontWeight='500' fontsize='18px'>
          Latitud {destinationCoordenates.lat}
        </Text>
        <Text margin='10px 0 20px 0' fontWeight='500' fontsize='18px'>
          Longitud {destinationCoordenates.lng}
        </Text>
      </FlexLayout>
      {/*to use in the future with Autocomplete component to get addresses from google maps*/}
      {/*<CustomInput
        value={CustomInput3.value}
        onChange={CustomInput3.onChange}
        placeholder={data.origin.lat}
      />
      <CustomInput
        value={CustomInput4.value}
        onChange={CustomInput4.onChange}
        placeholder={data.origin.lng}
      />*/}

      {/*<CustomInput
        value={CustomInput5.value}
        onChange={CustomInput5.onChange}
        placeholder={data.destination.lat}
      />
      <CustomInput
        value={CustomInput6.value}
        onChange={CustomInput6.onChange}
        placeholder={data.destination.lng}
      />*/}
    </>
  );
};

export default AutomaticCalculator;
