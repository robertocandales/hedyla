import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../config/theme';

export const DividerStyles = styled.hr`
  border-top: 2px solid ${Theme.colors.error};
  width: 100%;
`;

interface Props {}

const Divider = (_props: Props) => {
  return (
    <>
      <DividerStyles />
    </>
  );
};

export default Divider;
