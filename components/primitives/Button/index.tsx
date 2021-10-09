import * as React from 'react';
import * as S from './styled';

type CommonProps = {
  size?: 'large' | 'medium' | 'small';
  borderRadius?: number;
  backgroundColor?: string;
  textColor?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isUpperCase?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

type ButtonProps = CommonProps & React.ComponentPropsWithRef<'button'>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = 'medium',
      borderRadius = 30,
      backgroundColor = 'orange1',
      textColor = 'orange5',
      isLoading = false,
      isDisabled = false,
      isUpperCase = true,
      ...props
    },
    componentRef
  ) => {
    return (
      <S.ButtonWrapper
        data-size={size}
        data-backgroundcolor={backgroundColor}
        data-textcolor={textColor}
        data-uppercase={isUpperCase}
        borderRadius={borderRadius}
        ref={componentRef}
        {...props}
      >
        {children}
      </S.ButtonWrapper>
    );
  }
);
