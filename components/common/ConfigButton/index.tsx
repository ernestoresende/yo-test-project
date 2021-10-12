import * as React from 'react';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import * as S from './styled';

type CommonProps = {
  name: string;
  icon: React.ReactNode;
  backgroundColor: string;
  iconColor: string;
  showName?: boolean;
  buttonSize?: number;
  iconSize?: number;
};

type ConfigButtonProps = CommonProps & React.ComponentPropsWithRef<'button'>;

export const ConfigButton = ({
  name,
  icon,
  backgroundColor,
  showName = false,
  iconColor,
  buttonSize = 48,
  iconSize = 24,
  ...props
}: ConfigButtonProps) => {
  return (
    <S.Wrapper buttonSize={buttonSize}>
      <S.StyledConfigButton
        type="button"
        name={name}
        buttonSize={buttonSize}
        data-backgroundcolor={backgroundColor}
        {...props}
      >
        <S.IconWrapper aria-hidden iconSize={iconSize} data-textcolor={iconColor}>
          {icon}
        </S.IconWrapper>
        <VisuallyHidden.Root>{name}</VisuallyHidden.Root>
      </S.StyledConfigButton>
      {showName ? <S.IconLabel>{name}</S.IconLabel> : null}
    </S.Wrapper>
  );
};
