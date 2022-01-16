import styled from 'styled-components';
import { Theme } from '../../../../config/theme';

export const ManualCalulatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

export const Card = styled.div`
 transition: 0.3s;
 background: white;
 padding:10px;
 border-radius: 20px;
 width:85%;
  &:hover {
    background: ${Theme.colors.info};
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);`;
