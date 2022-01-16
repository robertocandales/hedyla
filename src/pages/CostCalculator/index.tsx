import React from 'react';
import Calculator from './components/Calculator';
import CuscomMap from './components/CustomMap';

//styles
import { Container } from './styles';

interface Props {}

const CostCalculator = (_props: Props) => {
  return (
    <Container>
      <Calculator />
      <CuscomMap />
    </Container>
  );
};

export default CostCalculator;
