import React, { FC } from 'react';
//icons
import { FaSpinner } from 'react-icons/fa';
//styles
import { StyledButton } from './styles';

interface Props {
  children: string;
  margin?: string;
  color?: string;
  onClick: () => void;
  disabled?: boolean;
  background?: string;
  icon?: JSX.Element;
}

const CustomButton: FC<Props> = ({
  children,
  background,
  color,
  onClick,
  disabled = false,
  margin,
  icon,
}: Props) => {
  return (
    <>
      <StyledButton
        background={background}
        color={color}
        margin={margin}
        onClick={onClick}
        disabled={disabled}>
        {disabled && (
          <>
            <FaSpinner /> &nbsp;
          </>
        )}
        {icon && <>{icon} &nbsp;</>} {children}
      </StyledButton>
    </>
  );
};

export default CustomButton;
