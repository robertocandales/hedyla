import React from 'react';
import { FlexLayout } from '../../../../shared/globalStyles';
import GoogleMaps from '../../../../shared/GoogleMaps';

interface Props {}

const CuscomMap = (_props: Props) => {
  return (
    <FlexLayout align='center' justify='center'>
      <GoogleMaps />
    </FlexLayout>
  );
};

export default CuscomMap;
