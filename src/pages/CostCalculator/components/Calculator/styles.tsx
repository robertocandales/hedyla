import styled from 'styled-components';
import { Theme } from '../../../../config/theme';
import { isMobile, isSD } from '../../../../shared/globalStyles';

interface IWrapperCalculator {
  flexDirection?: string;
  align?: string;
  justify?: string;
}

export const WrapperCalculator = styled('div')`
  height: 100%;
  padding-top: 20px;
  background-color: ${Theme.colors.secondary};
  display: flex;
  flex-direction: ${({ flexDirection }: IWrapperCalculator) =>
    flexDirection ? flexDirection : 'row'};
  align-items: ${({ align }: IWrapperCalculator) => (align ? align : 'flex-start')};
  justify-content: ${({ justify }: IWrapperCalculator) => (justify ? justify : 'flex-start')};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  ${isSD(`
  width:350px;
    
  `)}
  ${isMobile(`
 padding-bottom:2vh;
    
  `)}
  &:hover {
    background: ${Theme.colors.warning};
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
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
