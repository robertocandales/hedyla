import styled from 'styled-components';
import { Theme } from '../../config/theme';
import { isMobile } from '../../shared/globalStyles';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  /*grid-template-columns: (auto-fill, minmax(min(100%, 22rem), 1fr));*/
  background-color: ${Theme.colors.primary};
  height: 100vh;
  overflow-y: auto;

  ${isMobile(`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
     overflow-y: auto;
      height: 100%;
  `)}
`;
