import React from 'react';
import { Theme } from '../../../../config/theme';
import CustomButton from '../../../../shared/CustomButton';
import CustomInput from '../../../../shared/CustomInput';
import { FlexLayout, Text } from '../../../../shared/globalStyles';

//styles
import { Card, ManualCalulatorWrapper } from './styles';

//data
import data from '../../data/manualCalcualtor.json';

//icons
import { FaTruck } from 'react-icons/fa';
import { FaCarSide } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { chooseFeedAction } from '../../../../redux/actions/routeActions';
import { useAppSelector } from '../../../../redux/store/hooks';

interface inputTypes {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  reset: () => void;
}

interface Props {
  CustomInput1: inputTypes;
  CustomInput2: inputTypes;
  manualCalculation: () => void;
  manualCalcValue: number;
}

const ManualCalculator = ({
  CustomInput1,
  CustomInput2,
  manualCalculation,
  manualCalcValue,
}: Props) => {
  const { feed } = useAppSelector((store) => store.routeCalculator);

  const dispatch = useDispatch();

  const feedSelected = (value: number) => {
    dispatch(chooseFeedAction(value));
  };
  return (
    <ManualCalulatorWrapper>
      <Text fontWeight='700' fontsize='20px'>
        {data.title}
      </Text>

      <CustomInput
        value={CustomInput1.value}
        onChange={CustomInput1.onChange}
        placeholder={data.placeholderInputdistance}
      />
      <CustomInput
        value={CustomInput2.value}
        onChange={CustomInput2.onChange}
        placeholder={data.placeholderInputkm}
      />
      <Text fontWeight='700' fontsize='20px'>
        {data.choose_feed.title}
      </Text>
      <FlexLayout justify='space-around'>
        <CustomButton
          icon={<FaTruck />}
          margin='10px 5px 10px 0'
          color={Theme.colors.softText}
          background={feed === 0.5 ? Theme.colors.primary : Theme.colors.info}
          onClick={() => feedSelected(0.5)}>
          {data.choose_feed.option1}
        </CustomButton>
        <CustomButton
          icon={<FaCarSide />}
          color={Theme.colors.softText}
          background={feed === 0.25 ? Theme.colors.primary : Theme.colors.info}
          margin='10px 0 10px 5px'
          onClick={() => feedSelected(0.25)}>
          {data.choose_feed.option2}
        </CustomButton>
      </FlexLayout>
      <CustomButton margin='10px 0 10px 0' onClick={manualCalculation}>
        {data.calculate}
      </CustomButton>
      <Card>
        <Text margin='10px 0 10px 0' fontWeight='600' fontsize='16px'>
          {data.distance} :{manualCalcValue}
        </Text>
        <Text margin='10px 0 10px 0' fontWeight='600' fontsize='16px'>
          {data.price} :{manualCalcValue * feed}
        </Text>
      </Card>
    </ManualCalulatorWrapper>
  );
};

export default ManualCalculator;
