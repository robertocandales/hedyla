import styled from 'styled-components';
import { Theme } from '../../config/theme';

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: ${Theme.colors.primary};
  border: none;
  border-radius: 20px;
  ::placeholder {
    color: ${Theme.colors.lightText};
  }
`;
