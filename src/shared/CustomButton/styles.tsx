import styled from 'styled-components';
import { Theme } from '../../config/theme';

interface IStyledButton {
  background?: string;
  color?: string;
  margin?: string;
}

export const StyledButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: inherit;
  color: ${({ color }: IStyledButton) => (color ? color : Theme.colors.primary)};
  background-color: ${({ background }: IStyledButton) =>
    background ? background : Theme.colors.softText};
  padding: 5px 10px 5px 10px;
  font-size: 18px;
  margin: ${({ margin }: IStyledButton) => (margin ? margin : '0')};
  border-radius: 10px;
  transition: 0.3s;

  &:hover {
    /*background: ${Theme.colors.warning};*/
    opacity: 0.5;
  }
`;
