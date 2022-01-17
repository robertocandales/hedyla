import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ICoordinates } from '../../../../config/DTOs/routeTypes';
import { Theme } from '../../../../config/theme';
import { routeAction } from '../../../../redux/actions/routeActions';
import { useAppSelector } from '../../../../redux/store/hooks';
//import AutocompleteInput from '../../../../shared/AutocompleteInput';
import CustomButton from '../../../../shared/CustomButton';
import Divider from '../../../../shared/Divider';
import { FlexLayout, Text } from '../../../../shared/globalStyles';
import AutomaticCalculator from '../AutomaticCalculator';
import ManualCalculator from '../ManualCalculator';

//customHook
import { useOnchange } from '../../../../shared/hooks/useOnchange';

//styles
import { WrapperCalculator, Card } from './styles';

interface Props {}

const Calculator = (_props: Props) => {
  const dispatch = useDispatch();
  const CustomInput1 = useOnchange();
  const CustomInput2 = useOnchange();
  const CustomInput3 = useOnchange();
  const CustomInput4 = useOnchange();
  const CustomInput5 = useOnchange();
  const CustomInput6 = useOnchange();
  const {
    route = [],
    isloading,
    error,
    feed,
    originCoordenates,
    destinationCoordenates,
  } = useAppSelector((store) => store.routeCalculator);
  const [manualCalcValue, setManualCalcValue] = useState<number>(0);

  const manualCalculation = () => {
    const manual = Number(CustomInput1?.value) * Number(CustomInput2?.value);
    setManualCalcValue(manual);
  };
  const automaticCalculation = () => {
    const coordinates: ICoordinates = {
      origin: { lat: originCoordenates.lat, lng: originCoordenates.lng },
      destination: {
        lat: destinationCoordenates.lat,
        lng: destinationCoordenates.lng,
      },
    };

    dispatch(routeAction(coordinates));
  };

  return (
    <WrapperCalculator flexDirection='column' align='center'>
      <ManualCalculator
        CustomInput1={CustomInput1}
        CustomInput2={CustomInput2}
        manualCalculation={manualCalculation}
        manualCalcValue={manualCalcValue}
      />

      <Divider />

      <AutomaticCalculator
        CustomInput3={CustomInput3}
        CustomInput4={CustomInput4}
        CustomInput5={CustomInput5}
        CustomInput6={CustomInput6}
      />

      <CustomButton margin='10px 0 10px 0' disabled={isloading} onClick={automaticCalculation}>
        Calculate
      </CustomButton>
      {route.length > 0 && (
        <Card>
          <FlexLayout flexDirection='column'>
            {(route || []).map((waypoint, index) => (
              <FlexLayout key={waypoint.hint} flexDirection='column'>
                <Text margin='10px 0 0 0' fontWeight='600' fontsize='16px'>
                  Distance #{index + 1}: {waypoint.distance}  m
                </Text>
                <Text margin='10px 0 0 0' fontWeight='600' fontsize='16px'>
                  Name : {waypoint.name ? waypoint.name : 'N/A'}
                </Text>
                <Text
                  margin='10px 0 0 0'
                  fontWeight='600'
                  fontsize='16px'
                  color={Theme.colors.error}>
                  Price : {feed * waypoint.distance} €
                </Text>
              </FlexLayout>
            ))}
          </FlexLayout>
        </Card>
      )}

      {error && (
        <Text margin='10px 0 0 0' fontWeight='500' fontsize='16px' color={Theme.colors.error}>
          An error occurred while wait API
        </Text>
      )}
    </WrapperCalculator>
  );
};

export default Calculator;
